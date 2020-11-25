import { combineReducers } from "redux";
import tracks from './tracks';
import playlists from './playlists';
import filterTracks from './filterTracks';
import editTracks from './editTracks';

export default combineReducers({
    tracks,
    playlists,
    filterTracks,
    editTracks
});
