import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

type Props = {
    placeholder: string,
    iconName: string,
}

export default function InputText(props: Props) {
  return (
    <View style={styles.inputText}>
            <Icon name={props.iconName} style={styles.icon} />
            <TextInput
              style={styles.textInput}
              placeholder={props.placeholder}
              placeholderTextColor={'#A9A9A9'}
            />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%'
  },

  inputText: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
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

  icon: {
    left: '10%',
    color: '#6F6F6F',
    position: 'absolute',
    zIndex: 1,
    fontSize: 20,
    width: '5%',
  },
});
