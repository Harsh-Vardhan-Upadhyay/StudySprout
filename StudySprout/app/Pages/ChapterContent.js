import React from 'react';
import { View, Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import Content from '../../components/Content';

export default function ChapterContent() {
  const params = useLocalSearchParams();
  let content;

  try {
    content = JSON.parse(params.content);
  } catch (error) {
    console.error('Failed to parse content:', error);
    content = null; // or set a default value
  }

  console.log('Chapter Content Data:', content); // Debugging line

  return (
    <View  style={{ flex: 1, backgroundColor: 'black' }}>
      {content ? (
        <Content course={{ chapters: [content] }} /> // Wrap content in a chapters array
      ) : (
        <Text>Error loading content</Text>
      )}
    </View>
  );
}