import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Colors} from '../constants/Colors';
import { auth } from './firebase'
import { useNavigation } from '@react-navigation/native'

function HomeScreen() {
  const navigation=useNavigation()

    const handleSignOut = () => {
        auth.signOut().then(() => {
            navigation.replace("Login")
        }).catch(error => alert(error.message))
    }

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
      <TouchableOpacity 
        onPress={handleSignOut}
        style={styles.button}>
        <Text style={styles.buttonText}>Sign Out</Text>
      </TouchableOpacity>
      <Text style={styles.bottomCenter}>Signed in as: {auth.currentUser?.email}</Text>
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
  bottomCenter: {
    width: '100%',
  height: 50,
  // backgroundColor: '#EE5407',
  color: 'white',
  justifyContent: 'center',
  alignSelf: 'center',
  alignItems: 'center',
  position: 'absolute', //Here is the trick
  bottom: 0, //Here is the trick
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
  button: {
    backgroundColor: "#black",
    width: "60%",
    padding: 15,
    borderRadius: 10,
    // alignItems: "center",
    // position: "absolute",
    // bottom : 0,
  // top: 0,
  // right: 0,
    // marginTop: 40,
  },
  buttonOutline: {
    backgroundColor: "white",
    marginTop: 5,
    borderColor: "#0782F9",
    borderWidth: 2,
  },
  buttonText: {
    color: "white",
    fontWeight: 700,
    fontSize: 16,
  }
});
