import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';


const initialState = [
    'Smell like teen spirit',
    'pink'
];

function playlist(state = initialState, action) {
    // console.log("action ", action, " state = " , state); //1 , 3
    if ( action.type === 'ADD_TRACK')
        return [
            ...state,
            action.payload
        ];
    return state;
}

const store = createStore(playlist);

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
