import React from "react";
import {
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

import FeedScreen from '@/Screens/FeedScreen';
import SearchScreen from '@/Screens/SearchScreen';
import ProfileScreen from '@/Screens/ProfileScreen';

import { SafeAreaProvider } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Feather";
import Dot from "react-native-vector-icons/Octicons";
import { createMaterialBottomTabNavigator } from "react-native-paper/react-navigation";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const HomeStack = createNativeStackNavigator();
const SearchStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Home() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <HomeStack.Screen name="FeedScreen" component={FeedScreen} />
    </HomeStack.Navigator>
  );
}

function Search() {
  return (
    <SearchStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <SearchStack.Screen name="SearchScreen" component={SearchScreen} />
    </SearchStack.Navigator>
  );
}

function Profile() {
  return (
    <SearchStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <SearchStack.Screen name="ProfileScreen" component={ProfileScreen} />
    </SearchStack.Navigator>
  );
}

function MyTabBar({state, descriptors, navigation}:{state:any,descriptors:any,navigation:any}) {
  return (
    <View
      style={{flexDirection: 'row', height: 80, backgroundColor: '#111009'}}>
      {state.routes.map((route:any, index:any) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Icon
              name={index == 0 ? 'home' : index == 1 ? 'search' : 'user'}
              color={isFocused ? '#F1EFE7' : '#64615C'}
              size={25}
              style={{marginBottom: 3}}
            />
            <Dot
              name="dot-fill"
              color={'#F1EFE7'}
              size={8}
              style={{opacity: isFocused ? 1 : 0}}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default function App() {
  return (
      <>
        <Tab.Navigator
          initialRouteName="Home"
          tabBar={props => <MyTabBar {...props} />}
          screenOptions={{
            headerShown: false,
          }}>
          <Tab.Screen name="home" component={Home} />
          <Tab.Screen name="search" component={Search} />
          <Tab.Screen name="profile" component={Profile} />
        </Tab.Navigator>
      </>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});