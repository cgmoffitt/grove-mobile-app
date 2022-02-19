import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigator from './navigation/TabNavigator';

import { useFonts } from 'expo-font';

export default function App() {
  const [loaded] = useFonts({
    OpenSans: require('./assets/fonts/opensans/OpenSans-Regular.ttf'),
    Poppins: require('./assets/fonts/poppins/Poppins-Regular.ttf'),
    PoppinsBold: require('./assets/fonts/poppins/Poppins-Bold.ttf')
  });
  
  if (!loaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
