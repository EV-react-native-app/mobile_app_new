import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Colors} from '../constants/Colors';

function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Cell Doc</Text>
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
    backgroundColor: '#282A3A',
  },
  text: {
    fontSize: 24,
    color: 'white',
    marginBottom: 24,
    fontWeight: 'bold',
  },
  buttonContainer: {
    borderColor: Colors.primary400,
    borderRadius: 12,
    alignSelf: 'center',
    marginBottom: 4,
    backgroundColor: 'black',
    paddingHorizontal: 24,
    paddingVertical:12,
    elevation: 10,
  },
  pressed: {
    opacity: 0.4,
  },
  textStyle: {
    fontWeight: 'bold',
    color:'white'
  },
});
