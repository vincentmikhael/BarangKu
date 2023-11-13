
import React, { useState } from 'react';
import { Text,TextInput, View,StyleSheet,ImageBackground,Image,Dimensions, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'
import ProductBox from '../components/ProductBox';
import KategoriBox from '../components/KategoriBox';


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
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    borderRadius: 20,
  }
})
const category = StyleSheet.create({
  container: {
    gap: 10 
  },
})

const post = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: 7
  },
})


const slider = StyleSheet.create({
  image: {width: 250,height: 150,marginHorizontal: 10,borderRadius: 20,resizeMode: 'contain'}
})
export default function Home() {

  const [search,setSearch] = useState("")
  
    return (
      <View>
        <View style={searchbar.card}>
        <TextInput
          style={searchbar.input}
          onChange={e=>setSearch(e.target.value)}
          placeholder="Cari barang disini"

        />
        <View style={{padding: 10,backgroundColor: '#34056e', borderRadius: 50,marginLeft: 10}}>
          <Icon style={category.icon} name="user" size={18} color="white"></Icon>
        </View>
   
        </View>
        <ScrollView horizontal style={{marginTop: 20,marginHorizontal: 15}}>
          <Image style={slider.image} source={{uri: 'https://images-loyalty.ovo.id/public/deal/89/64/l/27980.jpg?ver=1'}}></Image>
          <Image style={slider.image} source={{uri: 'https://images-loyalty.ovo.id/public/deal/89/64/l/27980.jpg?ver=1'}}></Image>
          <Image style={slider.image} source={{uri: 'https://images-loyalty.ovo.id/public/deal/89/64/l/27980.jpg?ver=1'}}></Image>
          <Image style={slider.image} source={{uri: 'https://images-loyalty.ovo.id/public/deal/89/64/l/27980.jpg?ver=1'}}></Image>
        </ScrollView>

        <View style={{flexDirection: 'row',justifyContent: 'space-between',marginHorizontal: 15,marginTop: 25}}>
          <Text style={{color: '#34056e'}}>Telusuri Kategori</Text>
          <Text style={{fontWeight: 'bold',color: '#34056e'}}>Lihat Semua</Text>
        </View>

        <ScrollView horizontal style={category.container}>
          <KategoriBox icon={"comments"} judul={"Chat"}/>
          <KategoriBox icon={"wallet"} judul={"Isi Saldo"}/>
          <KategoriBox icon={"utensils"} judul={"Makanan"}/>
          <KategoriBox icon={"store"} judul={"Belanja"}/>
          <KategoriBox icon={"user"} judul={"User"}/>
          <KategoriBox icon={"percent"} judul={"Pulsa & Tagihan"}/>
        </ScrollView>

        <Text style={{marginLeft: 15,fontSize: 20,fontWeight: 'bold',color: '#34056e'}}>Cek yang menarik disini</Text>
        <View style={post.container}>
          <ProductBox judul="Mobil Suzuki 2023" harga="200.000.000" lokasi="Arjosari, Malang" foto="https://awsimages.detik.net.id/visual/2021/03/01/penjualan-mobil-bekas-cnbc-indonesiaandean-kristianto-5_169.jpeg?w=650"/>
          <ProductBox judul="Mobil Suzuki 2023" harga="200.000.000" lokasi="Arjosari, Malang" foto="https://awsimages.detik.net.id/visual/2021/03/01/penjualan-mobil-bekas-cnbc-indonesiaandean-kristianto-5_169.jpeg?w=650"/>
          <ProductBox judul="Mobil Suzuki 2023" harga="200.000.000" lokasi="Arjosari, Malang" foto="https://awsimages.detik.net.id/visual/2021/03/01/penjualan-mobil-bekas-cnbc-indonesiaandean-kristianto-5_169.jpeg?w=650"/>
          <ProductBox judul="Mobil Suzuki 2023" harga="200.000.000" lokasi="Arjosari, Malang" foto="https://awsimages.detik.net.id/visual/2021/03/01/penjualan-mobil-bekas-cnbc-indonesiaandean-kristianto-5_169.jpeg?w=650"/>
        </View>
      </View>
    )
}