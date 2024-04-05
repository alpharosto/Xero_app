/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

function Profile() {
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
        <View style={styles.textInfo}>
          <Text style={styles.name}>Gaurav</Text>
          <Text style={styles.phone}>91 1233456789</Text>
        </View>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Personal Information</Text>
        <View style={styles.info}>
          <Text>Gender: Male</Text>
          <Text>Aadhar No: 92345 23456</Text>
          <Text>Address: Mali Nagar, Chakur</Text>
        </View>
      </View>
      <View style={styles.blackLine}></View>
      <View style={styles.comp1}>
        <Text style={styles.title}>Physical :</Text>
        <View style={styles.info}>
          <Text>Age : 20</Text>
          <Text>Weight :40 kg</Text>
          <Text>Height : 150 cm</Text>
          <Text>Disability : no</Text>
          <Text>Bloodgroup : o+</Text>
        </View>
      </View>
      <View style={styles.blackLine}></View>
      <View style={styles.comp1}>
        <Text style={styles.title}>Emergency Contact details:</Text>
        <View style={styles.info}>
          <Text>mom : 91 321456987</Text>
          <Text>dad: 91 3214569874</Text>
        </View>
      </View>
      <View style={styles.blackLine}></View>
      <View style={styles.comp1}>
        <Text style={styles.title}>Medical history :</Text>
        <View style={styles.info}>
          <Text>Disease : no</Text>
          <Text>Allergy :no</Text>
          <Text>CurrentMedicine :no</Text>
          <Text>Undergoing treatment :no</Text>
        </View>
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

});

export default Profile;
