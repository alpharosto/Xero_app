/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
/* eslint-disable no-dupe-keys */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from 'axios';
import React, { useEffect , useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function Profile({ route, navigation  }) {
  const { feedData } = route.params || {};
  console.log("feeddata===",feedData);

  const [data, setData] = useState();
  const [healthprofile, setHealthprofile] = useState();


  const profiledata = async () => {
    try {
      const id  =  feedData._id;
      const response = await axios.get(
        'http://localhost:5000/patient/' + id
      );
      console.log("respoce==", response);
      setData(response.data.patient);
      setHealthprofile(response.data.patient.healthprofile2[0]);
    } catch (err) {
      console.log(err);
    }
  };


  useEffect(() => {
    profiledata();
  }, []);



  
  return (
    <View style={styles.container}>
      <View style={styles.header}>

        <Text style={styles.headerText}>Patient Profile</Text>
        <View style={styles.headerLine} />
      </View>
      <View style={styles.profileInfo}>
        <Image
          source={require('./dummy.png')}
          style={styles.profileImage}
          resizeMode="contain"
        />
     <View style={styles.container}>
          <Text style={styles.name}>{data?.firstName}</Text>
          <Text style={styles.number}> {data?.mobileNumber}</Text>
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.subtitle}>Personal:</Text>
        <Text style={styles.infoText}>{`Gender: Male text `} {patientId}</Text>
        <Text style={styles.infoText}>{`Adharno:`}</Text>
        <Text style={styles.infoText}>{`Address: `}</Text>
      </View>
      <View style={styles.blackLine}></View>
      {/* <View style={styles.comp1}> */}
        {/* <Text style={styles.title}>Physical :</Text> */}
        <View style={styles.section}>
        <Text style={styles.subtitle}>Physical:</Text>
        <Text style={styles.infoText}>{`Age: `}{data?.healthprofile?.age}</Text>
        <Text style={styles.infoText}>{`Weight:  kg`} {data?.healthprofile?.weight} kg</Text>
        <Text style={styles.infoText}>{`Height:  cm`} {data?.healthprofile?.height} cm</Text>
        <Text style={styles.infoText}>{`Disability: `}{data?.healthprofile?.anydisabilities}</Text>
        <Text style={styles.infoText}>{`Bloodgroup: `}  {data?.healthprofile?.bloodGroup}</Text>
      {/* </View> */}
      </View>
      <View style={styles.blackLine} />
      <View style={styles.section}>
        <Text style={styles.subtitle}>Emergency Contact details:</Text>
        <Text style={styles.infoText}>       {data?.emergencycontact?.contact1?.name}: 91{" "}
          {data?.emergencycontact?.contact1?.number}
          </Text>
        <Text style={styles.infoText}>
        {data?.emergencycontact?.contact2?.name}: 91{" "}
          {data?.emergencycontact?.contact2?.number}
        </Text>
      </View>
      <View style={styles.blackLine} />
      <View style={styles.section}>
        <Text style={styles.subtitle}>Medical history: </Text>
        <Text style={styles.infoText}>Disease:{healthprofile?.anychronicdiseases} </Text>
        <Text style={styles.infoText}>Allergy: {healthprofile?.anyallergies} </Text>
        <Text style={styles.infoText}>Current edicine:{healthprofile?.anyundergoingtreatment} </Text>
        <Text style={styles.infoText}>Undergoing Treatment  {healthprofile?.anycurrentmedications}</Text>
      </View>
    </View>
    

  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#00BFFF',
    marginBottom: 10,
  },
  headerLine: {
    width: 50,
    height: 2,
    backgroundColor: '#00b3ff',
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  textInfo: {
    marginLeft: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  phone: {
    fontSize: 16,
    color: '#888',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#005cb9',
  },
  info: {
    backgroundColor: '#f5f5f5',
    padding: 10,
    borderRadius: 10,
  },
  blackLine: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  comp1: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  // info: {
  //   marginLeft: 10,
  // },

  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4dd6e6',
  },
  infoText: {
    fontSize: 14,
    marginBottom: 5,
  },
  number : {
    fontSize : 14
  }

});

