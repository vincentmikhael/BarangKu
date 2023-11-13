import { Text,TextInput, View,StyleSheet,ImageBackground,Image,Dimensions, ScrollView} from 'react-native';
import ProductBox from '../components/ProductBox';

export default function Watchlist(){
    const post = StyleSheet.create({
        container: {
          flexDirection: 'row',
          flexWrap: 'wrap',
          marginHorizontal: 7
        },
      })
    return (
        <View style={post.container}>
            <Text style={{marginLeft: 15,marginTop: 25,fontSize: 20,fontWeight: 'bold',color: '#34056e'}}>Cek yang menarik disini</Text>
          <ProductBox judul="Mobil Suzuki 2023" harga="200.000.000" lokasi="Arjosari, Malang" foto="https://awsimages.detik.net.id/visual/2021/03/01/penjualan-mobil-bekas-cnbc-indonesiaandean-kristianto-5_169.jpeg?w=650"/>
          <ProductBox judul="Mobil Suzuki 2023" harga="200.000.000" lokasi="Arjosari, Malang" foto="https://awsimages.detik.net.id/visual/2021/03/01/penjualan-mobil-bekas-cnbc-indonesiaandean-kristianto-5_169.jpeg?w=650"/>
          <ProductBox judul="Mobil Suzuki 2023" harga="200.000.000" lokasi="Arjosari, Malang" foto="https://awsimages.detik.net.id/visual/2021/03/01/penjualan-mobil-bekas-cnbc-indonesiaandean-kristianto-5_169.jpeg?w=650"/>
          <ProductBox judul="Mobil Suzuki 2023" harga="200.000.000" lokasi="Arjosari, Malang" foto="https://awsimages.detik.net.id/visual/2021/03/01/penjualan-mobil-bekas-cnbc-indonesiaandean-kristianto-5_169.jpeg?w=650"/>
        </View>
    )
}