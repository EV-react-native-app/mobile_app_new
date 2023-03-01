import {StyleSheet, Text, View, Dimensions} from 'react-native';
import {Colors} from '../constants/Colors';
import {LineChart} from 'react-native-chart-kit';

function TempVsTime() {
  //chart data
  const data = {
    labels: ['0', '2', '4', '6', '8', '10'],
    datasets: [
      {
        data: [
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
        ],
        color: (opacity = 1) => `rgba(255,0,0,${opacity})`,
      },
      {
        data: [
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
        ],
        color: (opacity = 1) => `rgba(0,255,0,${opacity})`,
      },
      {
        data: [
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
        ],
        color: (opacity = 0) => `rgba(0,0, 255, ${opacity})`,
      },
    ],
  };

  //configuration of Chart
  const chartConfig = {
    backgroundColor: Colors.primary400,
    backgroundGradientFrom: Colors.primary300,
    backgroundGradientTo: Colors.primary100,
    decimalPlaces: 2, // optional, defaults to 2dp
    color: (opacity = 0) => `rgba(0, 0, 0, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(192, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16,
    },
    propsForDots: {
      r: '3',
      strokeWidth: '2',
      stroke: Colors.primary400,
    },
  };

  //main code
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.upperAmbient}>
          <Text style={styles.textStyle}>Temp(°C) Vs Time(s)</Text>
        </View>
        <View style={styles.ambient}>
          <View>
            <Text>Ambient Temp</Text>
          </View>
          <View>
            <Text>T1</Text>
          </View>
          <View>
            <Text>T2</Text>
          </View>
        </View>
      </View>

      <LineChart
        data={data}
        width={Dimensions.get('window').width} // from react-native
        height={220}
        // xLabelsOffset="Time(s)"
        // yAxisLabel=""
        yAxisSuffix="°C"
        xAxisLabel="s"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={chartConfig}
        bezier
        style={{
          marginVertical: 10,
          borderRadius: 12,
        }}
      />
    </View>
  );
}

export default TempVsTime;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: Colors.primary50,
  },
  text: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15,
    alignSelf: 'center',
    textDecorationLine: 'underline',
  },
  textStyle: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'white',
    fontSize: 16,
  },
  innerContainer: {
    borderWidth: 1,
    backgroundColor: Colors.primary200,
    borderRadius: 4,
    borderColor: Colors.primary400,
    marginTop: 10,
    paddingHorizontal: 20,
    paddingVertical: 4,
  },
  ambient: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  upperAmbient: {
    marginBottom: 4,
  },
});
