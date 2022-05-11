import React from 'react';
import ReactDOM from 'react-dom';
import { login } from './actions/sessions_actions';
import Root from './components/root';
import configureStore from './store/store';
import * as SessionApiUtil from './util/session_api_util';

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    const store = configureStore();
    window.store = store;
    window.login = login;
    ReactDOM.render(<Root store={store} />, root);
    // SessionApiUtil.signup(
    //     {
    //         username: "Jeremy123",
    //         password: "123456"
    //     }
    // ).then(console.log);
    
    // SessionApiUtil.login(
    //     {
    //         username: "Jeremy123",
    //         password: "123456"
    //     }
    // ).then(console.log);

    // $.ajax({
    //     url: 'api/users',
    //     method: 'POST',
    //     data: {
    //         user: {
    //             username: "Jeremy",
    //             password: "123456"
    //         }
    //     }
    // }).then(console.log);
    // $.ajax({
    //     url: 'api/session',
    //     method: 'POST',
    //     data: {
    //         user: {
    //             username: "Jeremy",
    //             password: "123456"
    //         }
    //     }
    // }).then(
    //     $.ajax({
    //         url: 'api/session',
    //         method: 'DELETE',
    //     }).then(console.log)
    // ).then(console.log);

    // setTimeout(()=>{
    //     $.ajax({
    //         url: 'api/session',
    //         method: 'DELETE',
    //     }).then(console.log);
    // }, 5000);
})