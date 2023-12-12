import { useNavigation, useRoute } from '@react-navigation/native';
import axios from 'axios';
import React, { useState } from 'react';
import { Text,TextInput, View,StyleSheet,ImageBackground,Image,Dimensions, ScrollView, Button, Alert} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import DropdownSelect from 'react-native-input-select';
import ImagePicker from 'react-native-image-crop-picker';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import FastImage from 'react-native-fast-image';
import auth from '@react-native-firebase/auth';

export default function AddPost(){
  const [image, setImage] = useState(null);
  const route = useRoute();
  const navigation = useNavigation();
    const [country, setCountry] = useState();
    const [data,setData] = useState({
      judul: '',
      kategori: '',
      harga: 0,
      deskripsi: '',
    })

    const handleImagePick = async () => {
      ImagePicker.openPicker({
        width: 1920,
        height: 1080,
        cropping: true,
      })
        .then(image => {
          console.log(image);
          setImage(image.path);
        })
        .catch(error => {
          console.log(error);
        });
    };

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
            borderRadius: 10,
            marginBottom: 20
        }
    })

    const setUpload = async () => {
      const authorId = auth().currentUser.uid;
      let filename = image.substring(image.lastIndexOf('/') + 1);
    const extension = filename.split('.').pop();
    const name = filename.split('.').slice(0, -1).join('.');
    filename = name + Date.now() + '.' + extension;
    const reference = storage().ref(`blogimages/${filename}`);

        // setLoading(true);
        try {
          await reference.putFile(image);
          const url = await reference.getDownloadURL();
          await firestore().collection('blog').add({
            nama: data.judul,
            kategori: data.kategori,
            foto: url,
            harga: data.harga,
            deskripsi: data.deskripsi,
            authorId
          });
          console.log('Blog added!');
          navigation.navigate('Profile');
        } catch (error) {
          console.log(error);
        }
      };
    return (
        <View style={post.container}>
          {route.params ? <Text style={post.header}>Edit Iklan</Text> : <Text style={post.header}>Buat Iklan</Text>}
            

            <Text style={{marginTop: 25}}>Judul</Text>
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

            {image ? (
          <View style={{position: 'relative'}}>
            <FastImage
              style={{width: '100%', height: 127, borderRadius: 5}}
              source={{
                uri: image,
                headers: {Authorization: 'someAuthToken'},
                priority: FastImage.priority.high,
              }}
              resizeMode={FastImage.resizeMode.cover}
            />
            <TouchableOpacity
              style={{
                position: 'absolute',
                top: -5,
                right: -5,
                backgroundColor: 'blue',
                borderRadius: 25,
              }}
              onPress={() => setImage(null)}>
    
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity onPress={handleImagePick}>
            <View
              style={[
                textInput.borderDashed,
                {
                  gap: 10,
                  paddingVertical: 30,
                  justifyContent: 'center',
                  alignItems: 'center',
                },
              ]}>
          
              <Text
                style={{
                  fontSize: 12,
                }}>
                Upload Thumbnail
              </Text>
            </View>
          </TouchableOpacity>
        )}

            <TouchableOpacity onPress={setUpload} style={{backgroundColor: 'purple',width: 160,padding: 15,borderRadius: 10,marginTop: 20}}>
                <Text style={{color: 'white',textAlign: 'center'}}>Upload</Text>
            </TouchableOpacity>


        </View>
    )
}

const textInput = StyleSheet.create({
  borderDashed: {
    borderStyle: "dashed",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    borderColor: 'grey',
  },
  title: {
    fontSize: 16,
    color: 'black',
    padding: 0,
  },
  content: {
    fontSize: 12,
    color: 'black',
    padding: 0,
  },
});