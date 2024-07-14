import { View, Text, FlatList, ScrollView } from 'react-native';
import React from 'react';

export default function Content({ course }) {
  console.log('Course Data:', course); // Debugging line

  if (!course || !course.chapters || course.chapters.length === 0) {
    return <Text>No chapters available.</Text>;
  }

  return (
    <ScrollView>
    <View style={{ marginTop: 50 , }}>

      <FlatList
        data={course.chapters}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          
          <View>
            <Text style={{fontWeight:'bold',fontSize:24,color:'#E4F757'}} >{item.title}</Text>

            <Text style={{color:'grey',marginTop:20,fontSize:16}}>{item.chapterDescription?.markdown || 'No description available'}</Text>
            <Text style={{color:'white',fontWeight:'bold',marginLeft:20,marginBottom:20}}>Example</Text>

            
            <View style={{borderRadius:10,backgroundColor:'#302F2F',paddingTop:10,width:360,alignSelf:'center'}}>
              
              <Text style={{color:'white'}} >{item.example?.markdown || 'No description available'}</Text>
              </View>

              <Text style={{color:'white',fontWeight:'bold',marginLeft:20,marginBottom:20,marginTop:20}}>Output</Text>
            <View style={{borderRadius:10,backgroundColor:'#302F2F',paddingTop:10,width:360,alignSelf:'center'}}>
              
              <Text style={{color:'white'}} >{item.output?.markdown || 'No description available'}</Text>
              </View></View>
        )}
      />
    </View>
    </ScrollView>
  );
}
