import {StyleSheet, Text, View, Dimensions, SafeAreaView} from 'react-native';
import {Colors} from '../constants/Colors';
import {LineChart} from 'react-native-chart-kit';

import {useSelector} from 'react-redux';
import {useEffect, useState} from 'react';

function VoltageVsTime() {
  // const parseData = useSelector(state => state.data);

  // const vol = parseFloat(parseData[2]);
  // console.log(vol);

  // const [data, setData] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

  // useEffect(() => {
  //   setData(prevData => {
  //     const newData = [...prevData];
  //     newData.shift();
  //     newData.push(vol);
  //     return newData;
  //   });
  // }, [vol]);

  // console.log(data);

  // chart data
  const chartData = {
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    datasets: [
      {
        // data: data,
        data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      },
    ],
  };

  // configuration of Chart
  const chartConfig = {
    backgroundColor: 'black',
    backgroundGradientFrom: '#000',
    backgroundGradientTo: '#ccf',
    decimalPlaces: 2, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(000, 000, 000, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(192, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16,
    },
    propsForDots: {
      r: '5',
      strokeWidth: '3',
      stroke: 'white',
    },
  };

  // main code

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
        data={chartData}
        width={Dimensions.get('window').width - 24} // from react-native
        height={220}
        // xLabelsOffset="Time(s)"
        // yAxisLabel=""
        yAxisSuffix="V"
        // xAxisLabel="s"
        yAxisInterval={0.5} // optional, defaults to 1
        chartConfig={chartConfig}
        withShadow={false}
        bezier
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

{
}
