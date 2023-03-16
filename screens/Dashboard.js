import {StyleSheet, View, Text} from 'react-native';
import Tiles from '../components/Tiles';
import {Colors} from '../constants/Colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {savedData} from '../util/Bluetooth';
import {useEffect} from 'react';

function Dashboard() {
  const currentDate = new Date().toLocaleDateString();

  useEffect(() => {
    console.log('Recieved Data: ', savedData.dataPoints);
  }, []);

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

      <View style={styles.container2}>
        <View style={styles.row1con2}>
          <Tiles data="50.62" unit="V" dataname="Voltage" />
          <Tiles data="1.02" unit="A" dataname="Current" />
          <Tiles data="35.0" unit="%" dataname="Battery" />
        </View>
        <View style={styles.row2con2}>
          <Tiles data="28.5" unit="C" dataname="Avg Temp." />
          <Tiles data="10.24" unit="km" dataname="Distance" />
          <Tiles data="0.67" unit="kW" dataname="Power" />
        </View>
        <View style={styles.row3con2}>
          <Tiles data="3.17" unit="Km/h" dataname="Velocity" />
          <Tiles data="40.2" unit="km/kWh" dataname="Mileage" />
          <Tiles data="10.00" unit="kW" dataname="Power" />
        </View>
      </View>
    </View>
  );
}

export default Dashboard;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.primary50,
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
  leftBox: {},
  rightBox: {},
  row1con2: {
    flexDirection: 'row',
    padding: 10,
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  row2con2: {
    flexDirection: 'row',
    padding: 10,
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  row3con2: {
    // flex: 1,
    flexDirection: 'row',
    padding: 10,
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  textStyle: {
    color: Colors.primary400,
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
