import { View, Text, Image , StyleSheet} from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';



export default function login() {
  return (
   
    
    

    <View style={styles.container} >
        <Text style={{fontSize:32,color:'#E4F757',fontWeight:'bold'}}>StudySprout</Text>
          <Image source={require('/Users/harshvardhanupadhyay/STUDYSPROUT/StudySprout/StudySprout/assets/images/Group 6.png')} style={styles.LoginImage}></Image>

          <View style={styles.box}>
                <Text style={{fontSize:28,fontWeight:'bold',textAlign:'center',paddingTop:25}}>Knowledge On the Go: Your Personal {"\n"} Learning Companion
                </Text>

                <Text style={{textAlign:'center',fontSize:16,fontWeight:'medium',padding:30,paddingTop:10}}>Transform idle moments into learning opportunities. Explore a vast array of courses right at your fingertips.</Text>

                <View style={{backgroundColor:'black', height:50,width:250,alignItems:'center',justifyContent:'center',alignSelf:'center', borderRadius:16,display:'flex',flexDirection:'row'}}>
                <AntDesign name="google" size={24} color="#E4F757" />
                    <Text style={{paddingLeft:10,fontWeight:'bold',fontSize:16,textAlign:'center', color:'#E4F757'}}>Sign in with google</Text>
                </View>
          </View>
    </View>
  )
}



const styles = StyleSheet.create({

    box:{backgroundColor: '#D9D9D9',
        height:304,
        width:350,
        borderRadius:32,
        marginTop:40


    },
    container: {
        justifyContent: 'center',
      alignItems: 'center',
      marginTop:60

    },
    LoginImage: {
      
      width:335, 
      height:343,
      marginTop:35
    },




  });


