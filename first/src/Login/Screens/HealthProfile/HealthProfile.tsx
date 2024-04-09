/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import axios from 'axios';
import React, { useState } from 'react';
// import {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet , ScrollView } from 'react-native';

const HealthProfile = ({navigation , route}) => {
 
  const { id} = route.params;
  console.log("id == " , id );



  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [address, setAddress] = useState('');
  const [dob, setDob] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [disability, setDisability] = useState('');
  const [familyMedicalHistory, setFamilyMedicalHistory] = useState('');
  const [emergencyContactPerson, setEmergencyContactPerson] = useState('');
  const [age, setAge] = useState('');
  const [bloodGroup, setBloodGroup] = useState('');

  const HealthProfile = async () => {
    try {
       const response = await axios.post('http://localhost:5000/patient/add', {
        firstName: firstName,
        lastName: lastName,
        // userId: Id,
        mobileNumber: mobileNumber,
      });

      
      console.log('response', response);
      const patientId = response.data.patient._id;

      try {
        const response = await axios.post(
          `http://localhost:5000/patient/addhealthprofile/${patientId}`,
          {
            address: address,
            dob: dob,
            height: height,
            weight: weight,
            anydisabilities: disability,
            anymedicalhistory: familyMedicalHistory,
            emergencyContactPerson: emergencyContactPerson,
            age: age,
            bloodGroup: bloodGroup,
          });
          navigation.navigate('Question', { patientId: patientId });
        } catch (error) {
          console.log('error==', error);
        }
      } catch (error) {
        console.log('error==', error);
      }
    };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.main}
      >
        {/* <View style={styles.div}>
          { <View style={styles.div2}> 
            <Text style={styles.divText}>Health Profile Setup</Text>
            <View style={styles.div3} />
          </View> }
        </View> */}
        <Text style={styles.interest}>
          We're interested .in learning more about you. Please provide the following details.
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
          <Text style={styles.address}>Emergency Number </Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your input here"
          />
        </View>
        <TouchableOpacity style={styles.button} 
        onPress={() => {
            navigation.navigate('Question');
          }}>
          <Text style={styles.buttonText}
           >Continue</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
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
    color: '#00BFFF',
  },
  line: {
    height: 1,
    backgroundColor: 'black',
    marginBottom: 20,
  },
  address: {
    fontWeight: 'bold',
    color:"black",
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
      backgroundColor: '#005cb9',
      padding: 15,
      borderRadius: 25,
      width: '100%',
      alignItems: 'center',
      marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});


export default HealthProfile;
