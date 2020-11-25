const initialState = '';

export default function editTracks(state = initialState, action) {
    // console.log("action ", action, " state = " , state); //1 , 3
    if (action.type === 'EDIT_TRACK'){
        console.log('EDIT_TRACK ');
        return state;
    }
    return state;
}