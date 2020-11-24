const initialState = '';

export default function filterTracks(state = initialState, action) {
    // console.log("action ", action, " state = " , state); //1 , 3
    if (action.type === 'FIND_TRACK'){
       // console.log('state ', 'action ', action);
        return action.payload;
    }
    return state;
}