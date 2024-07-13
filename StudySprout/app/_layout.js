import { Stack } from "expo-router";
import { useLocalSearchParams } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="Pages/CourseDetail" options={{ headerShown:false }} />
      <Stack.Screen name="Pages/Home" options={{ title: 'Home' }} />
    </Stack>
  );
}