import { StyleSheet, Text, View, Dimensions } from 'react-native';
import React from 'react';
import Svg, {Path, Stop, Defs, LinearGradient} from 'react-native-svg';

const heightScreen = Dimensions.get('window').height;

export default function HomeScreen() {
  function SvgBackground() {
    return (
      <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1444.41 724.47"
  >
    <Defs>
      <LinearGradient
        id="a"
        y1={362.23}
        x2={1444.41}
        y2={362.23}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0} stopColor="#35a8e0" />
        <Stop offset={1} stopColor="#1d70b7" />
      </LinearGradient>
    </Defs>
    <Path
      d="M0 0c-.12 398.76 328.33 725.7 724.47 724.46 392.74-1.22 717.6-324.61 719.94-719.94Z"
      style={{
        fill: "url(#a)",
      }}
      data-name="Capa 2"
    />
  </Svg>
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.containerBackground}>
        <SvgBackground />
      </View>
      <Text>HomeScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  containerBackground: {
    bottom: '45%',
    height: heightScreen,
  },
})