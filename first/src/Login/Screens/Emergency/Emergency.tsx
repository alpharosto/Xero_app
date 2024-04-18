/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable eslint-comments/no-unused-disable */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import React, { useState , useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView , TouchableOpacity , FlatList } from 'react-native';
import axios from 'axios';

function Emergency({route}) {

  const { id } = route.params;
  console.log("feed==",id);

  const [name , setname] = useState('');
  const [number , setNumber] = useState('');
  const [relation , setRelation] = useState('');
  const [data, setData] = useState([]);


  const profiledata = async () => {
    try {
      const response = await axios.get(
        ' https://5275-14-139-109-130.ngrok-free.app/patient/' + id.patient_id
      );
      console.log("respoce==", response);
      console.log("data==", response.data.patient);
      setData(response.data.patient.emergencycontact);
    } catch (err) {
      console.log(err);
    }
  };


  useEffect(() => {
    profiledata();
  }, []);




  const emergencycontact = async() =>{
    const contact = {
      name  : name,
      number : number,
      relation : relation,
    };

    try{
      const responce = await axios.post("https://8696-14-139-109-130.ngrok-free.app/patient/addemergencycontact/" + id.patient_id ,
       {
           contact,

      });

      console.log("responce", responce); 
      profiledata();
      setname('');
      setNumber('');
      setRelation('');
    }
    catch(error) {
      console.log("errror==" , error);
    }
  }
  

  const renderItem = ({item}: {item: ItemData}) => {
    return (
     <View>
      <Text  style={styles.List} > Name : {item.name}  </Text>
      <Text style={styles.List}> Number : {item.number} </Text>
      <Text style={styles.List}> Relation : {item.relation_to_patient} </Text>
     </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
       <Text style={styles.address}>Emergency Contact :</Text> 
      <View style={styles.relationContainer}>     
     
        {/* <View> */}
          
          <TextInput
            style={styles.relationInput}
            placeholder="Enter your Name"
            value={name}
            onChangeText={(e) => {
              setname(e);
            }}          
          />
          <TextInput
            style={styles.relationInput}
            placeholder="Enter your Number" 
            value={number}
            onChangeText={(e) => {
              setNumber(e);
            }}          
          />
           <TextInput
            style={styles.relationInput}
            placeholder="Enter relation to patient "
            value={relation}
            onChangeText={(e) => {
              setRelation(e);
            }}           
          />
        {/* </View>     */}
      </View>
      <TouchableOpacity style={styles.button} onPress={() =>
      emergencycontact()
      }>
        <Text style={styles.buttonText}
        >Continue</Text>
      </TouchableOpacity>

      <View style={styles.infoContainer}>
        <Text style={styles.emergencyText}>List of Emergency number</Text>
      </View>
   
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item._id}
      />
   
     
    </ScrollView>
  );
}

const styles = StyleSheet.create({

  List:{
    fontWeight: 'bold',
     color:'black',
  },
    address: {
      fontSize: 20,
      color: '#00BFFF',
      fontWeight: 'bold',
      marginBottom: 10,
      },
      item: {
        padding: 10,
        marginTop: 2,
        backgroundColor: '#f9c2ff',
      },
      text: {
        fontSize: 15,
      },
      input: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        marginBottom: 10,
        paddingHorizontal: 10,
      },
  container: {
    backgroundColor: '#fff',
    flex: 1,
    // alignItems: 'center',
    paddingTop: 18,
    paddingBottom: 80,
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: 383,
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100, // Adjust the height as needed
    borderRadius: 10, // Add borderRadius for rounded corners
  },
  infoContainer: {
    position: 'relative',
    width: '100%',
    minHeight: 79,
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 22,
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
  },
  emergencyText: {
    position: 'absolute',
    top: 12,
    left: 22,
    color: '#000',
    fontWeight: '700',
    fontSize: 18,
  },
  divider: {
    position: 'absolute',
    backgroundColor: '#00b3ff',
    width: 173,
    height: 6,
    bottom: 0,
  },
  relationContainer: {
    marginTop: 6,
    alignItems: 'center',
  },
  relationLabel: {
    color: '#252525',
    fontWeight: '700',
    fontSize: 12,
    marginBottom: 10,
  },
  relationInput: {
    width: 343,
    // maxWidth: '100%',
   
    borderWidth: 1,
    // paddingVertical: 19,
    // paddingHorizontal: 2,
 
    borderColor: 'black',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  continueButton: {
    backgroundColor: '#005cb9',
    borderRadius: 40,
    color: '#fff',
    fontWeight: '700',
    paddingVertical: 18,
    paddingHorizontal: 60,
    marginTop: 62,
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

export default Emergency;
