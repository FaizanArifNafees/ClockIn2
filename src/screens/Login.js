import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

const Login = ({navigation}) => {
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../Assets/LoginBackground.png')}
        resizeMode="cover"
        style={styles.image}>
        <View style={styles.InnerContainer}>
          <View style={styles.LoginContainer}>
            <View style={styles.Logo}>
              <Image source={require('../Assets/MainLogo.png')} />
            </View>
            <View style={styles.userId}>
              <TextInput placeholder="Enter User Name" style={styles.input} />
            </View>
            <View style={styles.password}>
              <TextInput
                secureTextEntry={passwordVisibility}
                placeholder="Enter Password"
                style={styles.input}
              />
              <TouchableOpacity
                onPress={() => {
                  setPasswordVisibility(!passwordVisibility);
                }}>
                <Image
                  style={styles.eye}
                  source={require('../Assets/EyeOpen.png')}
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={styles.LoginBtn}
              onPress={() => navigation.navigate('BottomTab')}>
              <Text style={styles.LoginBtnText}>Login</Text>
            </TouchableOpacity>
            <View style={styles.forgetPassword}>
              <TouchableOpacity>
                <Text style={styles.forgetPasswordText}>Forget password?</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Login;

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
  LoginContainer: {
    width: Dimensions.get('window').width - 80,
  },
  userId: {
    backgroundColor: 'white',
    borderRadius: 30,
    width: '100%',
    height: 60,
    justifyContent: 'center',
  },
  password: {
    width: '100%',
    height: 60,
    backgroundColor: 'white',
    borderRadius: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  eye: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    marginRight: 15,
  },
  input: {
    fontSize: 20,
    marginHorizontal: 10,
    width: '80%',
  },
  LoginBtn: {
    width: '100%',
    height: 60,
    backgroundColor: 'white',
    borderRadius: 30,
    marginTop: 20,

    justifyContent: 'center',
    alignItems: 'center',
  },
  LoginBtnText: {
    fontSize: 22,
    color: 'black',
    fontWeight: '600',
  },
  forgetPassword: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  forgetPasswordText: {
    color: 'white',
    fontSize: 16,
  },
  Logo: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
  },
});
