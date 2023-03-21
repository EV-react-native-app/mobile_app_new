import {StyleSheet, Text, View, Dimensions} from 'react-native';
import {Colors} from '../constants/Colors';
import {LineChart} from 'react-native-chart-kit';

function PowerVsTime() {
  const data = {
    labels: ['0', '2', '4', '6', '8', '10'],
    datasets: [
      {
        data: ['1.4'],
      },
      {
        data: ['1.2'],
      },
      {
        data: ['1'],
      },
      {
        data: ['0.8'],
      },
      {
        data: ['0.6'],
      },
      {
        data: ['0.4'],
      },
      {
        data: ['0.2'],
      },
      {
        data: ['0', '0', '0', '0', '0', '0'],
        color: (opacity = 0) => `rgba(255, 0, 0, ${opacity})`,
      },
    ],
  };

  //configuration of Chart
  const chartConfig = {
    backgroundColor: Colors.primary400,
    backgroundGradientFrom: Colors.primary300,
    backgroundGradientTo: Colors.primary100,
    decimalPlaces: 2, // optional, defaults to 2dp
    color: (opacity = 0) => `rgba(000, 000, 000, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(192, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16,
    },
    propsForDots: {
      r: '0',
      strokeWidth: '0',
      stroke: Colors.primary400,
    },
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.upperAmbient}>
          <Text style={styles.textStyle}>Power(kW) Vs Time(s)</Text>
        </View>
        <View style={styles.ambient}>
          <Text>Power</Text>
        </View>
      </View>

      <LineChart
        data={data}
        width={Dimensions.get('window').width - 24} // from react-native
        height={400}
        // xLabelsOffset="Time(s)"
        // yAxisLabel=""
        yAxisSuffix=" kW"
        xAxisLabel="s"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={chartConfig}
        // bezier
        style={{
          marginVertical: 10,
          borderRadius: 12,
        }}
      />
    </View>
  );
}

export default PowerVsTime;

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
