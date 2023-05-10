import React, { Component } from 'react';
import { View } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AppWithProvider from '../index.js'

import LottieView from 'lottie-react-native';


// const navigation = useNavigation();

export default class Splash extends Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: '#ffffff'
                }}
            >
                <LottieView
                    source={require('../assets/splash.json')}
                    autoPlay
                    loop={false}
                    speed={0.5}
                    onAnimationFinish={() => {
                        console.log('Animation Finished!')
                        this.props.navigation.replace('Login');
                        // navigation.navigate('Login');
                    }}
                />
            </View>
        )
    }
}