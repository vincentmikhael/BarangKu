import React, { useState } from 'react';
import { Text,TextInput, View,StyleSheet,ImageBackground,Image,Dimensions, ScrollView, Button} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import DropdownSelect from 'react-native-input-select';

export default function AddPost(){
    const [country, setCountry] = useState();
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
    return (
        <View style={post.container}>
            <Text style={post.header}>Buat Iklan</Text>

            <Text style={{marginTop: 25}}>Judul Iklan</Text>
            <TextInput style={post.input} placeholder=''></TextInput>

            <Text style={{marginTop: 25,marginBottom: 4}}>Kategori</Text>
            <DropdownSelect placeholder='Pilih Kategori' dropdownStyle={{borderColor: 'lightgray',backgroundColor: 'transparent'}} options={[
        { label: 'Hp dan Tablet', value: 'NG' },
        { label: 'Peralatam Rumah Tangga', value: 'AX' },
        { label: 'Properti', value: 'DZ' },
        { label: 'Pc dan Laptop', value: 'AS' },
        { label: 'Aksesoris Gadget', value: 'AD' },
      ]}
      onValueChange={(value) => setCountry(value)}
      >

      </DropdownSelect>

            <Text style={{marginTop: 25}}>Harga</Text>
            <TextInput style={post.input} placeholder='Rp. '></TextInput>

            <Text style={{marginTop: 25}}>Deskripsi</Text>
            <TextInput style={post.textarea} multiline={true}></TextInput>

            <TouchableOpacity style={{backgroundColor: 'purple',width: 160,padding: 15,borderRadius: 10,marginTop: 20}}>
                <Text style={{color: 'white',textAlign: 'center'}}>Upload</Text>
            </TouchableOpacity>


        </View>
    )
}