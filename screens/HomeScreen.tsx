import { StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import Svg, {Path, Stop, Defs, LinearGradient} from 'react-native-svg';
import { SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native';

const heightScreen = Dimensions.get('window').height;

export default function HomeScreen() {
  function SvgBackground() {
    return (
      <Svg
    data-name="Capa 2"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1439.86 587.82"
  >
    <Defs>
      <LinearGradient
        id="a"
        x1={-845.35}
        y1={178.41}
        x2={-845.35}
        y2={178.41}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0} stopColor="#d9d9d9" />
        <Stop offset={1} stopColor="#fff" />
      </LinearGradient>
      <LinearGradient
        id="b"
        y1={293.91}
        x2={1439.86}
        y2={293.91}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0} stopColor="#35a8e0" />
        <Stop offset={1} stopColor="#1d70b7" />
      </LinearGradient>
    </Defs>
    <Path
      d="M0 0h1439.86v465.92A121.9 121.9 0 0 1 1318 587.82H121.9A121.9 121.9 0 0 1 0 465.92V0Z"
      style={{
        fill: "url(#b)",
      }}
    />
  </Svg>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerBackground}>
        <SvgBackground />
      </View>
      <View style={styles.cardContainer}>
        <View style={styles.headerCard}></View>
      </View>
      <ScrollView
        style={{height: '100%', width: '100%', top: '10%'}}>
        <View style={styles.dataContainer}>
          <View style={styles.cardData}>
            <Text style={{color: '#1c1c1c'}}>1</Text>
          </View>
          <View style={styles.cardData}>
            <Text style={{color: '#1c1c1c'}}>2</Text>
          </View>
          <View style={styles.cardData}>
            <Text style={{color: '#1c1c1c'}}>3</Text>
          </View>
          <View style={styles.cardData}>
            <Text style={{color: '#1c1c1c'}}>4</Text>
          </View>
          <View style={styles.cardData}>
            <Text style={{color: '#1c1c1c'}}>5</Text>
          </View>
          <View style={styles.cardData}>
            <Text style={{color: '#1c1c1c'}}>6</Text>
          </View>
          <View style={styles.cardData}>
            <Text style={{color: '#1c1c1c'}}>7</Text>
          </View>
          <View style={styles.cardData}>
            <Text style={{color: '#1c1c1c'}}>8</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  containerBackground: {
    height: '23%',
    bottom: '1%',
  },

  cardContainer: {
    position: 'absolute',
    top: '10%',
    width: '100%',
    height: '15%',
    alignItems: 'center',
  },

  headerCard: {
    width: '85%',
    height: '90%',
    backgroundColor: '#ffff',
    borderRadius: 10,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },

  dataContainer: {
    left: '10%',
    width: '80%',
    alignItems: 'center',
  },

  cardData: {
    marginTop: '5%',
    width: '100%',
    height: heightScreen*0.12,
    backgroundColor: '#ffff',
    borderRadius: 10,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});