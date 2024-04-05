/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const HealthProfileSetup = () => {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        {/* <View style={styles.div}> */}
          {/* <View style={styles.div2}> */}
            <Text style={styles.divText}>Health Profile Setup</Text>
            <View style={styles.div3} />
          {/* </View> */}
        {/* </View> */}
        <Text style={styles.interest}>
          We're interested in learning more about you. Please provide the following details.
        </Text>
        {/* <View style={styles.line} /> */}
        <View style={styles.line} />

        <View>
          <Text style={styles.address}>Address</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your address"
          />
        </View>
        <View>
          <Text style={styles.address}>Date of Birth</Text>
          <TextInput
            style={styles.input}
            placeholder="DD/MM/YY"
          />
        </View>
        <View>
          <Text style={styles.address}>Height</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your input here"
          />
        </View>
        <View>
          <Text style={styles.address}>Weight</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your input here"
          />
        </View>
        <View>
          <Text style={styles.address}>Any Disability</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your input here"
          />
        </View>
        <View>
          <Text style={styles.address}>Please provide any relevant family medical history.</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your input here"
          />
        </View>
        <View>
          <Text style={styles.address}>Emergency contact person</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your number here"
          />
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  main: {
    margin: 20,
  },
  div: {
    marginBottom: 20,
  },
  div2: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  divText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10,
  },
  div3: {
    width: 100,
    height: 10,
    backgroundColor: 'skyblue',
    borderRadius: 5,
  },
  interest: {
    marginBottom: 20,
  },
  line: {
    height: 1,
    backgroundColor: 'black',
    marginBottom: 20,
  },
  address: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default HealthProfileSetup;
