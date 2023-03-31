import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect} from 'react';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../Assets/AfterLoginBackground.png')}
        resizeMode="cover"
        style={styles.image}>
        <View style={styles.InnerContainer}>
          <View style={styles.BookContainer}>
            <View style={styles.BookImage}>
              <Image source={require('../Assets/UserLogoHome.png')} />
              <Text style={styles.name}>Ahmed Ahsan</Text>
            </View>
            <TouchableOpacity
              style={styles.BookBtn}
              onPress={() => navigation.navigate('BookOn')}>
              <Text style={styles.BookBtnText}>Book In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
  InnerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  BookContainer: {
    width: Dimensions.get('window').width - 80,
  },
  BookImage: {
    alignItems: 'center',
  },
  name: {
    fontSize: 20,
    fontWeight: '600',
    color: 'black',
  },
  BookBtn: {
    width: '100%',
    height: 60,
    backgroundColor: '#5740f5',
    borderRadius: 30,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  BookBtnText: {
    fontSize: 22,
    color: 'white',
    fontWeight: '600',
  },
});
