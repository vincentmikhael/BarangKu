import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View,TextInput,Button } from "react-native";
import ProductBox from '../components/ProductBox';
import { TouchableOpacity } from 'react-native-gesture-handler';

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
  useEffect(()=>{
    axios.get('https://656beb3de1e03bfd572de674.mockapi.io/barangku/post').then(e=>{
      setData(e.data)
    })
  },[])
    return(
      <View>
        <View style={comp.container}>
            <Text style={{fontWeight: 'bold',fontSize: 30,marginTop: 25}}>Edit Profile</Text>
          <Image style={comp.image} source={{uri: 'https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg'}}></Image>
          <Text style={{marginBottom: 30}}>Vincent Mikhael</Text>
        </View>

        <Text style={{marginLeft: 10, fontWeight: 'bold',fontSize: 35}}>
            Iklan Saya
        </Text>
        <View style={post.container}>
          {data.map(e=>{
            return (
                <ProductBox key={e.id} id={e.id} judul={e.nama} harga={e.harga} lokasi="Arjosari, Malang" foto={e.foto} profile={true}/>
            )
            
          })}
        </View>

      </View>
        
    )
}