import {StyleSheet, Text, View} from 'react-native';

function Details() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Details Screen</Text>
    </View>
  );
}

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'black',
    fontStyle: 'italic',
    fontSize: 20,
  },
});
