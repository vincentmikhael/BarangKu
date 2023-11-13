import React from 'react';
import { Image, StyleSheet, Text, View } from "react-native";

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
            


        </View>
    )
}