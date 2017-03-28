/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import {AppRegistry} from 'react-native';
import Root from './src/containers/root.js'

AppRegistry.registerComponent('sskick', () => Root);
AppRegistry.runApplication('MyApp', { rootTag: document.getElementById('react-root') })
