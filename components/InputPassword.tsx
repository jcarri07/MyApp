import { StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

type Props = {
  placeholder: string,
  iconName: string,
}


export default function InputPassword(props: Props) {
  const [show, setShow] = React.useState(false);
  const [visible, setVisible] = React.useState(true);

  return (
    <View style={styles.inputText}>
            <Icon name={props.iconName} style={styles.icon} />
            <TouchableOpacity onPress={
                ()=> {
                    setVisible(!visible)
                    setShow(!show)
                }
            } style={styles.iconEye}>
            <Icon name={show === false ? 'eye-off' : 'eye'} size={24} color={'#6F6F6F'} />
            </TouchableOpacity>
            <TextInput
              style={styles.textInput}
              placeholder={props.placeholder}
              placeholderTextColor={'#A9A9A9'}
              secureTextEntry={visible}
            />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

  iconEye: {
    justifyContent: 'center',
    alignItems: 'center',
    left: '82%',
    color: '#6F6F6F',
    position: 'absolute',
    zIndex: 1,
    fontSize: 20,
    width: '10%',
    height: '50%'
  },
})