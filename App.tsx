import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View,Image,Text,TouchableOpacity,StyleSheet} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons"
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
<<<<<<< HEAD
// import Header from './screens/Header';
=======
import Header from './screens/Header';
>>>>>>> 3318ca53a327cf2fe169114f064f8346739570d3


export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        {/* <Header/> */}
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
        {/* <Bottom/> */}
      </SafeAreaProvider>
    );
  }
}
