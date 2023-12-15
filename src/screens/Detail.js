import Icon from 'react-native-vector-icons/FontAwesome5'
import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Animated, Easing } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

const comp = StyleSheet.create({
    image: {
        width: '100%',
        height: 250
    },
    container: {
        paddingTop: 20,
        paddingHorizontal: 15,
    },
    deskripsi: {
        marginTop: 30,
        paddingTop: 10,
        borderTopWidth: 1,
        borderColor: 'lightgray'
    }
})
export default function Detail({route}){
    const {blogId} = route.params;
    const [selectedBlog,setSelectedBlog] = useState({})
    const bounceValue = useRef(new Animated.Value(1)).current;
    const [colorIcon,setColorIcon] = useState('black')
    const handlePress = () => {
        // Set up the spring animation for translateY
        Animated.spring(bounceValue, {
          toValue: 1, // Bounce distance
          friction: 2, // Controls "bounciness"
          useNativeDriver: true,
        }).start(() => {
          // Reset the translateY value after the animation is complete
          Animated.timing(bounceValue, {
            toValue: 0,
            duration: 0,
            useNativeDriver: true,
          }).start();
        });
        setColorIcon('red')
      };

      const translateVal = bounceValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 10], // Bounce distance
      })

      useEffect(() => {
        const subscriber = firestore()
      .collection('blog')
      .doc(blogId)
      .onSnapshot(documentSnapshot => {
        const blogData = documentSnapshot.data();
        if (blogData) {
          console.log('Blog data: ', blogData);
          setSelectedBlog(blogData);
        } else {
          console.log(`Blog with ID ${blogId} not found.`);
        }
      });
  
        return () => subscriber();
      }, []);

    return(
        <View>
            <Image style={comp.image} source={{uri: selectedBlog.foto}}></Image>
            <View style={comp.container}>
                <Text style={{fontWeight: 'bold',fontSize: 18,color: 'black'}}>Rp {selectedBlog.harga}</Text>
                <Text style={{fontSize: 18}}>{selectedBlog.nama}</Text>
                <View style={comp.deskripsi}>
                    <Text style={{fontWeight: 'bold',color: 'black'}}>Deskripsi</Text>
                    <Text>{selectedBlog.deskripsi}
                    </Text>
                </View>
            </View>
            
            <TouchableOpacity style={{position: 'absolute', top: '167%',right: 30}} onPress={handlePress}>
            <Animated.View style={{transform:[{translateY: translateVal}]}}>
                <Icon name="heart" size={38} color={colorIcon}></Icon>
            </Animated.View>
            </TouchableOpacity>
            
        </View>
    )
}