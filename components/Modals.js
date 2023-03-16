import {View, Modal, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Colors} from '../constants/Colors';

function Modals({onClose}) {
  return (
    <>
      <Modal transparent={true}>
        <View style={styles.outerStyle}>
          <View style={styles.innerStyle}>
            <Text style={styles.textStyle1}>Scan to Pair</Text>
            <TouchableOpacity onPress={onClose} style={{marginTop: 450}}>
              <View style={styles.buttonStyle}>
                <Text>Close</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
}

export default Modals;

const styles = StyleSheet.create({
  outerStyle: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    flex: 1,
  },
  innerStyle: {
    marginVertical: 100,
    marginHorizontal: 10,
    backgroundColor: 'rgba(0,0,0,0.7)',
    flex: 1,
    borderRadius: 8,
    padding: 20,
    borderColor: 'green',
    borderWidth: 2,
  },
  textStyle1: {
    fontSize: 20,
    color: 'white',
    alignSelf: 'center',
  },
  buttonStyle: {
    borderRadius: 4,
    borderColor: 'white',
    borderWidth: 1,
    alignSelf: 'center',
    alignItems: 'center',
    paddingVertical: 2,
    paddingHorizontal: 3,
    backgroundColor: Colors.primary200,
  },
});
