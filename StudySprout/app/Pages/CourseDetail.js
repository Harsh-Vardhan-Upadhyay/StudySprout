import { View } from 'react-native';
import React, { useEffect } from 'react';
import { useLocalSearchParams } from "expo-router";
import DetailSection from '/Users/harshvardhanupadhyay/STUDYSPROUT/StudySprout/StudySprout/components/DetailSection.js';

export default function CourseDetail() {
  const params = useLocalSearchParams();
  const course = JSON.parse(params.course);

  useEffect(() => {
    console.log(course);
  }, [course]);

  return course && (
    <View>
      <DetailSection course={course} />
    </View>
  );
}