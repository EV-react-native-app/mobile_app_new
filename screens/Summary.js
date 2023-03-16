import {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Modals from '../components/Modals';
import Tiles from '../components/Tiles';
import {Colors} from '../constants/Colors';

function Summary({navigation}) {
  const [modalVisible, setModalVisible] = useState(false);

  function closeModel() {
    setModalVisible(false);
  }

  return (
    <View style={styles.container}>
      <View style={[styles.buttonContainer, styles.margin]}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Bluetooth');
          }}>
          <Text style={styles.textStyle}>Please Connect to SensePCB</Text>
        </TouchableOpacity>
      </View>
      <Tiles data="8.35" unit="Km/h" dataname="Velocity" />

      {/* Modal testing */}
      {modalVisible && <Modals onClose={closeModel} />}
    </View>
  );
}

export default Summary;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary50,
  },
  buttonContainer: {
    borderColor: Colors.primary400,
    borderRadius: 6,
    alignSelf: 'center',
    marginBottom: 4,
    backgroundColor: Colors.tileColor1,
    padding: 10,
    elevation: 25,
    marginBottom: 15,
  },

  margin: {
    marginTop: 250,
  },

  innerContainer: {
    flexDirection: 'row',
  },
  ultraInnerContainer: {
    marginRight: 4,
  },
  textStyle: {
    fontWeight: 'bold',
  },
});
