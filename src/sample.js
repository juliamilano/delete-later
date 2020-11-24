function counterReducer(state = { value: 0 }, action) {
    switch (action.type) {
        case 'counter/incremented':
            return { value: state.value + 1 }
        case 'counter/decremented':
            return { value: state.value - 1 }
        default:
            return state
    }
}

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
let store = createStore(counterReducer)

// You can use subscribe() to update the UI in response to state changes.
// Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.
// There may be additional use cases where it's helpful to subscribe as well.

store.subscribe(() => console.log(store.getState()))

// The only way to mutate the internal state is to dispatch an action.
// The actions can be serialized, logged or stored and later replayed.
store.dispatch({ type: 'counter/incremented' })
// {value: 1}
store.dispatch({ type: 'counter/incremented' })
// {value: 2}
store.dispatch({ type: 'counter/decremented' })
// {value: 1}


import React from 'react';
import {createStore} from 'redux';

function playlist(state = [], action) {
    // console.log("action ", action, " state = " , state); //1 , 3
    if ( action.type === 'ADD_TRACK')
        return [
            ...state,
            action.payload
        ];
    return state;
}

const store = createStore(playlist); //1
const list = document.querySelectorAll(".list")[0];
const trackInput = document.querySelectorAll(".trackInput")[0];

// console.log(1, store.getState()); //2 state
store.subscribe(() => {
    list.innerHTML = "";
    trackInput.value = "";
    store.getState().forEach((track) => {
        const li = document.createElement('li');
        li.textContent = track;
        list.appendChild(li);
    });
    //console.log('subscribe', store.getState()); //4 state
});
// store.dispatch({
//     type: 'ADD_TRACK',
//     payload: 'Smell like spirit'
// }); //3
// store.dispatch({
//     type: 'ADD_TRACK',
//     payload: 'KUKUHA, POEHALI'
// }); //3

const addTrackBtn = document.querySelectorAll(".addTrack")[0];
addTrackBtn.addEventListener(
    'click', () => {
        const trackName = trackInput.value;
        store.dispatch({
            type: 'ADD_TRACK',
            payload: trackName
        });
    }
);


// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
//
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
//
// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();

