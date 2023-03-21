import {StyleSheet, View, Text, Dimensions} from 'react-native';
import Tiles from '../components/Tiles';
import {Colors} from '../constants/Colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import {useSelector} from 'react-redux';

function Dashboard() {
  const currentDate = new Date().toLocaleDateString();

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
