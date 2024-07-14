import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { useRouter } from 'expo-router';

export default function Chapters({ chapterList }) {
  const router = useRouter();

  return (
    chapterList && Array.isArray(chapterList) && (
      <View style={styles.container}>
        {chapterList.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => router.push({ pathname: 'Pages/ChapterContent', params: { content: JSON.stringify(item) } })}
          >
            <View style={styles.chapterItem}>
              <Text style={styles.chapterText}>{index + 1} {item.title}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    )
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center', // Center horizontally
    paddingVertical: 10,
  },
  chapterItem: {
    backgroundColor: '#656565',
    width: 340,
    height: 40,
    marginTop: 10,
    borderRadius: 10,
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
  },
  chapterText: {
    color: 'white',
  },
});