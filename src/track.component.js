import React, {Component} from 'react';
import { connect } from 'react-redux';


export default class TrackComponent extends React.Component {
    state = {
        show: true
    };

    constructor(props) {
        super(props);
        this.newValue = React.createRef();
    }

    editInput = () => {
        this.setState({
            show: false
        });
    };

    editData = () => {
        this.setState({
            show: true
        });
        this.props.onEditData(this.props.track.id, this.newValue.current.value);
    };

    closeOptions = () => {
        this.setState({
            show: true
        });
    };

    render() {
        this.btn = <button onClick={this.editInput}> edit </button>;
        let show = this.state.show;
        this.options = <><input type="text" ref={this.newValue} />
            <button onClick = {this.editData}> ok </button>
            <button onClick = {this.closeOptions}> return </button></>;
        return (
            <div>
                { show && this.btn }
                { !show && this.options }
            </div>
        )

    }

}
