import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import App from './App';
import store from '../src/Redux/store';  

ReactDOM.render(
 
  <Provider store={store}>
    <Router>
    
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

 

document.addEventListener('DOMContentLoaded', function() {
  console.log('index.js is loaded and running!');
 
});
