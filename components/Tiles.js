import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import {Colors} from '../constants/Colors';

function Tiles({data, unit, dataname}) {
  return (
    <View style={styles.tilesContainer}>
      <TouchableOpacity>
        <View style={styles.innerContainer}>
          <View style={styles.dataViewStyle}>
            <Text style={styles.textData}>{data}</Text>
          </View>
          <View style={styles.unitViewStyle}>
            <Text style={styles.textUnit}>{unit}</Text>
          </View>
        </View>
        <Text style={styles.textStyle}>{dataname}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Tiles;

const styles = StyleSheet.create({
  tilesContainer: {
    borderColor: Colors.primary400,
    borderRadius: 12,
    alignSelf: 'center',
    backgroundColor: Colors.tileColor1,
    padding: 10,
    elevation: 10,
    borderWidth: 2,
    marginRight: 10,
  },
  innerContainer: {
    flexDirection: 'column',
  },
  dataViewStyle: {
    // marginRight: 4,
  },
  textData: {
    fontSize: 34,
    fontWeight: 'bold',
    color:'white'
  },
  unitViewStyle: {
    alignItems: 'center',
  },
  textUnit: {
    fontWeight: 'bold',
    color:'white'
  },
  textStyle: {
    fontWeight: 'bold',
    textAlign: 'center',
    color:'white'
  },
});
