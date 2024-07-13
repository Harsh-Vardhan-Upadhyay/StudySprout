import { View, Text, FlatList, Image,dis, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { getCourseList } from '/Users/harshvardhanupadhyay/STUDYSPROUT/StudySprout/StudySprout/Services/index.js'; // Adjust the path as necessary
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Fontisto } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useRouter } from 'expo-router';



export default function CourseList() {
  const [courseList, setCourseList] = useState([]);
  const router= useRouter();

  useEffect(() => {
    getCourses();
  }, []);

  const getCourses = async () => {
    try {
      const resp = await getCourseList();
      console.log("RESP--", resp);
      setCourseList(resp.courses);
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  return (
    <View>

      <FlatList
        data={courseList}
        keyExtractor={(item) => item.id}

        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
         
            <TouchableOpacity onPress={() => router.push({ pathname: 'Pages/CourseDetail', params: { course: JSON.stringify(item) } })}>
          <View style={{padding:0,backgroundColor:'white',marginTop:18,borderRadius:15,width:340,display:'flex',flexDirection:'row'}} >
            <Image source = {{uri:item?.banner?.url}}
            style ={{width:130,height:140,borderTopLeftRadius:15,borderBottomLeftRadius:15}} />

                <View>
                  <Text style={{marginLeft:10,marginTop:15,fontSize:16,fontWeight:'bold'}} >{item.name}</Text> 
                  
                  <View style={{display:'flex',flexDirection:'row',marginLeft:18,marginTop:10}}  > 
                    <Text style={{fontSize:12, color:'#A8A8A8'}} >Offered by:</Text>
                    <Text style={{fontSize:12,fontWeight:'bold'}} > {item.author}</Text> 
                 


                  </View>
                 <View style={{display:'flex',flexDirection:'row',alignItems:'center',marginLeft:18,marginTop:8}} > 
                    <Fontisto name="stopwatch" size={15} color="black" />
                  <Text style={{fontSize:12,fontWeight:'semibold'}} > {item.time}</Text> 
                  
                 </View>

                 <View style={{display:'flex',flexDirection:'row',alignItems:'center',marginLeft:18,marginTop:8}}>
                 <Feather name="book-open" size={15} color="black" />
                 <Text style={{fontSize:12,fontWeight:'semibold'}} > {item.chapters.length} Chapters</Text> 
                 </View>



                </View>              

          </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
