import { View, Text, Image, Dimensions } from 'react-native';
import React from 'react';
import Chapters from './Chapters';

export default function DetailSection({ course }) {
  return (
    <View>
      {course?.banner?.url && (
        <Image source={{ uri: course.courseBanner?.url }} style={{ width: Dimensions.get('screen'), height: 400 }} />
      )}
      <Text style={{ color: 'black' ,fontSize:20,fontWeight:'bold',marginTop:10,marginLeft:10}}>{course?.name}</Text>

      <Text style={{marginLeft:10,marginTop:5}} >{course.description.markdown}</Text>

      <Chapters chapterList={course.chapters} />
    </View>
  );
}