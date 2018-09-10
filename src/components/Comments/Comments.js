import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

const emptyFeedback = {
    comments: '',
}


class Comments extends Component {

    constructor(props) {
        super(props);


        this.state = {
            ...this.props.reduxState.feedbackReducer,
            comments: ''
        }

    }

    handleChange = (event) => {
        console.log('in handleChange');
        this.setState({
            ...this.state,
            comments: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const action = { type: 'ADD_COMMENTS', payload: this.state }
        this.props.dispatch(action);


        axios({
            method: 'POST',
            url: '/feedback',
            data: this.state
        }).then((response) => {
            console.log('axios - post', response);
            const action = { type: 'CLEAR_ALL' }
            this.props.dispatch(action);
            this.props.history.push('thanks');
            this.emptyInputs();
        }).catch((error) => {
            console.log('ERROR in AXIOS POST', error);
            alert('Error posting survey data to the server db');
        });
    }

    emptyInputs() {
        this.setState(emptyFeedback);
    }

    render() {
        return (
            <div>
                <h1>Any comments you want to leave? </h1>
                <form>
                    <textarea rows="4" cols="50" onChange={this.handleChange} placeholder="Enter a comment about the survey here" />
                    <br/>
                    <button onClick={this.handleSubmit}>NEXT</button>
                </form>



            </div>
        )
    }

}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
});
export default connect(mapReduxStateToProps)(Comments);