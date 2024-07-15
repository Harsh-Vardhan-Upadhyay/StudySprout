import { View, Text, Image, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react';
import Chapters from './Chapters';
import { useUser } from '@clerk/clerk-expo';


export default function DetailSection({ course }) {
  const chapterList = course.chapters || [];


  return (
    <View>
      {course?.courseBanner?.url && (
        <Image source={{ uri: course.courseBanner.url }} style={{ width: Dimensions.get('screen').width, height: 400 }} />
      )}
      <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', marginTop: 10, marginLeft: 10 }}>
        {course?.name}
      </Text>

      <Text style={{ marginLeft: 10, marginTop: 5, color:'white'}}>
        {course?.description?.markdown}
      </Text>

      <TouchableOpacity>
        <View style={{backgroundColor:'#E4F757', width: 340,
    height: 40,
    marginTop: 10,
    borderRadius: 10,
    justifyContent: 'center', // Center vertically
    alignItems: 'center',alignSelf:'center'}}>
          <Text style={{fontWeight:'bold'}}>Enroll into the course for Free</Text>
        </View>
      </TouchableOpacity>

      <View>
        <Chapters chapterList={chapterList} course={course} />
      </View>
    </View>
  );
}