/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import axios from 'axios';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet , ScrollView } from 'react-native';
// import axios from 'axios'; // Assuming you have Axios installed
// import { useRouter } from 'next/navigation'; // Not available in React Native



function Question({ route, navigation }) {
  const { patientId, id } = route.params;

  console.log("patientId==", patientId);
  console.log("id:", id);
  const [chronic, setChronic] = useState('');
  const [serious, setSerious] = useState('');
  const [symptoms, setSymptoms] = useState('');
  const [medications, setMedications] = useState('');

  const question = async () => {
    try {
       const healthprofile = {
        anychronicdiseases: chronic,
        anyallergies: serious,
        anyundergoingtreatment: symptoms,
        anycurrentmedications: medications,
       }

      const response = await axios.post(
        `https://8696-14-139-109-130.ngrok-free.app/patient/addhealthprofile2/${id.patient_id}`,
        {
          healthprofile2 : healthprofile,
        }
      );
      console.log('response', response);
      navigation.navigate('Tab', { id : id });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ScrollView style={styles.main}>
      <View style={styles.container}>
      <Text style={styles.title}>Health Profile Setup: {}</Text>
      <View style={styles.block}>
        <Text style={styles.label}>Do you have any chronic medical conditions? If yes, please specify</Text>
        <TextInput
          style={styles.input}
          multiline
          numberOfLines={3}
          placeholder="Enter your input"
          value={chronic}
          onChangeText={setChronic}
        />
      </View>
      <View style={styles.block}>
        <Text style={styles.label}>Have you been diagnosed with any serious medical conditions for which you are undergoing treatment? If yes, please specify</Text>
        <TextInput
          style={styles.input}
          multiline
          numberOfLines={3}
          placeholder="Enter your input"
          value={serious}
          onChangeText={setSerious}
        />
      </View>
      <View style={styles.block}>
        <Text style={styles.label}>Are you currently experiencing any symptoms of illness such as cough, fever, or fatigue? If yes, please specify.</Text>
        <TextInput
          style={styles.input}
          multiline
          numberOfLines={3}
          placeholder="Enter your input"
          value={symptoms}
          onChangeText={setSymptoms}
        />
      </View>
      <View style={styles.block}>
        <Text style={styles.label}>Are you currently taking any medications, vitamins, or supplements on a regular basis? If yes, please provide details.</Text>
        <TextInput
          style={styles.input}
          multiline
          numberOfLines={3}
          placeholder="Enter your input"
          value={medications}
          onChangeText={setMedications}
        />
      </View>
      <TouchableOpacity style={styles.button}  
       onPress={() => {
        question();
        }}
        >
        <Text style={styles.buttonText}
        >Continue</Text>
      </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  main: {
    marginVertical: 20,
    marginHorizontal: 'auto',
    width: '100%',
  },
  container: {
    margin: 20,
  },
  title: {
    fontSize: 20,
    color: '#00BFFF',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  block: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color:"black",
    // marginBottom: 10,
  },
  input: {
    // numberOfLines="2",
    borderWidth: 1,
    borderColor: '#black',
    borderRadius: 10,
    padding: 10,
    
    // height: 100,
  },
  button: {
    backgroundColor: '#005cb9',
    paddingVertical: 16,
    paddingHorizontal: 60,
    borderRadius: 40,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Question;
