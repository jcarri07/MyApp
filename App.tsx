import {StyleSheet, Text, View, TextInput, TouchableOpacity, Dimensions} from 'react-native';
import React from 'react';
import Svg, {Path, Stop, Defs, LinearGradient} from 'react-native-svg';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Icon from 'react-native-vector-icons/Ionicons';

const heightScreen = Dimensions.get('window').height;

export default function App() {
  function SvgBackground() {
    return (
      <Svg
        data-name="Capa 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1439.86 2279.66">
        <Defs>
          <LinearGradient
            id="a"
            x1={0.14}
            y1={1100.17}
            x2={704.55}
            y2={1100.17}
            gradientUnits="userSpaceOnUse">
            <Stop offset={0} stopColor="#d9d9d9" />
            <Stop offset={1} stopColor="#fff" />
          </LinearGradient>
          <LinearGradient
            id="b"
            x1={0.14}
            y1={1440.36}
            x2={1440}
            y2={1440.36}
            gradientUnits="userSpaceOnUse">
            <Stop offset={0} stopColor="#35a8e0" />
            <Stop offset={1} stopColor="#1d70b7" />
          </LinearGradient>
        </Defs>
        <Path
          d="M.14 280.34c0 45.29 74.78 122.85 103.44 155.89a416.62 416.62 0 0 0 178.66 120.66c53.49 18.31 109.86 25.38 164 41.27 60.12 17.65 109 49.72 155.55 91.08 20.34 18.08 102.77 81.88 102.77 108.82V1920H.14Z"
          transform="translate(-.14 -280.34)"
          style={{
            fill: 'url(#a)',
          }}
        />
        <Path
          d="M.14 783.1c115.21 62.06 287.37 117.09 464.51 0C693.7 631.69 662 593 846 441c85.77-70.86 366-249.36 594 36.85V2560H.14Z"
          transform="translate(-.14 -280.34)"
          style={{
            fill: 'url(#b)',
          }}
        />
      </Svg>
    );
  }
  return (
    <KeyboardAwareScrollView>
      <View style={styles.container}>
        <View style={styles.containerBackground}>
          <SvgBackground />
          {/* <Image source={require('./assets/images/Recursi.png')} /> */}
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>MI</Text>
          <Text style={styles.subtitle}>App</Text>
        </View>

        <View style={styles.containerInputs}>
          <View style={styles.inputEmail}>
            <Icon name="mail" style={styles.icon} />
            <TextInput
              style={styles.textInput}
              placeholder="Correo electronico"
              placeholderTextColor={'#A9A9A9'}
            />
          </View>

          <View style={styles.inputEmail}>
            <Icon name="md-lock-closed" style={styles.icon} />
            <TextInput
              style={styles.textInput}
              placeholder="Contraseña"
              placeholderTextColor={'#A9A9A9'}
            />
          </View>
          <TouchableOpacity style={styles.contentAncle}>
            <Text style={styles.textAncle}>Olvidaste tu contraseña?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.primaryButton}>
            <Text style={styles.textButton}>Ingresar</Text>
          </TouchableOpacity>
          <View style={styles.footer}>
            <Text style={{color: '#fff'}}>No tienes cuenta? </Text>
            <TouchableOpacity>
              <Text
                style={{
                  fontFamily: 'Light',
                  fontWeight: 'bold',
                  color: '#fff',
                }}>
                Registrate
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3C3C3C',
  },

  containerBackground: {
    top: '30%',
    height: heightScreen,
  },

  titleContainer: {
    top: '25%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },

  contentAncle: {
    height: '10%',
    width: '80%',
    alignItems: 'flex-end',
  },

  textAncle: {
    color: '#F8F8F8',
    fontFamily: 'Nunito-Light',
    fontWeight: 'bold',
    fontSize: 14,
  },

  image: {
    flex: 1,
    justifyContent: 'center',
  },

  containerInputs: {
    top: '50%',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
  },

  title: {
    fontSize: 50,
    color: '#ffff',
    fontFamily: 'Roboto-Light',
  },

  subtitle: {
    fontSize: 50,
    color: '#ffff',
    fontFamily: 'Nunito-Black',
  },

  textInput: {
    padding: 18,
    paddingStart: 50,
    margin: '5%',
    width: '90%',
    color: '#1c1c1c',
    backgroundColor: '#ffff',
    borderRadius: 15,
    shadowColor: '#6F6F6F',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },

  inputEmail: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },

  primaryButton: {
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    top: '10%',
    height: '25%',
    width: '50%',
    borderRadius: 15,
    backgroundColor: '#393838',
  },

  textButton: {
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Roboto-Black',
    fontSize: 18,
  },

  icon: {
    left: '10%',
    color: '#6F6F6F',
    position: 'absolute',
    zIndex: 1,
    fontSize: 20,
    width: '5%',
  },

  background: {
    height: '60%',
    width: '100%',
    top: '25%',
  },

  footer: {
    flexDirection: 'row',
    top: '15%',
    width: '100%',
    height: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
