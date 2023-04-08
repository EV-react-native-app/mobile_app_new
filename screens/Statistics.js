import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Colors} from '../constants/Colors';
import Tiles from '../components/Tiles';
function Statistics() {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>Welcome to Statistics Screen</Text> */}
      <View style={{
        flexDirection:'row',
        display:'flex',
        justifyContent:'space-between'
      }}>
        <TouchableOpacity>
          <View style={[styles.card,styles.shadowPropCard]}>
            <Text style={styles.textData}>
              Charging{"\n"}Started
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={[styles.card2,styles.shadowPropCard]}>
            <Text style={styles.textData}>
              Charging{"\n"}Ended
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={[styles.card3,styles.shadowPropCard]}>
            <Text style={styles.textData}>
              Complete
            </Text>
          </View>
        </TouchableOpacity>
        
      </View>
      <View style={styles.container2}>
        <View style={styles.tileCover}>
          <Tiles data="20" unit="On-Off" dataname="No of Trips" />
          <Tiles data="6" unit="0-100" dataname="Charge Cycle" />
          <Tiles data="26.00" unit="Ah" dataname="Total Charge Capacity" />
        </View>
        <View style={styles.tileCover}>
          <Tiles data="1.32" unit="Wh" dataname="Total Discharge Energy" />
          <Tiles data="26.00" unit="Ah" dataname="Total Discharge Capacity" />
          <Tiles data="0.00" unit="A" dataname="BMS Current" />
        </View>
        {/* <View style={styles.tileCover}>
          <Tiles data="1" unit="" dataname="Reset Value" />
        </View> */}
      </View>
    </View>
  );
}

export default Statistics;

const styles = StyleSheet.create({
  container2: {
    marginTop: 20,
  },

  tileCover: {
    flexDirection: 'row',
    padding: 10,
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  card:{
    height:80,
    paddingHorizontal: 12,
    backgroundColor:'#BACDDB',
    borderRadius:12,
    justifyContent: 'center',
    marginRight:12
  },
  card2:{
    height:80,
    paddingHorizontal: 12,
    backgroundColor:'#BA90C6',
    borderRadius:12,
    justifyContent: 'center',
    marginRight:12
  },
  card3:{
    height:80,
    paddingHorizontal: 12,
    backgroundColor:'#FFA559',
    borderRadius:12,
    justifyContent: 'center',
    marginRight:12
  },
  container: {
    marginTop:40,
    flex: 1,
    alignItems: 'center',
    backgroundColor:'#282A3A',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  textData: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  shadowPropCard: {
    shadowColor: Colors.cardShadowColor,
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});
