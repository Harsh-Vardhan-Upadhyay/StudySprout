import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import { getCourseList } from '/Users/harshvardhanupadhyay/STUDYSPROUT/StudySprout/StudySprout/Services/index.js'; // Adjust the path as necessary
import { Fontisto } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function DropCourseList({ searchQuery }) {
  const [courseList, setCourseList] = useState([]);
  const router = useRouter();

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

  const filteredCourses = courseList.filter(course =>
    course.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => router.push({ pathname: 'Pages/CourseDetail', params: { course: JSON.stringify(item) } })}
    >
      <View style={styles.courseContainer}>
        <Image source={{ uri: item?.banner?.url }} style={styles.courseImage} />
        <View>
          <Text style={styles.courseName}>{item.name}</Text>
          <View style={styles.courseDetailRow}>
            <Text style={styles.courseDetailText}>Offered by:</Text>
            <Text style={styles.courseDetailBold}>{item.author}</Text>
          </View>
          <View style={styles.courseDetailRow}>
            <Fontisto name="stopwatch" size={15} color="black" />
            <Text style={styles.courseDetailBold}> {item.time}</Text>
          </View>
          <View style={styles.courseDetailRow}>
            <Feather name="book-open" size={15} color="black" />
            <Text style={styles.courseDetailBold}> {item.chapters.length} Chapters</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={filteredCourses}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({
  courseContainer: {
    padding: 0,
    backgroundColor: 'white',
    marginTop: 18,
    borderRadius: 15,
    width: 340,
    flexDirection: 'row',
  },
  courseImage: {
    width: 130,
    height: 140,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
  },
  courseName: {
    marginLeft: 10,
    marginTop: 15,
    fontSize: 16,
    fontWeight: 'bold',
  },
  courseDetailRow: {
    flexDirection: 'row',
    marginLeft: 18,
    marginTop: 10,
  },
  courseDetailText: {
    fontSize: 12,
    color: '#A8A8A8',
  },
  courseDetailBold: {
    fontSize: 12,
    fontWeight: 'bold',
  },
});
