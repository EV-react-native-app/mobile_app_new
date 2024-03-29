import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
import {Colors} from '../constants/Colors';

function Tiles({data, unit, dataname}) {
  return (
    <View style={[styles.tilesContainer, styles.shadowPropCard]}>
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
    borderRadius: 12,
    alignSelf: 'center',
    backgroundColor: 'black',
    padding: 10,
    elevation: 10,
    borderWidth: 2,
    width:100,
    height:120,
    marginRight: 10,
  },
  innerContainer: {
    flexDirection: 'column',
  },
  dataViewStyle: {},
  textData: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    alignSelf: 'center',
  },
  unitViewStyle: {
    alignItems: 'center',
    marginTop:8,
  },
  textUnit: {
    fontWeight: 'bold',
    color: 'white',
  },
  textStyle: {
    marginTop:4,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'grey',
    fontSize:10
  },
  shadowPropCard: {
    shadowColor: Colors.cardShadowColor,
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});
