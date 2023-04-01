import {StyleSheet, View, Text, Dimensions} from 'react-native';
import Tiles from '../components/Tiles';
import {Colors} from '../constants/Colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useEffect, useState} from 'react';

import Geolocation from '@react-native-community/geolocation';
import {useSelector} from 'react-redux';

function Dashboard() {
  const currentDate = new Date().toLocaleDateString();

  const [
    currentLongitude,
    setCurrentLongitude
  ] = useState('...');
  const [
    currentLatitude,
    setCurrentLatitude
  ] = useState('...');
  const [
    locationStatus,
    setLocationStatus
  ] = useState('');

  useEffect(() => {
    const requestLocationPermission = async () => {
      if (Platform.OS === 'ios') {
        getOneTimeLocation();
        subscribeLocationLocation();
      } else {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              title: 'Location Access Required',
              message: 'This App needs to Access your location',
            },
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            //To Check, If Permission is granted
            getOneTimeLocation();
            subscribeLocationLocation();
          } else {
            setLocationStatus('Permission Denied');
          }
        } catch (err) {
          console.warn(err);
        }
      }
    };
    requestLocationPermission();
    return () => {
      Geolocation.clearWatch(watchID);
    };
  }, [Geolocation]);

  useEffect(() => {
    const interval = setInterval(() => {
      getOneTimeLocation();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const getOneTimeLocation = () => {
    setLocationStatus('Getting Location ...');
    Geolocation.getCurrentPosition(
      //Will give you the current location
      (position) => {
        setLocationStatus('You are Here');

        //getting the Longitude from the location json
        const currentLongitude = 
          JSON.stringify(position.coords.longitude);

        //getting the Latitude from the location json
        const currentLatitude = 
          JSON.stringify(position.coords.latitude);

        //Setting Longitude state
        setCurrentLongitude(currentLongitude);
        
        //Setting Longitude state
        setCurrentLatitude(currentLatitude);
      },
      (error) => {
        setLocationStatus(error.message);
      },
      {
        enableHighAccuracy: false,
        timeout: 30000,
        maximumAge: 1000
      },
    );
  };

  const subscribeLocationLocation = () => {
    watchID = Geolocation.watchPosition(
      (position) => {
        //Will give you the location on location change
        
        setLocationStatus('You are Here');
        console.log(position);

        //getting the Longitude from the location json        
        const currentLongitude =
          JSON.stringify(position.coords.longitude);

        //getting the Latitude from the location json
        const currentLatitude = 
          JSON.stringify(position.coords.latitude);

        //Setting Longitude state
        setCurrentLongitude(currentLongitude);

        //Setting Latitude state
        setCurrentLatitude(currentLatitude);
      },
      (error) => {
        setLocationStatus(error.message);
      },
      {
        enableHighAccuracy: false,
        maximumAge: 1000
      },
    );
  };
  const data = useSelector(state => state.data);
  // console.log(data);

  const date = data[0],
    time = data[1],
    vol = parseFloat(data[2]).toFixed(2),
    cur = parseFloat(data[3]).toFixed(2),
    temp1 = parseFloat(data[4]),
    temp2 = parseFloat(data[5]),
    temp3 = parseFloat(data[6]),
    selfcur = parseFloat(data[7]).toFixed(2);

  const avgtemp = ((temp1 + temp2 + temp3) / 3).toFixed(1);

  const power = ((vol * cur) / 1000).toFixed(2);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.container1}>
        <View>
          {/* Left Box */}
          <View>
            <Text style={styles.textStyle}>Date: {currentDate}</Text>
          </View>
          <View>
            <View style={styles.iconView}>
              <MaterialIcons
                name="fiber-manual-record"
                style={styles.iconStyle}
              />
              <Text style={styles.textStyle}>Live Data</Text>
            </View>
          </View>
        </View>
        <View>
          {/* Right Box */}
          <Tiles dataname="0 hr 0 min" unit="Upload" />
        </View>
      </View>
      <Text
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 16,
            }}>
            Longitude: {currentLongitude}
          </Text>
          <Text
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 16,
            }}>
            Latitude: {currentLatitude}
          </Text>
      <View style={styles.container2}>
        <View style={styles.tileCover}>
          <Tiles data={vol} unit="V" dataname="Voltage" />
          <Tiles data={cur} unit="A" dataname="Current" />
          <Tiles data="35.0" unit="%" dataname="Battery" />
        </View>
        <View style={styles.tileCover}>
          <Tiles data={avgtemp} unit="C" dataname="Avg Temp." />
          <Tiles data="10.24" unit="km" dataname="Distance" />
          <Tiles data={power} unit="kW" dataname="Power" />
        </View>
        <View style={styles.tileCover}>
          <Tiles data="30.17" unit="Km/h" dataname="Velocity" />
          <Tiles data="40.20" unit="km/kWh" dataname="Mileage" />
          <Tiles data="1.00" unit="kWh" dataname="Energy" />
        </View>
      </View>
    </View>
  );
}

export default Dashboard;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.bgColor,
    maxWidth: Dimensions.get('window').width,
  },
  container1: {
    marginTop: 20,
    marginHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container2: {
    marginTop: 20,
  },

  tileCover: {
    flexDirection: 'row',
    padding: 10,
    alignSelf: 'center',
    justifyContent: 'space-between',
  },

  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 4,
  },
  iconView: {
    flexDirection: 'row',
  },
  iconStyle: {
    fontSize: 20,
    color: 'red',
  },
});
