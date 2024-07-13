import { View, Text } from 'react-native';
import React from 'react';

export default function Chapters({ chapterList }) {
  return (
    chapterList && Array.isArray(chapterList) && (
      <View>
        {chapterList.map((item, index) => (
          <View key={index}>
            <Text> {index + 1} {item.title}</Text>
          </View>
        ))}
      </View>
    )
  );
}