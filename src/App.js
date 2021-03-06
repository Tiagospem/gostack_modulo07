import React from 'react';
import './config/ReactotronConfig';
import {Router} from "react-router-dom";
import {Provider} from 'react-redux';
import { ToastContainer } from 'react-toastify';
import GlobalStyle from './styles/global';
import Header from './components/Header';
import Routes from './routes';
import history from './services/history';
import store from './store';


function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Header />
        <Routes />
        <GlobalStyle />
        <ToastContainer />
      </Router>
    </Provider>
  );
}

export default App;
