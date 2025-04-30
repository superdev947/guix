import React from 'react';
import Store from './src/redux/Store';
import Router from './src/Router';
import { Provider } from 'react-redux';

class App extends React.Component{
  
  componentDidMount(){
  }

  render(){
    return (
      <Provider store={Store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
