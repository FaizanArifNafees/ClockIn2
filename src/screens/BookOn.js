import {
  Dimensions,
  Image,
  ImageBackground,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import Card from './Components/Card';

const BookOn = ({navigation}) => {
  const [bookOff, setBookOff] = useState(false);
  const [modalVisiblity, setModalVisibility] = useState(false);
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../Assets/AfterLoginBackground.png')}
        resizeMode="cover"
        style={styles.image}>
        <View style={styles.InnerContainer}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon name="arrowleft" size={30} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Icon name="search1" size={30} color="black" />
            </TouchableOpacity>
          </View>
          <View style={styles.body}>
            <View style={styles.logo}>
              <Image source={require('../Assets/MainLogoBlue.png')} />
            </View>
            <TouchableOpacity
              style={styles.BookOnBtn}
              onPress={() => {
                setModalVisibility(true);
              }}>
              {bookOff ? (
                <Text style={styles.BookOnText}>Book Off</Text>
              ) : (
                <Text style={styles.BookOnText}>Book On</Text>
              )}
            </TouchableOpacity>
            <View style={styles.card}>
              <Card />
              <Card />
              <Card />
            </View>
          </View>
        </View>
      </ImageBackground>

      <Modal visible={modalVisiblity} animationType="slide" transparent={true}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            backgroundColor: 'rgba(97, 97, 97, 0.59)',
            alignItems: 'center',
          }}>
          <View
            style={{
              borderRadius: 20,
              backgroundColor: 'white',
              height: '25%',
              width: '75%',
              justifyContent: 'center',
            }}>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <View>
                <Text style={{fontSize: 16, color: 'black'}}>
                  Are you sure you want to Book off?
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  marginTop: 20,
                  width: '30%',
                  justifyContent: 'space-between',
                }}>
                <TouchableOpacity
                  style={{
                    borderWidth: 1,
                    borderColor: 'green',
                    borderRadius: 10,
                    width: 30,
                    height: 30,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  onPress={() => {
                    setBookOff(true);
                    setModalVisibility(false);
                  }}>
                  <Text style={{fontSize: 16, color: 'green'}}>Ok</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    borderWidth: 1,
                    borderColor: 'purple',
                    borderRadius: 10,
                    width: 30,
                    height: 30,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  onPress={() => setModalVisibility(false)}>
                  <Text style={{fontSize: 16, color: 'purple'}}>X</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default BookOn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
  InnerContainer: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 20,
  },
  body: {
    width: Dimensions.get('window').width - 90,
    alignSelf: 'center',
  },
  logo: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  BookOnBtn: {
    backgroundColor: 'blue',
    alignSelf: 'flex-end',
    padding: 15,
    borderRadius: 10,
  },
  BookOnText: {
    color: 'white',
    fontSize: 16,
  },
  card: {
    marginVertical: 80,
  },
});
