import { View, Text, Image, StyleSheet,alignItems , TextInput, inputStyle} from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'
import searchBar from '/Users/harshvardhanupadhyay/STUDYSPROUT/StudySprout/StudySprout/components/searchBar.js'
import { EvilIcons } from '@expo/vector-icons';
import CourseList from '/Users/harshvardhanupadhyay/STUDYSPROUT/StudySprout/StudySprout/components/CourseList.js'
import DropCourseList from '../../components/DropCourseList.js'
export default function Home() {

 

    const {isLoaded,isSigned,user}=useUser();
    return  isLoaded&&(
    <View>
      <View style={styles.container}>
      <Image source = {{uri:user?.imageUrl}} style = {{width:45, height:45,borderRadius:50,marginTop:50,marginRight:10 }}></Image>
          <View><Text style={{marginTop:50,color:'#838383',fontSize:15,fontWeight:'500'}}>Welcome Back,</Text>
            <Text style={{fontSize:20,color:'white',fontWeight:'bold'}}>{user?.firstName}</Text>
          </View>
               



     </View>

    <View style={{display:'flex',flexDirection:'row',alignItems:'center',marginTop:2,backgroundColor:'#191818',marginTop:20,height:52,borderRadius:12}}>
    <EvilIcons name="search" size={40} color="#C9C9C9" style={{marginRight:10,marginLeft:10}} />
        <TextInput placeholder='Seach for a course...' placeholderTextColor="#ffff"   />
    </View>

      <View style ={{marginTop:20}} >
        <CourseList Level={"easy"}/>
      </View>


      <View>
        <Text style={{fontSize:22, color:'white', fontWeight:'bold',marginLeft:10,marginTop:10}} >Courses</Text>
      </View>

      <View>
        <DropCourseList  />
      </View>
    </View>




    
  )
}
const styles = StyleSheet.create({
  container:{
    display:'flex',
    flexDirection:'row',

    alignItems:'center'
  }
})



