const initialState = [];

export default function playlist(state = initialState, action) {
    // console.log("action ", action, " state = " , state); //1 , 3
    if (action.type === 'ADD_TRACK') {
        return [
            ...state,
            action.payload
        ];
    } else if (action.type === 'DELETE_TRACK') {
        let data = [...state];
        const filtered = data.filter((item) => item.id !== action.payload);
        return [
            ...filtered
        ];
    }
    else if (action.type === 'EDIT_TRACK') {
        //console.log("EDIT_TRACK action ", action, " state = " , state); //1 , 3
        let data = [...state];
        data.forEach((item) => {
           if(item.id == action.payload.id) {
               item.name = action.payload.text;
           }
        });
        return [
            ...data
        ];
    } else if (action.type === 'FETCH_TRACKS_SUCCESS'){
        //debugger;
        return [...state, ...action.payload];
    }
    return state;
}