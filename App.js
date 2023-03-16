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

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

function WelcomePage() {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: Colors.primary400},
        headerTintColor: 'white',
        tabBarStyle: {backgroundColor: Colors.primary400},
        headerTitleAlign: 'center',
        tabBarActiveBackgroundColor: Colors.primary200,
      }}>
      <BottomTab.Screen
        name="Summary"
        component={Summary}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: () => (
            <MaterialIcons name="live-tv" style={{fontSize: 20}} />
          ),
          title: 'Cell Doc',
        }}
      />

      <BottomTab.Screen
        name="Temp Vs Time"
        component={TempVsTime}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: () => (
            <MaterialIcons name="device-thermostat" style={{fontSize: 20}} />
          ),
          title: 'Cell Doc',
        }}
      />
      <BottomTab.Screen
        name="Voltage Vs Time"
        component={VoltageVsTime}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: () => (
            <MaterialIcons name="power" style={{fontSize: 20}} />
          ),
          title: 'Cell Doc',
        }}
      />
      <BottomTab.Screen
        name="Current Vs Time"
        component={CurrentVsTime}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: () => (
            <MaterialIcons name="power-input" style={{fontSize: 20}} />
          ),
          title: 'Cell Doc',
        }}
      />
      <BottomTab.Screen
        name="Power Vs Time"
        component={PowerVsTime}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: () => (
            <MaterialIcons name="settings-power" style={{fontSize: 20}} />
          ),
          title: 'Cell Doc',
        }}
      />
      <BottomTab.Screen
        name="Statistics"
        component={Statistics}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: () => (
            <MaterialIcons name="stacked-line-chart" style={{fontSize: 20}} />
          ),
          title: 'Cell Doc',
        }}
      />
      <BottomTab.Screen
        name="Map"
        component={Map}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: () => (
            <MaterialIcons name="location-pin" style={{fontSize: 20}} />
          ),
          title: 'Cell Doc',
        }}
      />
    </BottomTab.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
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
