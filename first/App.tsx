/* eslint-disable prettier/prettier */
/* eslint-disable comma-dangle */
/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet} from 'react-native';
import Dashboard from './src/Login/Dashboard/Dashboard';
import Login from './src/Login/Screens/Login/login';
import SignUp from './src/Login/Screens/SignUp/SignUp';
import Question from './src/Login/Screens/Question/Question';
import HealthProfile from './src/Login/Screens/HealthProfile/HealthProfile';
import Profile from './src/Login/Screens/Profile/Profile';
// import Bottomtab from './src/Login/Bottomtab/Bottomtab';
// import Bottomtab from './src/Login/Bottomtab/Bottomtab';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import Dashboard from './src/Login/Dashboard/Dashboard';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Emergency from './src/Login/Screens/Emergency/Emergency';



function Tab({route}) {
const Tab = createBottomTabNavigator();
const { id } = route.params;

  return (
    <Tab.Navigator>
      <Tab.Screen 
      name="Dashboard"
      component={Dashboard} 
      options={{
        headerShown : false
      }} 
      initialParams={{ feedData: id }}
      />
      <Tab.Screen 
      name="Profile" 
      component={Profile} 
      options={{
        headerShown : false
      }} 
      initialParams={{ feedData: id }}
      />
    </Tab.Navigator>
  );
}

function App(): React.JSX.Element {
  const Stack = createNativeStackNavigator();
  return (
    //  <Login />
    //  <SignUp/>
    //  <Question/>
    // <Dashboard/>
    // <Profile/>
    // <Emergency/>
    //  <HealthProfile/>
    // <Bottomtab/>
    //  <Bottomtab/>


    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="HealthProfile" component={HealthProfile} />
        <Stack.Screen name="Tab" component={Tab} 
        options={{
        headerShown : false
      }} 
      />
        <Stack.Screen name="Question" component={Question} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Emergency" component={Emergency} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 24,
    color: '#fff',
  },
});

export default App;
