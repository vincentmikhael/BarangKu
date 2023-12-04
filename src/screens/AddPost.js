import { useNavigation, useRoute } from '@react-navigation/native';
import axios from 'axios';
import React, { useState } from 'react';
import { Text,TextInput, View,StyleSheet,ImageBackground,Image,Dimensions, ScrollView, Button, Alert} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import DropdownSelect from 'react-native-input-select';

export default function AddPost(){
  const route = useRoute();
  const navigation = useNavigation();
    const [country, setCountry] = useState();
    const [data,setData] = useState({
      judul: '',
      kategori: '',
      harga: 0,
      deskripsi: '',
    })
    const post = StyleSheet.create({
        container: {
            padding: 20
        },
        header: {
            fontSize: 25,
            color: 'black',
        },
        input:{
            borderColor: 'lightgray',
            borderWidth: 1,
            height: 45,
            marginTop: 10,
            borderRadius: 10
        },
        textarea: {
            borderColor: 'lightgray',
            borderWidth: 1,
            height: 145,
            marginTop: 10,
            borderRadius: 10
        }
    })

    const setUpload = async () => {
        // setLoading(true);
        try {
          await axios.post('https://656beb3de1e03bfd572de674.mockapi.io/barangku/post', {
              nama: data.judul,
              kategori: data.kategori,
              foto: 'foto10',
              harga: data.harga,
              deskripsi: data.deskripsi
            })
            .then(function (response) {
              console.log(response);
            })
            .catch(function (error) {
              console.log(error);
            });
        //   setLoading(false);
          navigation.navigate('Profile');
        } catch (e) {
          console.log(e);
        }
      };
    return (
        <View style={post.container}>
          {route.hasOwnProperty('params') ? <Text style={post.header}>Edit Iklan</Text> : <Text style={post.header}>Buat Iklan</Text>}
            

            <Text style={{marginTop: 25}}>Judul Iklan</Text>
            <TextInput onChangeText={(value) => setData({...data,judul: value})} style={post.input} placeholder=''></TextInput>

            <Text style={{marginTop: 25,marginBottom: 4}}>Kategori</Text>
            <DropdownSelect placeholder='Pilih Kategori' dropdownStyle={{borderColor: 'lightgray',backgroundColor: 'transparent'}} options={[
        { label: 'Hp dan Tablet', value: 'NG' },
        { label: 'Peralatam Rumah Tangga', value: 'AX' },
        { label: 'Properti', value: 'DZ' },
        { label: 'Pc dan Laptop', value: 'AS' },
        { label: 'Aksesoris Gadget', value: 'AD' },
      ]}
      onValueChange={(value) => setData({...data,kategori: value})}
      >

      </DropdownSelect>

            <Text style={{marginTop: 25}}>Harga</Text>
            <TextInput onChangeText={(value) => setData({...data,harga: value})} style={post.input} placeholder='Rp. '></TextInput>

            <Text style={{marginTop: 25}}>Deskripsi</Text>
            <TextInput onChangeText={(value) => setData({...data,deskripsi: value})} style={post.textarea} multiline={true}></TextInput>

            <TouchableOpacity onPress={setUpload} style={{backgroundColor: 'purple',width: 160,padding: 15,borderRadius: 10,marginTop: 20}}>
                <Text style={{color: 'white',textAlign: 'center'}}>Upload</Text>
            </TouchableOpacity>


        </View>
    )
}