import Icon from 'react-native-vector-icons/FontAwesome5'
import React, { useRef, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Animated, Easing } from 'react-native';

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
export default function Detail(){
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

    return(
        <View>
            <Image style={comp.image} source={{uri: 'https://i.ytimg.com/vi/ZBJuBPH60V8/mqdefault.jpg'}}></Image>
            <View style={comp.container}>
                <Text style={{fontWeight: 'bold',fontSize: 18,color: 'black'}}>Rp 12.000.000</Text>
                <Text style={{fontSize: 18}}>HONDA ADV160 ABS 2023</Text>
                <View style={comp.deskripsi}>
                    <Text style={{fontWeight: 'bold',color: 'black'}}>Deskripsi</Text>
                    <Text>Lorem Ipsum Lorem Ipsum. Lorem Ipsum. Lorem Ipsum Lorem Ipsum. Lorem Ipsum
                    Lorem Ipsum
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