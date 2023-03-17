import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import Summary from './screens/Summary';
import TempVsTime from './screens/TempVsTime';
import VoltageVsTime from './screens/VoltageVsTime';
import CurrentVsTime from './screens/CurrentVsTime';
import PowerVsTime from './screens/PowerVsTIme';
import Statistics from './screens/Statistics';
import Map from './screens/Map';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Colors} from './constants/Colors';
import BluetoothScanner from './util/Bluetooth';
import Dashboard from './screens/Dashboard';
import { Text } from 'react-native';

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

function WelcomePage() {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: '#191825', borderBottomColor:'white', borderBottomWidth:1},
        headerTintColor: 'white',
        tabBarStyle: { backgroundColor: '#191825',  borderTopWidth:0, borderTopEndRadius:24,borderTopStartRadius:24, height:60 },
        headerTitleAlign: 'center',
        // tabBarActiveBackgroundColor:'#282A3A',
        // tabBarInactiveBackgroundColor:'#282A3A',
        tabBarActiveTintColor:'white',
        tabBarInactiveTintColor:'#3A98B9',
        
      }}
      
      >
      <BottomTab.Screen
        name="Summary"
        component={Summary}
        
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({color,size}) => (
            <MaterialIcons name="live-tv" color={color} size={size} />
          ),
          title: 'Cell Doc',
        }}
      />

      <BottomTab.Screen
        name="Temp Vs Time"
        component={TempVsTime}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({color,size}) => (
            <MaterialIcons name="device-thermostat" color={color} size={size} />
          ),
          title: 'Cell Doc',
        }}
      />
      <BottomTab.Screen
        name="Voltage Vs Time"
        component={VoltageVsTime}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({color,size}) => (
            <MaterialIcons name="power" color={color} size={size} />
          ),
          title: 'Cell Doc',
        }}
      />
      <BottomTab.Screen
        name="Current Vs Time"
        component={CurrentVsTime}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({color,size}) => (
            <MaterialIcons name="power-input" color={color} size={size} />
          ),
          title: 'Cell Doc',
        }}
      />
      <BottomTab.Screen
        name="Power Vs Time"
        component={PowerVsTime}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({color,size}) => (
            <MaterialIcons name="settings-power" color={color} size={size} />
          ),
          title: 'Cell Doc',
        }}
      />
      <BottomTab.Screen
        name="Statistics"
        component={Statistics}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({color,size}) => (
            <MaterialIcons name="stacked-line-chart" color={color} size={size} />
          ),
          title: 'Cell Doc',
        }}
      />
      <BottomTab.Screen
        name="Map"
        component={Map}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({color,size}) => (
            <MaterialIcons name="location-pin" color={color} size={size} />
          ),
          title: 'Cell Doc',
        }}
      />
    </BottomTab.Navigator>
  );
}



function App() {
  return (
    <NavigationContainer theme={{
      colors:{
        background:'#282A3A',
      }
    }}>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Details"
          component={WelcomePage}
          options={{headerShown: false}}
        />

        <Stack.Screen name="Bluetooth" component={BluetoothScanner} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
