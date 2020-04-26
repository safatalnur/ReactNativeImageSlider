import React from 'react';
import { StyleSheet, Text, Image, View,  SafeAreaView } from 'react-native';
import Carousel from 'react-native-snap-carousel'


export default function App() {

  const images = [
      { id: '001',
      image: require('./assets/1_women.png'),
      },
      { id: '002',
        image: require('./assets/2_women.png'),
      },
      { id: '003',
        image: require('./assets/3_women.png'),
      },
      { id: '004',
      image: require('./assets/4_women.png'),
      },
      { id: '005',
      image: require('./assets/5_women.png'),
      },
      { id: '006',
      image: require('./assets/6_women.png'),
      },
      { id: '007',
      image: require('./assets/7_women.png'),
      },
      { id: '008',
      image: require('./assets/8_women.png'),
      },
    ]

    const renderItem = ({item, index}) => {
      return (
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
          <Image source={item.image} />
          <Text style={{color:'#fff'}}>{item.title}</Text>
        </View>
      )  
    }

  return (
    <SafeAreaView style={styles.container}>
      <View >
        <Carousel
            style= {{zIndex: 99, position:'relative'}} 
            data = {images}
            sliderWidth={300}
            itemWidth={300}
            renderItem = {renderItem}
            autoplay = { true}
            autoplayDelay = { 0 }
            autoplayInterval = {500}
            // loop = {true}
          />
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
