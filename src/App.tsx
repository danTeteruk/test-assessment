import React from 'react';
import './App.css';
import { Provider } from 'mobx-react';
import AppContainer from './containers/appContainer';
import stores from './stores';

function App() {
  return (
    <Provider { ...stores }>
      <AppContainer />
    </Provider>
  );
}

export default App;
