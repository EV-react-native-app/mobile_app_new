import {StyleSheet, Text, View} from 'react-native';
import {Colors} from '../constants/Colors';

function Map() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Map Screen</Text>
    </View>
  );
}

export default Map;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#282A3A',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
