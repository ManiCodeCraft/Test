/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import LoginVC from './LoginVC';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => LoginVC);
