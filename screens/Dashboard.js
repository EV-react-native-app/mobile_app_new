import {StyleSheet, View, Text, Dimensions, PermissionsAndroid} from 'react-native';
import Tiles from '../components/Tiles';
import {Colors} from '../constants/Colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useEffect, useState} from 'react';
import Geolocation from '@react-native-community/geolocation';
import {useSelector} from 'react-redux';
// import {fi}
import { collection, setDoc, doc } from "firebase/firestore";

function Dashboard() {
 
  const currentDate = new Date().toLocaleDateString();
  var onetime = false;
  var lat1 = 0.0, long1 = 0.0;
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
  const [currentSpeed, setCurrentSpeed] = useState('NaN');
  const [currentDistane, setCurrentDistance] = useState('NaN');
  
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
      async (position) => {
        setLocationStatus('You are Here');
        console.log(position);
        //getting the Longitude from the location json
        const currentLongitude = 
          JSON.stringify(position.coords.longitude);

        //getting the Latitude from the location json
        const currentLatitude = 
          JSON.stringify(position.coords.latitude);
        const currentspeed = 
          JSON.stringify(position.coords.speed);
        setCurrentSpeed(currentspeed);
        //Setting Longitude state
        setCurrentLongitude(currentLongitude);
        
        //Setting Longitude state
        setCurrentLatitude(currentLatitude);
        if(!onetime){
          lat1 = position.coords.latitude;
          long1 = position.coords.longitude;
          onetime = true;
        }
        const R = 6371e3; // metres
        var lat2 = parseFloat(currentLatitude);
        var long2 = parseFloat(currentLongitude);
        console.log(lat1.toString() + " " + lat2.toString());
        const φ1 = lat1 * Math.PI/180; // φ, λ in radians
        const φ2 = lat2 * Math.PI/180;
        const Δφ = (lat2-lat1) * Math.PI/180;
        const Δλ = (long2-long1) * Math.PI/180;

        const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
                  Math.cos(φ1) * Math.cos(φ2) *
                  Math.sin(Δλ/2) * Math.sin(Δλ/2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

        const d = R * c; // in metres
        console.log("distance" + d.toString());
        setCurrentDistance(d.toFixed(2));
        

        await setDoc(doc(db, "cities", "LA"), {
          name: "Los Angeles",
          state: "CA",
          country: "USA"
        });
        

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
          
        const currentspeed = 
          JSON.stringify(position.coords.speed);
        setCurrentSpeed(currentspeed);
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
            <Text style={styles.textStyle}>Date : {currentDate}</Text>
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
        {/* <View>
          <Tiles dataname="0 hr 0 min" unit="Upload" />
        </View> */}
      </View>
      
      
      <View style={styles.container2}>
        <View style={styles.tileCover}>
          <Tiles data={vol} unit="V" dataname="Voltage" />
          <Tiles data={cur} unit="A" dataname="Current" />
          <Tiles data="35.0" unit="%" dataname="Battery" />
        </View>
        <View style={styles.tileCover}>
          <Tiles data={avgtemp} unit="C" dataname="Avg Temp." />
          <Tiles data={currentDistane} unit="m" dataname="Distance" />
          <Tiles data={power} unit="kW" dataname="Power" />
        </View>
        <View style={styles.tileCover}>
          <Tiles data={currentSpeed} unit="Km/h" dataname="Velocity" />
          <Tiles data="40.20" unit="km/kWh" dataname="Mileage" />
          <Tiles data="1.00" unit="kWh" dataname="Energy" />
        </View>
      </View>
      <View style = {{
        flexDirection:'column',
        borderRadius: 12,
        marginHorizontal:40,
    backgroundColor: 'black',
        marginTop:10,
    padding: 16,
    elevation: 10,
    borderWidth: 2,
    height:100,
      }}>
        <View style={{
          flexDirection:'row',
          display:'flex'
        }}>
<Text
            style={{
              fontSize: 14,
    fontWeight: 'bold',
    color: 'grey',
    marginRight:8,
            }}>
            Longitude 
          </Text>
          <Text
            style={{
              fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
            }}>
             {currentLongitude}
          </Text>
        </View>
        <View style={{
          flexDirection:'row',
          display:'flex'
        }}>
<Text
            style={{
              fontSize: 14,
    fontWeight: 'bold',
    color: 'grey',
    marginRight:8,
            }}>
            Latitude 
          </Text>
          <Text
            style={{
              fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
            }}>
             {currentLatitude}
          </Text>
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
    marginHorizontal: 24,
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
