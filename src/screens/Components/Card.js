import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

const Card = () => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Icon name="user" size={30} style={styles.icon} />
        <Text style={styles.title}>Name</Text>
      </View>
      <TouchableOpacity style={styles.right}>
        <Text style={styles.option}>:</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    borderRadius: 20,
    color: 'white',
    backgroundColor: 'blue',
    padding: 5,
    marginRight: 10,
  },
  option: {
    color: 'black',
    fontSize: 30,
    fontWeight: '800',
  },
  title: {
    fontSize: 20,
    color: 'black',
  },
});
