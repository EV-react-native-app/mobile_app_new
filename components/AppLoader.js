import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';

const AppLoader = () => {
  return (
    <View style={[StyleSheet.absoluteFillObject, styles.container]}>
        <LottieView 
        source={require('../assets/heartbeat.json')}
        autoSize resizeMode="center"
        autoPlay loop/>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        // position: 'absolute',
        // width: 80,
        // height: 20,
        // marginLeft: '40%',
        // marginRight: '40%',
        // marginRight
        // padding: '10%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.3)',
        zIndex: 1,
    }
})

export default AppLoader
