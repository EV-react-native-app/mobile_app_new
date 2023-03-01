import {StyleSheet, Text, View} from 'react-native';
import {Colors} from '../constants/Colors';

function Statistics() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Statistics Screen</Text>
    </View>
  );
}

export default Statistics;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary50,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
