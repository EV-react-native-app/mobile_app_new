import {StyleSheet, Text, View, Dimensions} from 'react-native';
import {Colors} from '../constants/Colors';
import {LineChart} from 'react-native-chart-kit';

function VoltageVsTime() {
  //chart data
  const data = {
    labels: [0, 2, 4, 6, 8, 10],
    datasets: [
      {
        data: [45, 26, 72, 89, 50, 35],
      },
    ],
  };

  //configuration of Chart
  const chartConfig = {
    backgroundColor: Colors.primary400,
    backgroundGradientFrom: Colors.primary300,
    backgroundGradientTo: Colors.primary100,
    decimalPlaces: 2, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(000, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(192, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16,
    },
    propsForDots: {
      r: '6',
      strokeWidth: '4',
      stroke: Colors.primary400,
    },
  };

  //main code

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.upperAmbient}>
          <Text style={styles.textStyle}>Voltage(V) Vs Time(s)</Text>
        </View>
        <View style={styles.ambient}>
          <Text>Voltage</Text>
        </View>
      </View>

      <LineChart
        data={data}
        width={Dimensions.get('window').width-24} // from react-native
        height={220}
        // xLabelsOffset="Time(s)"
        // yAxisLabel=""
        yAxisSuffix="V"
        xAxisLabel="s"
        yAxisInterval={0.5} // optional, defaults to 1
        chartConfig={chartConfig}
        withShadow={false}
        // bezier
        style={{
          marginVertical: 10,
          borderRadius: 12,
        }}
      />
    </View>
  );
}

export default VoltageVsTime;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: '#282A3A',
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
    borderRadius: 8,
    borderColor: Colors.primary400,
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 4,
  },
  ambient: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  upperAmbient: {
    marginBottom: 4,
  },
});
