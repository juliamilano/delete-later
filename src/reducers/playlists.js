const initialState = [
    'My home',
    'My work'
];

export default function playlist(state = initialState, action) {
    // console.log("action ", action, " state = " , state); //1 , 3
    if (action.type === 'ADD_PLAYLIST'){
        return state;
    } else if (action.type === 'DELETE_PLAYLIST'){
        return state;
    }
    return state;
}
