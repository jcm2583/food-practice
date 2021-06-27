import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';



const foodList = (state = [], action) => {
  switch (action.type) {
    case "GET_FOODS" :
      return action.payload;
    default: 
      return state;
  }
    
}




const storeInstance = createStore(
  combineReducers({
    foodList
  }), 
  applyMiddleware(logger),
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={storeInstance}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
