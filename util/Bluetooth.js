import React, {useState, useEffect} from 'react';
import {Buffer} from 'buffer';
import {
  View,
  Text,
  FlatList,
  Button,
  PermissionsAndroid,
  Alert,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {BleManager} from 'react-native-ble-plx';
import {useDispatch} from 'react-redux';
import {dataAction} from '../store';
import {Colors} from '../constants/Colors';

export const manager = new BleManager();

const requestPermission = async () => {
  const granted = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    {
      title: 'Request for Location Permission',
      message: 'Bluetooth Scanner requires access to Fine Location Permission',
      buttonNeutral: 'Ask Me Later',
      buttonNegative: 'Cancel',
      buttonPositive: 'OK',
    },
  );
  return granted === PermissionsAndroid.RESULTS.GRANTED;
};

const SERVICE_UUID = '4fafc201-1fb5-459e-8fcc-c5c9c331914b';
const CHARACTERISTIC_UUID = 'beb5483e-36e1-4688-b7f5-ea07361b26a8';

// BlueetoothScanner does:
// - access/enable bluetooth module
// - scan bluetooth devices in the area
// - list the scanned devices

const BluetoothScanner = ({navigation}) => {
  const [logData, setLogData] = useState([]);
  const [logCount, setLogCount] = useState(0);
  const [scannedDevices, setScannedDevices] = useState({});
  const [deviceCount, setDeviceCount] = useState(0);

  // const [tapDevice, setTapDevice] = useState(null);

  //for navigating
  const [isConnected, setIsConnected] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    manager.onStateChange(state => {
      const subscription = manager.onStateChange(async state => {
        console.log(state);
        const newLogData = logData;
        newLogData.push(state);
        setLogCount(newLogData.length);
        setLogData(newLogData);
        subscription.remove();
      }, true);
      return () => subscription.remove();
    });
  }, [manager]);

  //for navigate between bluetooth and dashboard screen

  useEffect(() => {
    if (isConnected) {
      navigation.navigate('Details');
    }
  }, [isConnected]);
  let onetime = true;
  // reading the data from esp32
  const readData = async tapCode => {
    return manager.monitorCharacteristicForDevice(
      tapCode,
      SERVICE_UUID,
      CHARACTERISTIC_UUID,
      async (error, characteristic) => {
        if (error) {
          console.log('Error is ', error);
        }
        if(onetime){
          var newdate =  Date.now().toString();
        var newDateType = Buffer.from("128"+newdate).toString('base64');
        await characteristic.writeWithResponse(newDateType);
        onetime = false;
        }

        
        // await characteristic.updateTime();
        const value = await characteristic.read();
        
        // console.log('Characteristic value: ', characteristic.value);
        const parsedValue = Buffer.from(value.value, 'base64');
        const buffer = Buffer.from(parsedValue);

        const decodedData = buffer.toString('utf8');

        const decodeArr = decodedData.split(' ');
        // console.log(decodeArr);
        dispatch(dataAction.setData(decodeArr));
        dispatch(dataAction.setSensePCBConnected({value:true}));
      },
    );
  };

  const handleConnectButtonClick = async id => {
    const tapCode = id;
    await manager
      .connectToDevice(tapCode)
      .then(async device => {
        // console.log('Connected to Device');
        Alert.alert('Connected to Device');
        setIsConnected(true);
        return await device.discoverAllServicesAndCharacteristics();
      })
      .catch(error => {
        console.log('Error is ', error);
      });

    await readData(tapCode)
      .then(() => {
        console.log('Connected');
      })
      .catch(error => {
        console.log('Error is ', error);
      });
  };

  return (
    <View style={styles.style1}>
      <View style={styles.style2}>
        <View style={styles.style2}>
          <Text style={styles.textStyle1}>Bluetooth Log ({logCount})</Text>
          <View style={{height: 8}} />
          <FlatList
            data={logData}
            renderItem={({item}) => {
              return <Text style={styles.textStyle1}>{item}</Text>;
            }}
          />
          <View style={{height: 16}} />
          <Button
            title="Turn On/Off Bluetooth"
            color="black"
            onPress={async () => {
              const btState = await manager.state();
              // test is bluetooth is supported
              if (btState === 'Unsupported') {
                Alert.alert('Bluetooth is not supported');
                return false;
              }
              // enable if it is not powered on
              if (btState !== 'PoweredOn') {
                await manager.enable();
              } else {
                await manager.disable();
              }
              return true;
            }}
          />
        </View>

        <View style={styles.style5}>
          <Text style={styles.textStyle1}>Scanned Devices ({deviceCount})</Text>
          <FlatList
            data={Object.values(scannedDevices)}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  onPress={() => handleConnectButtonClick(item.id)}>
                  <Text
                    style={
                      styles.textStyle1
                    }>{`${item.name} (${item.id})`}</Text>
                </TouchableOpacity>
              );
            }}
            keyExtractor={item => item.id}
          />
          <Button
            title="Scan Devices"
            color="black"
            onPress={async () => {
              const btState = await manager.state();
              // test if bluetooth is powered on
              if (btState !== 'PoweredOn') {
                Alert.alert('Bluetooth is not powered on');
                return false;
              }
              // explicitly ask for user's permission
              const permission = await requestPermission();
              if (permission) {
                manager.startDeviceScan(null, null, async (error, device) => {
                  // error handling
                  if (error) {
                    console.log(error);
                    return;
                  }
                  // found a bluetooth device
                  if (device) {
                    if (device.name != null) {
                      // console.log(`${device.name} (${device.id})}`);
                      const newScannedDevices = scannedDevices;
                      newScannedDevices[device.id] = device;
                      setDeviceCount(Object.keys(newScannedDevices).length);
                      setScannedDevices(scannedDevices);

                      // //Testing
                      // if (device.id == device.id) {
                      //   manager.stopDeviceScan();
                      //   setTapDevice(device);
                      // }
                    }
                  }
                });
              }
              return true;
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default BluetoothScanner;

const styles = StyleSheet.create({
  style1: {
    flex: 1,
    backgroundColor: Colors.bgColor,
  },
  style2: {
    flex: 1,
    padding: 10,
  },
  textStyle1: {
    fontWeight: 'bold',
    color: 'white',
  },
  style3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  style4: {
    marginRight: 10,
  },
  style5: {
    flex: 2,
    padding: 10,
  },
});
