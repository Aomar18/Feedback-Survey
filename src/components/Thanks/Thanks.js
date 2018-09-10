import React, { Component } from 'react';
import {connect} from 'react-redux';


class Thanks extends Component {

handleSubmit = (event) => {
    this.props.history.push('/')

}



render() {
    return(
        <div>
            <h1>Thank you!</h1>
            <h2>Thank you!</h2>
            <h3>Thank you!</h3>
            <h4>Thank you!</h4>
            <h5>Thank you!</h5>
            <h6>Thank you!</h6>
    <br/>
    <p>Return to home page:</p>
    <button onClick={this.handleSubmit}>Home</button>



        </div>
    )
}
}
const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(Thanks);