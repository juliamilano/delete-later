import React, {Component} from 'react';
import { connect } from 'react-redux';
import {getTracks} from './action/tracks';
import TrackComponent from "./track.component";


class App extends Component {
    state = {
        flags: [true]
    };
    addTrack(){
        //console.log("addTrack", this.trackInput.value, this.props.onAddTrack);
        this.props.onAddTrack(this.trackInput.value);
        this.trackInput.value = "";
    }
    findTrack(){
        console.log("searchInput", this.searchInput.value);
        this.props.onFindTrack(this.searchInput.value);
    }
    editData(id){
        console.log("editData", id);
        this.props.onEditData(id);
    }
    deleteData(id){
        console.log("deleteData", id);
        this.props.onDeleteData(id);
    }
    //btnEdit = "<button onClick = \{this.editData.bind\(this, track.id\)\}> ok </button>";

    editInput = () => {
        console.log(this.flag);
        this.flag = true;
        if (!this.flag){
            this.btn = <button onClick={this.editInput}> edit </button>;
            //debugger;
        }
        else {
            // debugger;
            this.btn = <input type="text" ref={(input) => {this.editInput = input}} /> /
                <button onClick = {this.editData.bind(this, this.editInput)}> ok </button>  /
                <button onClick = {this.editInput = ""}> return </button>;
        }
    }

    render() {
       // console.log(this.props.testStore);
        let space = {display:'inline-block', background: "pink",  width: '20px', height:'3px'};
        this.btn = <button onClick={this.editInput}> edit </button>;

        return (
            <div>
                <div>
                    <input type="text" ref={(input) => {this.trackInput = input}} />
                    <button onClick = {this.addTrack.bind(this)}> Add Track</button>
                </div>
                <div>
                    <input type="text" ref={(input) => {this.searchInput = input}} />
                    <button onClick = {this.findTrack.bind(this)}> Find track</button>
                </div>
                <div>
                    <button onClick = {this.props.onGetTracks}> Get tracks </button>
                </div>
                <ul>
                    {
                        this.props.tracks.map((track, index) =>
                        {
                            return (
                                <li key = { index } >{ track.name }
                            <div style = {space}></div>
                                    <TrackComponent onEditData={this.props.onEditData} track={track}></TrackComponent>
                            <div style = {space}></div>
                                <button onClick = {this.deleteData.bind(this, track.id)}> del </button>
                            </li>)
                        }
                    )}
                </ul>
            </div>
        );
    }

}

export default connect(
    state => ({
       // tracks: state.tracks
        tracks: state.tracks.filter(track => {
            return track.name.includes(state.filterTracks)
        })
    }),
    dispatch => ({
        onAddTrack: (name) => {
            const payload = {
                id: Date.now().toString(),
                name,
                show: true
            };
                dispatch ({type: 'ADD_TRACK', payload});
            },
        onFindTrack: (name) => {
            dispatch ({type: 'FIND_TRACK', payload: name});
        },
        onGetTracks: (id) => {
            dispatch(getTracks(id));
        },
        onEditData : (id, data) => {
            dispatch ({type: 'EDIT_TRACK', payload: {id: id, text: data}});
        },
        onDeleteData : (id) => {
            dispatch ({type: 'DELETE_TRACK', payload: id});
        }

    })
)(App);
