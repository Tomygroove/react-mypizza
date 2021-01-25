import React from 'react';
import {Provider} from 'react-redux'
import styled from 'styled-components'
import Routes from './config/router'
import {store} from './config/store'

function App() {
  return (
    <Provider store={store}>
      <Routes></Routes>
    </Provider>
    
  );
}

export default App;