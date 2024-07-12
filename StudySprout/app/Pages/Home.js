import { View, Text, Image, StyleSheet,alignItems , TextInput, inputStyle} from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'
import searchBar from '/Users/harshvardhanupadhyay/STUDYSPROUT/StudySprout/StudySprout/components/searchBar.js'
import { EvilIcons } from '@expo/vector-icons';
import CourseList from '/Users/harshvardhanupadhyay/STUDYSPROUT/StudySprout/StudySprout/components/CourseList.js'
export default function Home() {
 

    const {isLoaded,isSigned,user}=useUser();
    return  isLoaded&&(
    <View><View style={styles.container}>
      <View><Text style={{marginTop:40,color:'#838383',fontSize:16,fontWeight:'medium'}}>Welcome Back,</Text>
      <Text style={{fontSize:26,color:'white'}}>{user?.firstName}</Text>
      </View>
        <Image source = {{uri:user?.imageUrl}} style = {{width:50, height:50,borderRadius:50,marginTop:50 }}></Image>



    </View>

    <View style={{display:'flex',flexDirection:'row',alignItems:'center',marginTop:2,backgroundColor:'#191818',marginTop:20,height:52,borderRadius:12}}>
    <EvilIcons name="search" size={40} color="#C9C9C9" style={{marginRight:10,marginLeft:10}} />
        <TextInput placeholder='Seach for a course...' placeholderTextColor="#ffff"   />
    </View>

      <View style ={{marginTop:20}} >
        <CourseList level={"easy"}/>
      </View>

    </View>




    
  )
}
const styles = StyleSheet.create({
  container:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  }
})



