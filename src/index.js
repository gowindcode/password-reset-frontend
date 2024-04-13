import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux';
// import { store } from '.Store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <Router>
      <App />
    </Router>

  // </React.StrictMode>
  // <Provider>
  //   <Router>
  //     <App/>
  //   </Router>
  // </Provider>
);

reportWebVitals();
