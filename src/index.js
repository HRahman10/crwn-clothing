import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// const userReducer = (currentState, action) => {
//   switch (action.type){
//     case 'SET_CURRENT_USER':
//       return{ // NOTE WE ARE RETURNING A NEW OBJECT TO TRIGGER AN UPDATE THE COMPONENT
//         ...currentState,
//         currentUser: action.payload
//       };
//       default:
//         return currentState
//   }
// }