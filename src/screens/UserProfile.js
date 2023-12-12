import axios from 'axios';
import React, {useEffect, useState, useCallback} from 'react';
import { Image, StyleSheet, Text, View,TextInput,Button } from "react-native";
import ProductBox from '../components/ProductBox';
import { TouchableOpacity } from 'react-native-gesture-handler';
import firestore from '@react-native-firebase/firestore';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

const comp = StyleSheet.create({
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    image: {
        width: 200,
        height: 200,
    },
    input: {
      borderWidth: 1,
      width: 200,
      height: 45,
      borderRadius: 12,
      marginVertical: 10,
      paddingHorizontal: 14,
      borderColor: 'lightgray'
    },
})

const post = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: 7
  },
})
export default function UserProfile(){
  const [data,setData] = useState([])
  const [profile,setProfile] = useState({});
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const [blogData, setBlogData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  useEffect(() => {
    fetchBlogData()
      fetchProfileData()
    // return () => subscriber();
  }, []);

  const fetchProfileData = () => {
    try {
      const user = auth().currentUser;
      if (user) {
        const userId = user.uid;
        const userRef = firestore().collection('users').doc(userId);

        const unsubscribeProfile = userRef.onSnapshot(doc => {
          if (doc.exists) {
            const userData = doc.data();
            setProfile(userData);
            // fetchBlogData();
          } else {
            console.error('Dokumen pengguna tidak ditemukan.');
          }
        });

        return () => {
          unsubscribeProfile();
        };
      }
    } catch (error) {
      console.error('Error fetching profile data:', error);
    }
  };

  const fetchBlogData = () => {
    const user = auth().currentUser;
    try {
      if (user) {
        const userId = user.uid;
        const blogCollection = firestore().collection('blog');
        const query = blogCollection.where('authorId', '==', userId);
        const unsubscribeBlog = query.onSnapshot(querySnapshot => {
          const blogs = querySnapshot.docs.map(doc => ({
            ...doc.data(),
            id: doc.id,
          }));
          setBlogData(blogs);
          setLoading(false);
        });

        return () => {
          unsubscribeBlog();
        };
      }
    } catch (error) {
      console.error('Error fetching blog data:', error);
    }
  };

    return(
      <View>
        <View style={comp.container}>
            <Text style={{fontWeight: 'bold',fontSize: 30,marginTop: 25}}>Edit Profile</Text>
          <Image style={comp.image} source={{uri: 'https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg'}}></Image>
          <Text style={{marginBottom: 30}}>{profile.fullName}</Text>
        </View>

        <Text style={{marginLeft: 10, fontWeight: 'bold',fontSize: 35}}>
            Iklan Saya
        </Text>
        <View style={post.container}>
          {blogData.map(e=>{
            return (
                <ProductBox key={e.id} id={e.id} judul={e.nama} harga={e.harga} lokasi="Arjosari, Malang" foto={e.foto} profile={true}/>
            )
            
          })}
        </View>

      </View>
        
    )
}