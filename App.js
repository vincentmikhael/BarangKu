
import React from 'react';
import { Text,TextInput, View,StyleSheet,ImageBackground,Image,Dimensions, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'
import ProductBox from './src/components/ProductBox';
const searchbar = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 4,
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
    marginTop: -70,
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
    backgroundColor: '#34056e',
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

const slider = StyleSheet.create({
  image: {width: 250,height: 150,marginHorizontal: 10,borderRadius: 20,resizeMode: 'contain'}
})
export default function App() {
    return (
      <View>
        <View style={searchbar.card}>
        <TextInput
          style={searchbar.input}
          placeholder="Cari layanan, makanan, & tujuan"

        />
        <View style={{padding: 10,backgroundColor: '#34056e', borderRadius: 50,marginLeft: 10}}>
          <Icon style={category.icon} name="user" size={18} color="white"></Icon>
        </View>
   
        </View>
        <Image style={{height: 300, resizeMode: 'contain',marginTop: -45}} source={{uri: 'https://img.freepik.com/premium-vector/set-modern-memphis-style-covers-colorful-geometric-background-can-be-used-brochure-design-flyer-web-banner-ads-poster-magazine-flat-cover-web-vector-illustartion_71599-2822.jpg'}}>

        </Image>
        <View style={{alignItems: 'center',justifyContent: 'center'}}>
          <View style={cardSaldo.card}>
              <View style={{flexDirection: 'row',gap: 20}}>
                <Icon style={category.icon} name="wallet" size={40} color="#34056e"></Icon>
                <View>
                <Text style={{fontWeight: 'bold',color: 'black'}}>Rp.2500</Text>
                <Text>0 Coins</Text>
              </View>
              </View>
                
              
            

          </View>
        </View>

        <View style={category.container}>
        <View style={category.col}>
            <View style={category.content}>
              <Icon style={category.icon} name="comments" size={30} color="white"></Icon>
            </View>
            <Text style={{textAlign: 'center'}}>Chat</Text>
          </View>
          <View style={category.col}>
            <View style={category.content}>
              <Icon style={category.icon} name="wallet" size={30} color="white"></Icon>
            </View>
            <Text style={{textAlign: 'center'}}>Isi Saldo</Text>
          </View>
          <View style={category.col}>
            <View style={category.content}>
              <Icon style={category.icon} name="sun" size={30} color="white"></Icon>
            </View>
            <Text style={{textAlign: 'center'}}>Listrik</Text>
          </View>
          
          <View style={category.col}>
            <View style={category.content}>
              <Icon style={category.icon} name="utensils" size={30} color="white"></Icon>
            </View>
            <Text style={{textAlign: 'center'}}>Makanan</Text>
          </View><View style={category.col}>
            <View style={category.content}>
              <Icon style={category.icon} name="store" size={30} color="white"></Icon>
            </View>
            <Text style={{textAlign: 'center'}}>Belanja</Text>
          </View>
          <View style={category.col}>
            <View style={category.content}>
              <Icon style={category.icon} name="user" size={30} color="white"></Icon>
            </View>
            <Text style={{textAlign: 'center'}}>User</Text>
          </View>
          <View style={category.col}>
            <View style={category.content}>
              <Icon style={category.icon} name="percent" size={30} color="white"></Icon>
            </View>
            <Text style={{textAlign: 'center'}}>Pulsa & Tagihan</Text>
          </View>
          <View style={category.col}>
            <View style={category.content}>
              <Icon style={category.icon} name="bars" size={30} color="white"></Icon>
            </View>
            <Text style={{textAlign: 'center'}}>Menu</Text>
          </View>
        </View>

        <ProductBox></ProductBox>
        <ProductBox></ProductBox>
        <ProductBox></ProductBox>
      </View>
    )
}