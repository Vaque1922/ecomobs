import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./css/layout.css";
import "./css/home.css";
import "./css/cart.css";
import "./css/search.css";
import "./css/login.css";
import "./css/help.css";
import "./css/contact.css";
import "./css/Product_detail.css";
import { Provider } from 'react-redux';
import store from './pages/store';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Provider store={store}>
    <App />
</Provider>);