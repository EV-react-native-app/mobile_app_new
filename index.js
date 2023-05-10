/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Splash from './components/Splash';
import {name as appName} from './app.json';
import {Provider} from 'react-redux';
import store from './store';

// AppRegistry.registerComponent(appName, () => (
//   <Provider store={store}>App</Provider>
// ));
const AppWithProvider = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent(appName, () => AppWithProvider);
