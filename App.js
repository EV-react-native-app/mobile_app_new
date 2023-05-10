import 'react-native-gesture-handler';
import React,{useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import Summary from './screens/Summary';
import Splash from './components/Splash';
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
import {StyleSheet, Text, View} from 'react-native';
// import CustomDrawer from './util/CustomDrawer';
// import LoginScreen from './screens/LoginScreen';


// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
// import HomeScreen from './screens/HomeScreen';

// const Stack = createNativeStackNavigator();
import {useDispatch} from 'react-redux';
import {dataAction} from './store';
import {useSelector} from 'react-redux';
import {createAppContainer } from '@react-navigation';
import { createDrawerNavigator, DrawerItems } from '@react-navigation/drawer';
// import {createStackNavigator} from 'react-navigation-stack';
import { Container, Content, Header, Body } from 'native-base';
const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();
const Drawer=createDrawerNavigator();

function AppBottomStack() {
  const isSensePCBConnected = useSelector(state => state.isSensePCBConnected);
  return (
    <BottomTab.Navigator
      screenOptions={{
        // tabBarLabel:() => {return null},
        headerShown: false,

        // headerStyle: {
        //   backgroundColor: '#191825',
        //   borderBottomColor: 'white',
        //   borderBottomWidth: 1,
        // },
        // headerTintColor: 'black',
        tabBarStyle: {
          backgroundColor: '#191825',
          borderTopWidth: 0,
          borderTopEndRadius: 24,
          borderTopStartRadius: 24,
          height: 60,
        },
        // headerTitleAlign: 'center',
        // tabBarActiveBackgroundColor:'#282A3A',
        // tabBarInactiveBackgroundColor:'#282A3A',
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: '#3A98B9',
      }}>
      {isSensePCBConnected ? <BottomTab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="live-tv" color={color} size={size} />
          ),
          title: 'Dashboard',
        }}
      /> :
      <BottomTab.Screen
        name="Summary"
        component={Summary}
        
        options={{
          tabKeyToHideLabel: true,
          tabBarShowLabel: false,
          // tabBarLabel:() => {return null},

          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="live-tv" color={color} size={size} />
          ),
          title: 'Cell Doc',
        }}
      />}

      <BottomTab.Screen
        name="Temp Vs Time"
        component={TempVsTime}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({color, size}) => (
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
          tabBarIcon: ({color, size}) => (
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
          tabBarIcon: ({color, size}) => (
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
          tabBarIcon: ({color, size}) => (
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
          tabBarIcon: ({color, size}) => (
            <MaterialIcons
              name="stacked-line-chart"
              color={color}
              size={size}
            />
          ),
          title: 'Cell Doc',
        }}
      />
      <BottomTab.Screen
        name="Map"
        component={Map}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({color, size}) => (
            <MaterialIcons name="location-pin" color={color} size={size} />
          ),
          title: 'Cell Doc',
        }}
      />
    </BottomTab.Navigator>
  );
}


function Navigation() {
  return (
      // <Drawer.Navigator initialRouteName="Home">
      //     <Drawer.Screen name="Home" component={Screen1} />
      //     <Drawer.Screen name="Settings" component={Screen2} />
      //     <Drawer.Screen name="Contacts" component={Screen3} />
      // </Drawer.Navigator>
      <Drawer.Navigator 
      drawerContent={props=> <HomeScreen{...props}/>} 
      ScreenOptions={{ 
        drawerType: "slide",
        headerStyle: {
          height: 60, // Specify the height of your custom header
          backgroundColor: "white",
          elevation: 0,
          shadowOpacity: 0,
        },
        headerShown: false ,
        headerTitle: "title",
        // HERE IS THIS MAGIC LINE OF CODE
    
        headerTitleAlign: "center",}}
      >
        
        {/* <Drawer.Screen
          name="Home"
          component={HomeScreen}
        /> */}
        <Drawer.Screen name=" " component={AppBottomStack } 
        
         headerShown={false} 
         />
        {/* <Drawer.Screen
          name="Summary"
          component={Summary}
        /> */}

      </Drawer.Navigator> 
  ); 
}


// export default Navigation;

function App() {

  const dispatch = useDispatch();

  
  useEffect(() => {
    dispatch(dataAction.setSensePCBConnected({value:false}));
  }, [])
  
  return (
    <NavigationContainer
      // independent={true}
      theme={{
        colors: {
          background: Colors.bgColor,
        },
      }}>
        
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false}} name="Splash" component={Splash} />
        <Stack.Screen options={{ headerShown: false}} name="Login" component={LoginScreen} />

        <Stack.Screen options={{ headerShown: false}} name="Home" component={HomeScreen} />   
        {/* <Stack.Screen
          name="Details"
          component={WelcomePage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SidePanel"
          component={Navigation}
          options={{headerShown: false}}
        /> */}
                <Stack.Screen options={{ headerShown: false}} name="Welcome Page" component={Navigation} />

        <Stack.Screen options={{ headerShown: false}} name="Bluetooth" component={BluetoothScanner} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
