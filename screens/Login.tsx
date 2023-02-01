import {StyleSheet, Text, View, TextInput, TouchableOpacity, Dimensions} from 'react-native';
import React from 'react';
import Svg, {Path, Stop, Defs, LinearGradient} from 'react-native-svg';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import LinearGradientButton from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import PrimaryButton from '../components/PrimaryButton';
import InputText from '../components/InputText';
import InputPassword from '../components/InputPassword';
import { useNavigation } from '@react-navigation/native';

const heightScreen = Dimensions.get('window').height;

export default function App() {

  type Nav = {
    navigate: (value: string) => void;
  }
  
  const { navigate } = useNavigation<Nav>()

  function SvgBackground() {
    return (
      <Svg
    data-name="Capa 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1439.86 2239.29"
  >
    <Defs>
      <LinearGradient
        id="a"
        y1={445.23}
        x2={1018.35}
        y2={445.23}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0} stopColor="#d9d9d9" />
        <Stop offset={1} stopColor="#fff" />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={0.14}
        y1={839.64}
        x2={1440}
        y2={839.64}
        gradientTransform="matrix(1 0 0 -1 -.14 1999.66)"
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0} stopColor="#35a8e0" />
        <Stop offset={1} stopColor="#1d70b7" />
      </LinearGradient>
    </Defs>
    <Path
      d="M0 63.29c48.77-3.48 119.32-1.76 193.88 28.24 164.77 66.29 202 211.49 316.24 316.23 84.72 77.68 232.33 151.94 508.23 135.53v285.18H0Z"
      transform="translate(0 -40.37)"
      style={{
        fill: "url(#a)",
      }}
    />
    <Path
      d="M0 502.76c115.21 62.06 287.37 117.09 464.51 0 229-151.41 197.35-190.1 381.35-342.1 85.77-70.86 366-249.36 594 36.85v2082.15H0Z"
      transform="translate(0 -40.37)"
      style={{
        fill: "url(#b)",
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
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>MI</Text>
          <Text style={styles.subtitle}>App</Text>
        </View>

        <View style={styles.containerInputs}>
          <InputText placeholder="Correo electronico" iconName="mail" />

          <InputPassword placeholder="Contrseña" iconName="lock-closed" />
          <TouchableOpacity style={styles.contentAncle}>
            <Text style={styles.textAncle}>Olvidaste tu contraseña?</Text>
          </TouchableOpacity>
          <View style={styles.contentButton}>
            <PrimaryButton
              name="Ingresar"
              onPress={()=> navigate('TabNavigator')}
            />
          </View>
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
    top: '20%',
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

  linearGradient: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    height: '100%',
    width: '100%',
  },

  contentButton: {
    top: '5%',
    height: '25%',
    width: '90%',
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
    top: '5%',
    width: '100%',
    height: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
