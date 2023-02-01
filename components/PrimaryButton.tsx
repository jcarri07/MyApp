import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

type Props = {
    name: string
    onPress: ()=> void
}

export default function PrimaryButton(props: Props) {
  const handleClick = () => {
    props.onPress();
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.primaryButton} onPress={handleClick}>
        <LinearGradient
          start={{x: 0.0, y: 0.25}}
          end={{x: 0.5, y: 4.0}}
          locations={[0.09, 0.6]}
          colors={['#3C3C3C', '#202124']}
          style={styles.linearGradient}>
          <Text style={styles.textButton}>{props.name}</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },

  linearGradient: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    height: '100%',
    width: '100%',
  },

  primaryButton: {
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    height: '100%',
    width: '100%',
    borderRadius: 10,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },

  textButton: {
    color: 'white',
    fontFamily: 'Roboto-Black',
    fontSize: 18,
  },
});
