import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Login from './Pages/Login.js'

export default function Index() {
  return (
    <View style={{flex:1,backgroundColor:'#0D0D0D'}} >
<Login/>

    </View>
  );
}

