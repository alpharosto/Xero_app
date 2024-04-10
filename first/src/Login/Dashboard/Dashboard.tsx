/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-`unused-vars */
/* eslint-disable prettier/prettier */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity , Pressable} from "react-native";

const Dashboard = ({ route ,navigation}) =>{
  // const { id } = route.params;
  // console.log("data1", id);
  const { feedData } = route.params || {};
  console.log("feeddata==",feedData);
  const [healthprofile, setHealthprofile] = useState({});

  // useEffect(() => {
  //   profiledata();
  // }, []);

  // const profiledata = async () => {
  //   try {
  //     const response = await axios.get(
  //       'http://localhost:5000/patient/' + id
  //     );
  //     setData(response.data.patient);
  //     setHealthprofile(response.data.patient.healthprofile);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  function calculateBMI(heightInCm: number, weightInKg: number) {
    let heightInMeters = heightInCm / 100;
    let bmi = weightInKg / (heightInMeters * heightInMeters);
    return bmi.toFixed(2);
  }

  const sos = async () => {
    try {
      const response = await axios.post(
        'http://localhost:5000/api/send_message',
        {
          to_numbers: [
            '+919352894822',
            '+919284637275',
            '+917709551702',
            '+91987583129',
          ],
          message_body:
            'Emergency to this user' +
            'https://www.google.com/maps?q=16.8451219,74.6020639&z=17&hl=en' +
            'Database : ' +
            `http://localhost:3000/Profile/${id}`,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      ); 
      console.log('response', response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={styles.container}>
    <View style={styles.div}>
      {/* <TouchableOpacity onPress={() => sos()}>
          <Image source={require('./sos.png')} style={styles.buttonImage} />
        </TouchableOpacity> */}
        <View style={styles.head_div}>
          <Text 
          style={{
            fontSize : 20,
            color : "#8e8e93"
          }}>Good Morning</Text>
          <Text style={{
            fontSize : 20,
            color : "#000",
          }}>{feedData.name}</Text>
        </View>
      <View style={styles.div6}>
        {/* <View style={styles.div7}> */}
          <Text style={styles.text}>What do </Text>
          {/* <Text style={styles.text}>you </Text> */}
          <Text style={styles.text}> you <Text style={styles.underlineText}>need?</Text>☺</Text>
          {/* <Text style={styles.text}>� �</Text> */}
        {/* </View> */}
        <View style={styles.div8}>
          <View style={styles.div9}>
           
            <Text style={styles.div10}>SOS</Text>
          </View>
          <View style={styles.div11}>
          <Pressable 
          onPress={() => {
            navigation.navigate("HealthProfile" , {
              id : feedData,
            });
          }}>
            <Text>Add Medical History</Text>
          </Pressable>
          </View>
        </View>
        <View style={styles.div13}>
          <View style={styles.div14}>
          
            <Text style={styles.div15}>News</Text>
          </View>
          <View style={styles.div16}>
  
            <Text >Pharmacy</Text>
          </View>
        </View>
      </View>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  div: {
    backgroundColor: "#fff",
    flexDirection: "column",
    maxWidth: 480,
    width: "100%",
    paddingBottom: 80,
  },
  div2: {
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "flex-start",
    paddingHorizontal: 15,
    paddingVertical: 15,
    gap: 17,
  },
  img: {
    width: 48,
    height: 48, // Adjust as needed
    aspectRatio: 1,
    alignSelf: "center",
  },
  div3: {
    flexDirection: "column",
  },
  div4: {
    color: "#8e8e93",
    letterSpacing: -0.01,
    fontSize: 20,
    fontFamily: "Gilroy, sans-serif",
  },
  div5: {
    color: "#000",
    marginTop: 4,
    fontSize: 18,
    fontFamily: "Gilroy, sans-serif",
  },
  div6: {
    flexDirection: "column",
    marginTop:35,
    width: "100%",
    fontSize: 20,
    color: "#000",
    paddingHorizontal: 20,
  },
  div7: {
    textDecorationLine: "underline",
    fontSize: 48,
    lineHeight: 54,
    fontFamily: "Gilroy, sans-serif",
  },
  text: {
    color: "rgba(0,0,0,1)",
    fontSize: 48,
  },
  underlineText: {
    textDecorationLine: "underline",
    color: "rgba(136,209,179,1)",
    fontFamily: "Roboto, sans-serif",
    fontSize: 48,
  },
  
  div8: {
    flexDirection: "row",
    marginTop: 28,
    justifyContent: "center",
    // whiteSpace: "nowrap",
  },
  div9: {
    backgroundColor: "#d30000",
    borderRadius: 32,
    flexDirection: "column",
    flex: 1,
    // paddingVertical: 25,
    margin: 15,
    padding: 40,
    // paddingHorizontal: 48,
    alignItems: "center",
  },
  img2: {
    width: 64,
    height: 64, // Adjust as needed
    // alignSelf: "center",
  },
  div10: {
    fontFamily: "Gilroy, sans-serif",
    // color:red
    marginTop: 19,
  },
  div11: {
    backgroundColor: "#d8d4fe",
    borderRadius: 32,
    flexDirection: "column",
    flex: 1,
    margin: 15,
    padding: 40,
    alignItems: "center",
  },
  img3: {
    width: 64,
    height: 64, // Adjust as needed
    aspectRatio: 1,
    alignSelf: "center",
  },
  div12: {
    fontFamily: "Gilroy, sans-serif",
    marginTop: 18,
  },
  div13: {
    flexDirection: "row",
    marginTop: 15,
    justifyContent: "center",
    // whiteSpace: "nowrap",
  },
  div14: {
    backgroundColor: "#fee1c5",
    borderRadius: 32,
    flexDirection: "column",
    flex: 1,
    margin: 15,
    padding: 40,
    alignItems: "center",
  },
  img4: {
    width: 64,
    height: 64, // Adjust as needed
    aspectRatio: 1,
    alignSelf: "center",
  },
  div15: {
    fontFamily: "Gilroy, sans-serif",
    marginTop: 19,
  },
  div16: {
    backgroundColor: "#c4f4e4",
    borderRadius: 32,
    flexDirection: "column",
    flex: 1,
    margin: 15,
    padding: 40,
    alignItems: "center",
  },
  img5: {
    width: 64,
    height: 64, // Adjust as needed
    aspectRatio: 1,
    alignSelf: "center",
  },
  div17: {
    fontFamily: "Gilroy, sans-serif",
    marginTop: 19,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  head_div : {
    marginTop : 50,
    marginLeft : 20,
  }

});
export default Dashboard;