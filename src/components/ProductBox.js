import { Image, StyleSheet, Text, View, Alert } from "react-native"
import { TouchableHighlight, TouchableOpacity } from "react-native-gesture-handler"
import Icon from 'react-native-vector-icons/FontAwesome5'
import {useNavigation} from '@react-navigation/native';
import axios from "axios";
const post = StyleSheet.create({
    col: {
      width: '50%',
      padding: 10,
    },
    card: {
      borderWidth: 1,
      borderRadius: 6,
      borderColor: '#b8b8b8',
      padding: 7,
    },
    image: {
      width: '100%',
      height: 80
    },
    price: {
      fontWeight: 'bold',
      color: '#34056e'
    },
    lokasi: {
      flexDirection: 'row',
      alignItems: 'center'
    },
    title: {
      color: 'black'
    }
  })

export default function ProductBox({harga,judul,lokasi,foto,profile,id}){

  const handleDelete = async () => {
    setLoading(true);
    try {
      await firestore()
        .collection('blog')
        .doc(id)
        .delete()
        .then(() => {
          console.log('post deleted!');
        });
      if (selectedBlog?.image) {
        const imageRef = storage().refFromURL(selectedBlog?.image);
        await imageRef.delete();
      }
      console.log('post deleted!');
      closeActionSheet();
      setSelectedBlog(null);
      setLoading(false)
      navigation.navigate('Profile');
    } catch (error) {
      console.error(error);
    }
  };

  const navigation = useNavigation();
    return (
        <View style={post.col}>
          <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
            <View style={post.card}>
              <Image style={post.image} source={{uri: foto}}/>
              <Text style={post.price}>Rp {harga}</Text>
              <Text style={post.title}>{judul}</Text>
              <View style={post.lokasi}>
                <Icon name="map-pin" style={{color: 'purple'}}/>
                <Text style={{marginLeft: 10}}>{lokasi}</Text>
              </View>
              </View>
          </TouchableOpacity>
          {profile == true ? <View>
            <TouchableOpacity onPress={handleDelete}>
              <Text>Hapus</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>navigation.navigate('Buat Iklan',{id: id})}>
              <Text>Edit</Text>
            </TouchableOpacity>
          </View> : ''}
          </View>
    )
}