import {AppRegistry, YellowBox} from 'react-native';
import Application from './src/main';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

AppRegistry.registerComponent('app', () => Application);