import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Login from './Pages/Login.js'
import { ClerkProvider, SignedIn ,SignedOut } from "@clerk/clerk-expo";
import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { NativeScreenNavigationContainer } from "react-native-screens";
import Home from '/Users/harshvardhanupadhyay/STUDYSPROUT/StudySprout/StudySprout/app/Pages/Home.js'


export default function Index() {
  return (
<ClerkProvider publishableKey={"pk_test_YWNjZXB0ZWQtc2hlZXBkb2ctODAuY2xlcmsuYWNjb3VudHMuZGV2JA"}>
    <View style={{flex:1,backgroundColor:'#0D0D0D',padding:20}} >

<SignedIn>
<Home/>
  </SignedIn>

  <SignedOut>  
    <Login/>
  </SignedOut>
 
    </View>
    </ClerkProvider>
  );
}

const style = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#fff',
    marginTop:20
  },
})