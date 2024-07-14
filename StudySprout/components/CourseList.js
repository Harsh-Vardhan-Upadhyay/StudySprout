import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { useRouter } from 'expo-router';
import { getCourseList } from '/Users/harshvardhanupadhyay/STUDYSPROUT/StudySprout/StudySprout/Services/index.js'; // Adjust the path as necessary

export default function CourseList() {
  const [courseList, setCourseList] = useState([]);
  const router = useRouter();

  useEffect(() => {
    getCourses();
  }, []);

  const getCourses = async () => {
    try {
      const resp = await getCourseList();
      console.log("RESP--", resp);
      setCourseList(resp.courses.slice(0, 3));
    } catch (error) {
      console.error("Error fetching courses:", error);
    }
  };

  const navigateToCourseDetail = (course) => {
    router.push({ pathname: 'Pages/CourseDetail', params: { course: JSON.stringify(course) } });
  };

  const renderCourseItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigateToCourseDetail(item)}
      style={styles.courseItemContainer}
    >
      <Image source={{ uri: item?.courseCover?.url }} style={styles.courseImage} />

    </TouchableOpacity>
  );

  return (
    <FlatList
      data={courseList}
      keyExtractor={(item) => item.id}
      renderItem={renderCourseItem}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 0,
    paddingBottom: 20,
    
  },
  courseItemContainer: {
    marginRight: 10,
    alignItems: 'center',
    


   
  },
  courseImage: {
    width: 310,
    height: 145,
    borderRadius: 20,


  },
  courseName: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',

    textAlign: 'center',
    


  },
});
