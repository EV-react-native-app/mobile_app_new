import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Colors} from '../constants/Colors';

function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to HomeScreen</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Details');
          }}>
          <Text style={styles.textStyle}>GO TO LAB</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary100,
  },
  text: {
    fontSize: 18,
    color: 'white',
    marginBottom: 12,
    fontWeight: 'bold',
  },
  buttonContainer: {
    borderColor: Colors.primary400,
    borderRadius: 4,
    alignSelf: 'center',
    marginBottom: 4,
    backgroundColor: Colors.tileColor1,
    padding: 10,
    elevation: 10,
  },
  pressed: {
    opacity: 0.4,
  },
  textStyle: {
    fontWeight: 'bold',
  },
});
