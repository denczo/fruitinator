import './App.sass';
import Wrapper from './structure/wrapper/Wrapper';
import { Provider } from 'react-redux';
import store from './stores/ReduxStore';
import React from 'react';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Wrapper/>
      </div>
    </Provider>
  );
}

export default App;