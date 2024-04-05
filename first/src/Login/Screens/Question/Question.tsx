/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
// import axios from 'axios'; // Assuming you have Axios installed
// import { useRouter } from 'next/navigation'; // Not available in React Native



function Question({  }) {
  const [chronic, setChronic] = useState('');
  const [serious, setSerious] = useState('');
  const [symptoms, setSymptoms] = useState('');
  const [medications, setMedications] = useState('');

  // const patientId = params.id;
  // console.log(patientId);

  // const router = useRouter(); // Not available in React Native

  // const question = async () => {
  //   try {
  //     const response = await axios.post(
  //       'http://localhost:5000/patient/addhealthprofile2/' + patientId,
  //       {
  //         anychronicdiseases: chronic,
  //         anyallergies: serious,
  //         anyundergoingtreatment: symptoms,
  //         anycurrentmedications: medications,
  //       }
  //     );
  //     console.log('response', response);
  //     // router.push('/Dashboard/' + patientId); // Not available in React Native
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <View style={styles.main}>
      <Text style={styles.title}>Health Profile Setup: {}</Text>
      <View style={styles.block}>
        <Text style={styles.label}>Do you have any chronic medical conditions? If yes, please specify</Text>
        <TextInput
          style={styles.input}
          multiline
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
          placeholder="Enter your input"
          value={medications}
          onChangeText={setMedications}
        />
      </View>
      <TouchableOpacity style={styles.button} >
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    marginVertical: 20,
    marginHorizontal: 'auto',
    width: '90%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  block: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#dcdcdc',
    borderRadius: 10,
    padding: 10,
    height: 100,
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
