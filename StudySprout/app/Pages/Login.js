import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import * as WebBrowser from "expo-web-browser";
import { useOAuth } from '@clerk/clerk-expo';
import { useWarmUpBrowser } from '@/hooks/warmUpBrowser';
import * as Linking from 'expo-linking';

WebBrowser.maybeCompleteAuthSession();


export default function Login() {

    
    

    useWarmUpBrowser();

    const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
  
    const onPress = React.useCallback(async () => {
      try {
        const { createdSessionId, signIn, signUp, setActive } =
          await startOAuthFlow({ redirectUrl: Linking.createURL("/dashboard", { scheme: "myapp" })});
  
        if (createdSessionId) {
          setActive({ session: createdSessionId });
        } else {
          // Use signIn or signUp for next steps such as MFA
        }
      } catch (err) {
        console.error("OAuth error", err);
      }
    }, []);


  

  

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 32, color: '#E4F757', fontWeight: 'bold' }}>
        Study<Text style={{ fontSize: 32, color: 'white', fontWeight: 'bold' }}>Sprout</Text>
      </Text>
      <Image
        source={require('/Users/harshvardhanupadhyay/STUDYSPROUT/StudySprout/StudySprout/assets/images/Group 6.png')}
        style={styles.LoginImage}
      />
      <View style={styles.box}>
        <Text style={{ fontSize: 28, fontWeight: 'bold', textAlign: 'center', paddingTop: 25 }}>
          Knowledge On the Go: Your Personal {'\n'} Learning Companion
        </Text>
        <Text style={{ textAlign: 'center', fontSize: 16, fontWeight: 'medium', padding: 30, paddingTop: 10 }}>
          Transform idle moments into learning opportunities. Explore a vast array of courses right at your fingertips.
        </Text>
        <TouchableOpacity
        onPress={(onPress)}
          style={styles.signInButton}

        >
          <AntDesign name="google" size={24} color="#E4F757" />
          <Text style={styles.signInButtonText}>Sign in with Google</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: '#D9D9D9',
    height: 304,
    width: 350,
    borderRadius: 32,
    marginTop: 40,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60,
  },
  LoginImage: {
    width: 335,
    height: 343,
    marginTop: 35,
  },
  signInButton: {
    backgroundColor: 'black',
    height: 50,
    width: 250,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 16,
    display: 'flex',
    flexDirection: 'row',
  },
  signInButtonText: {
    paddingLeft: 10,
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    color: '#E4F757',
  },
});