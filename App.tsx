import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View,Image,Text,TouchableOpacity,StyleSheet} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons"
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
// import Header from './screens/Header';


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
