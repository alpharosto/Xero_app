/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
/* eslint-disable keyword-spacing */
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

  // const HealthProfile = async () => {

  //   console.log("first Api ==");
  //   try {
  //     console.log("first Api == enter");

  //     console.log("id.name", id.name);
  //     console.log("userId ==", id._id);
  //     const response = await axios.post('http://54.227.167.241:5000/patient/add', {
  //       firstName: id.name,
  //       userId: id._id,
  //       mobileNumber: 787878788878,
  //     });
  //     console.log('response === ', response);
  //     const patientId = response.data.patient._id;
  //     // try {
  //     //   const response = await axios.post(
  //     //     `http://54.227.167.241:5000/patient/addhealthprofile/${patientId}`,
  //     //     {
  //     //       address: address,
  //     //       dob: dob,
  //     //       height: height,
  //     //       weight: weight,
  //     //       anydisabilities: disability,
  //     //       anymedicalhistory: familyMedicalHistory,
  //     //       emergencyContactPerson: emergencyContactPerson,
  //     //       age: age,
  //     //       bloodGroup: bloodGroup,
  //     //     });

  //     //     console.log("response--=-=",response);
  //     //    // navigation.navigate('Question', { patientId: patientId });
  //     //   } catch (error) {
  //     //     console.log('error==', error);
  //     //   }
  //     } catch (error) {
  //       console.log('error==', error);
  //     }
  //   };

  const healthprofileadd = async() => {
    try{

      console.log("first Api == enter");
      console.log("id.name", id.name);
      console.log("userId ==", id._id);
      const healthprofile = {
        dob: dob,
        height: height,
        weight: weight,
        anydisabilities: disability,
        anymedicalhistory: familyMedicalHistory,
        emergencyContactPerson: emergencyContactPerson,
        age: age,
        bloodGroup: bloodGroup,
       }
           try {
             const response = await axios.post(
               `https://6017-14-139-109-130.ngrok-free.app/patient/addhealthprofile/${id.patient_id}`,
               {
                healthprofile : healthprofile,
               });
     
               console.log("response--=-=",response);
              navigation.navigate('Question', { patientId: id , id : id });
              }
              catch(error){
                console.log("error==",error);
              }
    }catch (e: any ) {
      console.log("errror---", e)
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
            value={address}
            onChangeText={(e : any) => {
              setAddress(e);
            }}
          />
        </View>
        <View>
          <Text style={styles.address}>Date of Birth</Text>
          <TextInput
            style={styles.input}
            placeholder="DD/MM/YY"
            value={dob}
            onChangeText={(e : any) => {
              setDob(e);
            }}
          />
        </View>
        <View>
          <Text style={styles.address}>Height</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your input here"
            value={height}
            onChangeText={(e : any) => {
              setHeight(e);
            }}
          />
        </View>
        <View>
          <Text style={styles.address}>Weight</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your input here"
            value={weight}
            onChangeText={(e : any) => {
              setWeight(e);
            }}
          />
        </View>
        <View>
          <Text style={styles.address}>Age</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your Age"
            value={age}
            onChangeText={(e : any) => {
              setAge(e);
            }}
          />
        </View>
        <View>
          <Text style={styles.address}>Blood Group</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your Blood Group"
            value={bloodGroup}
            onChangeText={(e : any) => {
              setBloodGroup(e);
            }}
          />
        </View>
        <View>
          <Text style={styles.address}>Any Disability</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your input here"
            value={disability}
            onChangeText={(e : any) => {
              setDisability(e);
            }}
          />
        </View>
        <View>
          <Text style={styles.address}>Please provide any relevant family medical history.</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your input here"
            value={familyMedicalHistory}
            onChangeText={(e : any) => {
              setFamilyMedicalHistory(e);
            }}
          />
        </View>
        <View>
          <Text style={styles.address}>Emergency Number </Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your input here"
            value={emergencyContactPerson}
            onChangeText={(e : any) => {
              setEmergencyContactPerson(e);
            }}
          />
        </View>
        <TouchableOpacity style={styles.button} 
        onPress={() => {
          healthprofileadd();
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

