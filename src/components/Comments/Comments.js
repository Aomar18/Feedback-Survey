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
            ...this.props.reduxState.updatedContent
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
        const action = { type: 'ADD_COMMENT', payload: this.state }
        this.props.dispatch(action);


        axios({
            method: 'POST',
            url: '/feedback',
            data: this.state
        }).then((response) => {
            console.log('axios - post', response);
            const action = { type: 'CLEAR_ALL' }
            this.props.dispatch(action);
            this.props.dispatch.push('thanks');
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

     <form>
         <input onchange={this.handleChange}/>
          <button onClick={this.handleSubmit}>NEXT</button>
     </form>



     </div>
        )
    }

}
export default Comments;