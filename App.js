/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { useColorScheme } from 'react-native';
import StackNavigator from './src/navigation/stack/StackNavigator';
import { styles } from './src/styles/styles';

// Redux 
import { Provider } from 'react-redux';
import rootReducer from './src/redux/reducers/rootReducer';
// Redux Store --> createStore is deprecated hence using legacy_createStore for now
// Read docs and implementation for more details
import {legacy_createStore as createStore} from 'redux';
const store = createStore(rootReducer);

const App = () => {

  return (
      <Provider store={store}>
        <StackNavigator 
          style={useColorScheme() == 'dark' ? styles.dark : styles.light}
        />
      </Provider>
  );
}


export default App;
