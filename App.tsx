// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar, TouchableOpacity, FlatList } from 'react-native';
import TopNavigation from './navigation/topNavigation'
import OverallStats from './screens/OverallStats'
import MainContent from './screens/MainContent'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Animated from 'react-native-reanimated';

function MyTabBar({ state, descriptors, navigation, position }) {
  const navData = [
    {
      name: 'search',
      active: false,
      value: 0,
      type: 'search'
    },
    {
      name: 'All',
      active: false,
      value: 326,
      type: 'nav'
    }, {
      name: 'Heat',
      active: false,
      value: 4,
      type: 'nav'
    }, {
      name: 'AB',
      active: false,
      value: 6,
      type: 'nav'
    }, {
      name: 'Abnormal',
      active: false,
      value: 3,
      type: 'nav'
    }, {
      name: 'Calving',
      active: false,
      value: 0,
      type: 'nav'
    }
  ]

  return (
    <View style={{ flexDirection: 'row', paddingTop: 20 }}>
      <FlatList
        horizontal={true}
        data={state.routes}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => {
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: item.key,
            });
            navigation.navigate(item.name);

          };
          return (<TouchableOpacity onPress={onPress} style={styles.button}>
            <View style={styles.buttonText}>
              <Text style={styles.title}>{item.name}</Text>
              <Text style={styles.count}>{routeData[item.name]}</Text>
            </View>
          </TouchableOpacity>)
        }
        }
      />

    </View>
  );
}

export default function App() {

  return (
    // <SafeAreaView style={styles.container}>
    <NavigationContainer >
      <Tab.Navigator style={styles.container} tabBar={props => <MyTabBar {...props} />}>
        <Tab.Screen name="Search" component={MainContent} />
        <Tab.Screen name="All" component={MainContent} />
        <Tab.Screen name="Heat" component={MainContent} />
        <Tab.Screen name="AB" component={MainContent} />
        <Tab.Screen name="Abnormal" component={MainContent} />
        <Tab.Screen name="Calving" component={MainContent} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
const Tab = createMaterialTopTabNavigator();

let routeData = {
  'Search': 0,
  'All': 326,
  'Heat': 4,
  'AB': 6,
  'Abnormal': 3,
  'Calving': 0
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#efecec',
    paddingTop: StatusBar.currentHeight,
    // marginLeft: 16
    // paddingHorizontal: 24,
  },
  button: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#bdc3c7',
    borderRadius: 50,
    marginRight: 10
    // margin: '0px 8px',
  },
  buttonText: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    // width: '100%'
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10
  },
  count: {
    fontSize: 16,
    color: '#141518'
  }
});
