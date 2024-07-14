import { ScrollView, View } from 'react-native';
import React, { useEffect } from 'react';
import { useLocalSearchParams } from 'expo-router';
import DetailSection from '../../components/DetailSection.js';

export default function CourseDetail() {
  const params = useLocalSearchParams();
  const course = JSON.parse(params.course);

  useEffect(() => {
    console.log('Course Detail Data:', course); // Debugging line
  }, [course]);

  return course && (
    <ScrollView style={{  backgroundColor: 'black' }}

      showsVerticalScrollIndicator={false} 
      showsHorizontalScrollIndicator={false}
    >
      <View style={{ flex: 1, backgroundColor: 'black' }}>
        <DetailSection course={course} />
      </View>
    </ScrollView>
  );
}