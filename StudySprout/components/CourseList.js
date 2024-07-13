import { View, Text, FlatList, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { getCourseList } from '/Users/harshvardhanupadhyay/STUDYSPROUT/StudySprout/StudySprout/Services/index.js'; // Adjust the path as necessary

export default function CourseList() {
  const [courseList, setCourseList] = useState([]);

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
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={{padding:5}} >
            <Image source = {{uri:item?.courseCover?.url}}
            style ={{width:310,height:145,borderRadius:20}} />
          </View>
        )}
      />
    </View>
  );
}
