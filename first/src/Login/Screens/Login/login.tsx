/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {useState} from 'react';
import axios from 'axios'; // Import axios if you need it

function Login({ navigation }): React.JSX.Element {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const login = async () => {
    console.log('name==', username);
    console.log('password==', password);
    try {
      const response = await axios.post('https://6017-14-139-109-130.ngrok-free.app/user/login', {
        email: username,
        password: password,
      });
      // const id = response.data.user._id;
      console.log('response==', response.data);
      const data = response.data.user;
      console.log("data" , data);
      console.log("data==", data._id);
      navigation.navigate('Tab',{
        id : data,
      });
    } catch (error : any) {
      console.log('error==', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={username}
        onChangeText={text => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={text => setPassword(text)}
      />
      {/* <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('HealthProfile');
        }}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity> */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          login();
          // navigation.navigate('Question');
        }}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.signupText}
      onPress={() => {
        navigation.navigate('SignUp');
      }}>
        Don't have an account? <Text style={styles.link}>Sign up</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  headerText: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#005cb9',
    padding: 10,
    borderRadius: 25,
    width: '80%',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
  },
  signupText: {
    marginTop: 20,
    fontSize: 16,
  },
  link: {
    color: '#005cb9',
  },
});

export default Login;
