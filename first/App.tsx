/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet} from 'react-native';
// import Login from './src/Login/Screens/Login/login';
// import SignUp from './src/Login/Screens/SignUp/SignUp';
// import Question from './src/Login/Screens/Question/Question';
import HealthProfile from './src/Login/Screens/HealthProfile/HealthProfile';
// // import Profile from './src/Login/Screens/Profile/Profile';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Bottomtab from './src/Login/Bottomtab/Bottomtab';
// import Bottomtab from './src/Login/Bottomtab/Bottomtab';

function App(): React.JSX.Element {
  // const Stack = createNativeStackNavigator();
  return (
      //  <Login />
      //  <SignUp/>
      //  <Question/>
      // <Profile/>
       <HealthProfile/>
      // <Bottomtab/>
      //  <Bottomtab/>
    //   <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="Login" component={Login} />
    //     <Stack.Screen name="SignUp" component={SignUp} />
    //     <Stack.Screen name="HealthProfile" component={HealthProfile} />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex:1,
    alignItems : "center",
    justifyContent : "center",
    backgroundColor : "#fff",
  },
  text : {
    fontSize : 24 ,
    color : "#fff",
  }
});

export default App;
