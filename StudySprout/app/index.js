import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Login from './Pages/Login.js'
import { ClerkProvider, SignedIn ,SignedOut } from "@clerk/clerk-expo";

export default function Index() {
  return (
<ClerkProvider publishableKey={"pk_test_YWNjZXB0ZWQtc2hlZXBkb2ctODAuY2xlcmsuYWNjb3VudHMuZGV2JA"}>
    <View style={{flex:1,backgroundColor:'#0D0D0D'}} >

<SignedIn>
   <Text>You are Signed in</Text>
  </SignedIn>

  <SignedOut>  
    <Login/>
  </SignedOut>
 
    </View>
    </ClerkProvider>
  );
}

