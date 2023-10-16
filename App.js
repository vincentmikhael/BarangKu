
import React from 'react';
import { Text,TextInput, View,StyleSheet,ImageBackground,Image,Dimensions, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'
const searchbar = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    flexDirection: 'row', // Untuk menata ikon dan input secara horizontal
    alignItems: 'center', // Untuk menengahkan ikon dan input secara vertikal
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1, // Mengisi sisa ruang yang tersedia
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 30,
    padding: 10,
    backgroundColor: '#efefef'
  },
});
const cardSaldo = StyleSheet.create({
  card: {
    elevation: 3,
    backgroundColor: 'white',
    marginTop: 0,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    borderRadius: 20,
  }
})
const category = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 10 
  },
  col:{
    width: '20%',
    padding: 10,
  },
  content: {
    backgroundColor: '#215d05',
    marginTop: 20,
    borderRadius: 50,
    height: 60,
    position: 'relative',
    justifyContent:'center',
    alignItems: 'center'
  },
  icon:{
  }
})

const slider = StyleSheet.create({
  image: {width: 250,height: 150,marginHorizontal: 10,borderRadius: 20,resizeMode: 'contain'}
})
export default function App() {
    return (
      <ScrollView>
        <View style={searchbar.card}>
        <TextInput
          style={searchbar.input}
          placeholder="Cari"

        />
        <View style={{padding: 10,backgroundColor: 'white',color: 'green', borderRadius: 50,marginLeft: 10}}>
          <Icon style={category.icon} name="search" size={18} color="green"></Icon>
        </View>
   
        </View>
        <ScrollView horizontal style={{marginTop: 20}}>
          <Image style={slider.image} source={{uri: 'https://lelogama.go-jek.com/post_thumbnail/Gojek_Car-Ride-Affordability-60k-1200x628_2.jpg'}}></Image>
          <Image style={slider.image} source={{uri: 'https://lelogama.go-jek.com/post_thumbnail/Gojek_Car-Ride-Affordability-60k-1200x628_2.jpg'}}></Image>
          <Image style={slider.image} source={{uri: 'https://lelogama.go-jek.com/post_thumbnail/Gojek_Car-Ride-Affordability-60k-1200x628_2.jpg'}}></Image>
          <Image style={slider.image} source={{uri: 'https://lelogama.go-jek.com/post_thumbnail/Gojek_Car-Ride-Affordability-60k-1200x628_2.jpg'}}></Image>
        </ScrollView>
        <View style={category.container}>
        <View style={category.col}>
            <View style={category.content}>
              <Icon style={category.icon} name="bars" size={20} color="white"></Icon>
            </View>
            <Text style={{textAlign: 'center'}}>Menu1</Text>
          </View>
          <View style={category.col}>
            <View style={category.content}>
              <Icon style={category.icon} name="bars" size={20} color="white"></Icon>
            </View>
            <Text style={{textAlign: 'center'}}>Menu1</Text>
          </View>
          <View style={category.col}>
            <View style={category.content}>
              <Icon style={category.icon} name="bars" size={20} color="white"></Icon>
            </View>
            <Text style={{textAlign: 'center'}}>Menu1</Text>
          </View>
          
          <View style={category.col}>
            <View style={category.content}>
              <Icon style={category.icon} name="bars" size={20} color="white"></Icon>
            </View>
            <Text style={{textAlign: 'center'}}>Menu1</Text>
          </View><View style={category.col}>
            <View style={category.content}>
              <Icon style={category.icon} name="bars" size={20} color="white"></Icon>
            </View>
            <Text style={{textAlign: 'center'}}>Menu1</Text>
          </View>
          <View style={category.col}>
            <View style={category.content}>
              <Icon style={category.icon} name="bars" size={20} color="white"></Icon>
            </View>
            <Text style={{textAlign: 'center'}}>Menu1</Text>
          </View>
          <View style={category.col}>
            <View style={category.content}>
              <Icon style={category.icon} name="bars" size={20} color="white"></Icon>
            </View>
            <Text style={{textAlign: 'center'}}>Menu1</Text>
          </View>
          <View style={category.col}>
            <View style={category.content}>
              <Icon style={category.icon} name="bars" size={20} color="white"></Icon>
            </View>
            <Text style={{textAlign: 'center'}}>Menu1</Text>
          </View>
        </View>

        <View style={{flexDirection: 'row',marginHorizontal: 30, paddingRight: 100,marginTop: 10}}>
          <Image style={{width: 100, height: 100}} source={{uri: 'https://www.blibli.com/friends-backend/wp-content/uploads/2022/11/24b5469496e15e10897db2e8778d906e.jpg'}}></Image>
          <View style={{marginLeft: 10}}>
            <Text style={{fontWeight: 'bold',color: 'black'}}>
              Makanan 1
            </Text>
            <Text>Lorem Ipsum sit dolor amet Lorem Ipsum sit dolor amet Lorem Ipsum sit dolor amet</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row',marginHorizontal: 30, paddingRight: 100,marginTop: 10}}>
          <Image style={{width: 100, height: 100}} source={{uri: 'https://www.blibli.com/friends-backend/wp-content/uploads/2022/11/24b5469496e15e10897db2e8778d906e.jpg'}}></Image>
          <View style={{marginLeft: 10}}>
            <Text style={{fontWeight: 'bold',color: 'black'}}>
              Makanan 1
            </Text>
            <Text>Lorem Ipsum sit dolor amet Lorem Ipsum sit dolor amet Lorem Ipsum sit dolor amet</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row',marginHorizontal: 30, paddingRight: 100,marginTop: 10}}>
          <Image style={{width: 100, height: 100}} source={{uri: 'https://www.blibli.com/friends-backend/wp-content/uploads/2022/11/24b5469496e15e10897db2e8778d906e.jpg'}}></Image>
          <View style={{marginLeft: 10}}>
            <Text style={{fontWeight: 'bold',color: 'black'}}>
              Makanan 1
            </Text>
            <Text>Lorem Ipsum sit dolor amet Lorem Ipsum sit dolor amet Lorem Ipsum sit dolor amet</Text>
          </View>
        </View>

    
      </ScrollView>
    )
}