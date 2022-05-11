import React from 'react';
import ReactDOM from 'react-dom';
import { login } from './actions/sessions_actions';
import Root from './components/root';
import configureStore from './store/store';
import * as SessionApiUtil from './util/session_api_util';

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    let preloadedState = undefined;
    if (window.currentUser) {
        preloadedState = {
            entities: {
                users: {[window.currentUser.id]: window.currentUser}
            },
            session: {
                id: window.currentUser.id
            }
        }
    }
    const store = configureStore(preloadedState);
    window.store = store;
    window.login = login;
    ReactDOM.render(<Root store={store} />, root);
})