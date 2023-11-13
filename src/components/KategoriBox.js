import Icon from 'react-native-vector-icons/FontAwesome5'
import { StyleSheet, Text, View } from "react-native"

const category = StyleSheet.create({
    col:{
      width: '20%',
      padding: 10,
    },
    content: {
      backgroundColor: 'white',
      marginTop: 20,
      borderRadius: 10,
      height: 60,
      position: 'relative',
      justifyContent:'center',
      alignItems: 'center'
    },
    icon:{
    }
  })

export default function KategoriBox({icon,judul}){
    return (
          <View style={category.col}>
            <View style={category.content}>
              <Icon style={category.icon} name={icon} size={30} color="#34056e"></Icon>
            </View>
            <Text style={{textAlign: 'center',color: '#34056e'}}>{judul}</Text>
          </View>
    )
}