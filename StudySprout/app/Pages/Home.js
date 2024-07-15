import { View, Text, Image, StyleSheet, TextInput, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { useUser } from '@clerk/clerk-expo';
import { EvilIcons } from '@expo/vector-icons';
import CourseList from '/Users/harshvardhanupadhyay/STUDYSPROUT/StudySprout/StudySprout/components/CourseList.js';
import DropCourseList from '../../components/DropCourseList.js';

export default function Home() {
  const { isLoaded, user } = useUser();
  const [searchQuery, setSearchQuery] = useState('');

  return isLoaded && (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image source={{ uri: user?.imageUrl }} style={styles.profileImage} />
        <View>
          <Text style={styles.welcomeText}>Welcome Back,</Text>
          <Text style={styles.userName}>{user?.firstName}</Text>
        </View>
      </View>

      <View style={styles.searchContainer}>
        <EvilIcons name="search" size={40} color="#C9C9C9" style={styles.searchIcon} />
        <TextInput
          placeholder='Search for a course...'
          placeholderTextColor="#fff"
          style={styles.searchInput}
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      <View style={styles.courseListContainer}>
        <CourseList Level={"easy"} />
      </View>

      <Text style={styles.coursesTitle}>Courses</Text>

      <View style={styles.dropCourseListContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <DropCourseList searchQuery={searchQuery} />
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 45,
    height: 45,
    borderRadius: 50,
    marginTop: 50,
    marginRight: 10,
  },
  welcomeText: {
    marginTop: 50,
    color: '#838383',
    fontSize: 15,
    fontWeight: '500',
  },
  userName: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#191818',
    marginTop: 20,
    height: 52,
    borderRadius: 12,
  },
  searchIcon: {
    marginRight: 10,
    marginLeft: 10,
  },
  searchInput: {
    flex: 1,
    color: '#fff',
  },
  courseListContainer: {
    marginTop: 20,
  },
  coursesTitle: {
    fontSize: 22,
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 10,
    marginTop: 10,
  },
  dropCourseListContainer: {
    flex: 1,
    marginTop: 10,
  },
});
