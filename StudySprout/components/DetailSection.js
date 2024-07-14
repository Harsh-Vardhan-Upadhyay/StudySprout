import { View, Text, Image, Dimensions } from 'react-native';
import React from 'react';
import Chapters from './Chapters';

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

      <View>
        <Chapters chapterList={chapterList} course={course} />
      </View>
    </View>
  );
}