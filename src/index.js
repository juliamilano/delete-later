import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import App from './App';
import './index.css';
import reducers from './reducers'

const initialState = {
    tracks: [
        'Smell like teen spirit',
        'pink'
    ],
    playlists: [
        "my home playlist",
        "my work playlist"
    ]

};

//const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);


//1
// const list = document.querySelectorAll(".list")[0];
// let trackInput = document.querySelectorAll(".trackInput")[0];
//
// store.subscribe(() => {
//     list.innerHTML = "";
//     trackInput.value = "";
//     store.getState().forEach((track) => {
//         const li = document.createElement('li');
//         li.textContent = track;
//         list.appendChild(li);
//     });
// });
//
// const addTrackBtn = document.querySelectorAll(".addTrack")[0];
// addTrackBtn.addEventListener(
//     'click', () => {
//         const trackName = trackInput.value;
//         store.dispatch({
//             type: 'ADD_TRACK',
//             payload: trackName
//         });
//     }
// );
//
