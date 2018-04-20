import 'react-native-browser-polyfill';
import {AppRegistry} from 'react-native';
import Application from './src/main';

import Orientation from 'react-native-orientation';

Orientation.lockToPortrait();

AppRegistry.registerComponent('app', () => Application);