/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable, TouchableOpacity, Text, View } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import StartScreen from '../screens/StartScreen';
import SignUp from '../screens/SignUpScreen';
import SignIn from '../screens/SignInScreen';
import TabStart from '../screens/StartScreen';
import Home from '../screens/HomeScreen';
import Nut from '../screens/NutScreen';
import QuenMK from '../screens/QuenMKScreen';
// import test from '../screens/test';

// import TabOneScreen from '../screens/TabOneScreen';
// import TabTwoScreen from '../screens/TabTwoScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import SignInScreen from '../screens/SignInScreen';
import HomeScreen from '../screens/HomeScreen';
import TopicScreen from '../screens/TopicScreen';


// import testScreen from '../screens/testScreen';
import Slidershow from '../screens/Slidershow';
import Header from '../screens/Header';
import QuenMKScreen from '../screens/QuenMKScreen';
import SignUpScreen from '../screens/SignUpScreen';
import NutScreen from '../screens/NutScreen';
import ChatScreen from '../screens/ChatScreen';
import NoticationsScreen from '../screens/NotificationsScreen';
import SettingScreen from '../screens/SettingScreen';
import ListLopHocScreen from '../screens/ListLopHocScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import VideoScreen from '../screens/VideoScreen';
// import { Icon } from 'react-native-vector-icons/Icon';





export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      {/* StartNavigator */}
      {/* BottomTabNavigator */}
      {/* <Stack.Screen name="Root" component={StartNavigator} options={{ headerShown: false }} /> */}
      {/* <Stack.Screen name="Home" component={HomeNavigator} options={{ headerShown: false }} /> */}
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}>
      <BottomTab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Chats"
        component={ChatScreen}
        options={{
          title: 'Chat',
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="wechat" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Notifications"
        component={NoticationsScreen}
        options={{
          title: 'Notifications',
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="bell" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Settings"
        component={SettingScreen}
        options={{
          title: 'Settings',
          headerShown: false,
          tabBarIcon: ({ color }) => <TabBarIcon name="gear" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}

// const Stack1 = createNativeStackNavigator<RootStackParamList>();

function StartNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="TabStart" component={StartScreen} options={{ headerShown: false }} />
      <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />
      <Stack.Screen name="SignIn" component={SignInScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Nut" component={NutScreen} options={{ headerShown: false }} />
      <Stack.Screen name="QuenMK" component={QuenMKScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Slidershow" component={Slidershow} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}




function HomeNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      {/* <Stack.Screen name="ListLopHocScreen" component={ListLopHocScreen} options={{ headerShown: false }} /> */}
      <Stack.Screen name='ListLopHocScreen' component={ListLopHocScreen} options={{
        headerRight: () => (
          <TouchableOpacity
          >
            <View>
              <Icon name="reorder-three-outline" size={40}></Icon>
            </View>
          </TouchableOpacity>
        )
      }}
      />
      {/* <Stack.Screen name="Topic" component={TopicScreen} options={{ headerShown: false }} /> */}
      <Stack.Screen name='Topic' component={TopicScreen} options={{
        headerRight: () => (
          <TouchableOpacity
          >
            <View>
              <Icon name="reorder-three-outline" size={40}></Icon>
            </View>
          </TouchableOpacity>
        )
      }}
      />
      
      <Stack.Screen name='VideoScreen' component={VideoScreen} options={{
        headerRight: () => (
          <TouchableOpacity
          >
            <View>
              <Icon name="reorder-three-outline" size={40}></Icon>
            </View>
          </TouchableOpacity>
        )
      }}
      />
    </Stack.Navigator>
  )
}