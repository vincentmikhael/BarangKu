
import React, { useEffect, useState } from 'react';
import { Text,TextInput, View,StyleSheet,ImageBackground,Image,Dimensions, ScrollView, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'
import ProductBox from '../components/ProductBox';
import KategoriBox from '../components/KategoriBox';
import axios from 'axios';
import firestore from '@react-native-firebase/firestore';
import {useNavigation} from '@react-navigation/native';


const searchbar = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 4,
    flexDirection: 'row', // Untuk menata ikon dan input secara horizontal
    alignItems: 'center', // Untuk menengahkan ikon dan input secara vertikal
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1, // Mengisi sisa ruang yang tersedia
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 30,
    padding: 10,
    backgroundColor: '#efefef'
  },
});
const cardSaldo = StyleSheet.create({
  card: {
    elevation: 3,
    backgroundColor: 'white',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    borderRadius: 20,
  }
})
const category = StyleSheet.create({
  container: {
    gap: 10 
  },
})

const post = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: 7
  },
})


const slider = StyleSheet.create({
  image: {width: 250,height: 150,marginHorizontal: 10,borderRadius: 20,resizeMode: 'contain'}
})
export default function Filter() {

  const [search,setSearch] = useState("")
  const [data,setData] = useState([])

  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const [blogData, setBlogData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  useEffect(() => {
    const subscriber = firestore()
      .collection('blog')
      .onSnapshot(querySnapshot => {
        const blogs = [];
        querySnapshot.forEach(documentSnapshot => {
          blogs.push({
            ...documentSnapshot.data(),
            id: documentSnapshot.id,
          });
        });
        setBlogData(blogs);
        setLoading(false);
      });
    return () => subscriber();
  }, []);
  
    return (
      <ScrollView>
        <View style={searchbar.card}>
        <TextInput
          style={searchbar.input}
          onChange={e=>setSearch(e.target.value)}
          placeholder="Cari barang disini"

        />
        <TouchableOpacity onPress={()=> navigation.navigate('Filter')} style={{padding: 10,backgroundColor: '#34056e', borderRadius: 50,marginLeft: 10}}>
          <Icon style={category.icon} name="search" size={18} color="white"></Icon>
        </TouchableOpacity>
   
        </View>
      

        <Text style={{marginLeft: 15,fontSize: 16,fontWeight: 'bold',color: 'black',marginTop: 35}}>Hasil Pencarian (5)</Text>
        <View style={post.container}>
          {blogData.map(e=>{
            return <ProductBox id={e.id} judul={e.nama} harga={e.harga} lokasi="Arjosari, Malang" foto={e.foto}/>
          })}
        </View>
      </ScrollView>
    )
}