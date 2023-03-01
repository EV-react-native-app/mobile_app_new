import {useState} from 'react';
import {Alert, Button, Modal, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Colors} from '../constants/Colors';

function Summary() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <View style={[styles.buttonContainer, styles.margin]}>
        <TouchableOpacity
          onPress={() => {
            setModalVisible(true);
          }}>
          <Text style={styles.textStyle}>Please Connect to SensePCB</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity>
          <View style={styles.innerContainer}>
            <View style={styles.ultraInnerContainer}>
              <Text style={{fontSize: 40, fontWeight: 'bold'}}>7.37</Text>
            </View>
            <View style={{marginTop: 27}}>
              <Text style={{fontWeight: 'bold'}}>Km/h</Text>
            </View>
          </View>
          <Text style={{textAlign: 'center', fontWeight: 'bold'}}>
            Velocity
          </Text>
        </TouchableOpacity>
      </View>

      {/* Modal testing */}
      <Modal visible={modalVisible} transparent={true}>
        <View style={{backgroundColor: 'rgba(0,0,0,0.5)', flex: 1}}>
          <View
            style={{
              marginVertical: 200,
              margin: 50,
              backgroundColor: 'rgba(0,0,0,0.7)',
              flex: 1,
              borderRadius: 8,
              padding: 20,
              borderColor: 'green',
              borderWidth: 2,
            }}>
            <Text
              style={{
                fontSize: 20,
                color: 'white',
                marginBottom: 250,
                alignSelf: 'center',
              }}>
              Scan to Pair
            </Text>

            <Button
              title="Close"
              onPress={() => {
                setModalVisible(false);
              }}
            />

            {/* <Button
              title="test"
              onPress={async () => {
                await requestPermissions((isGranted: boolean) => {
                  Alert.alert('The Android Permission is Granted');
                });
              }}
            /> */}
          </View>
        </View>
      </Modal>
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
    borderColor: '#404258',
    borderRadius: 6,
    alignSelf: 'center',
    marginBottom: 4,
    backgroundColor: '#3c3e52',
    padding: 10,
    elevation: 25,
    marginBottom: 15,
  },
  margin: {
    marginTop: 250,
  },
  textStyle: {
    fontWeight: 'bold',
  },
  innerContainer: {
    flexDirection: 'row',
  },
  ultraInnerContainer: {
    marginRight: 4,
  },
});
