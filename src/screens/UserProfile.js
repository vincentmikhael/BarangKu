import React from 'react';
import { Image, StyleSheet, Text, View,TextInput,Button } from "react-native";

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
export default function UserProfile(){
    return(
        <View style={comp.container}>
            <Text style={{fontWeight: 'bold',fontSize: 30,marginTop: 25}}>Edit Profile</Text>
          <Image style={comp.image} source={{uri: 'https://img.freepik.com/premium-vector/user-profile-icon-flat-style-member-avatar-vector-illustration-isolated-background-human-permission-sign-business-concept_157943-15752.jpg'}}></Image>
          <Text style={{marginBottom: 30}}>Vincent Mikhael</Text>

          <TextInput placeholder='Nama' style={comp.input}></TextInput>
          <TextInput placeholder='Username' style={comp.input}></TextInput>
          <Button title="Submit" style={{marginTop: 10}}>
          </Button>

        </View>
    )
}