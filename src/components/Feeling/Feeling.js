import React, { Component } from 'react';
import {connect} from 'react-redux';

const emptyfeedback = {
    feeling: ''
}


class Feeling extends Component {

constructor(){
super();

this.state = feedback;

}

handleChange = (event) => {
    this.setState({
        ...this.state, 
        feeling: event.target.value
    })
}

handleSubmit = (event) => {
    event.preventDefault();

const action = { type: 'ADD_FEELING' , payload: this.state}
this.props.dispatch(action);
this.props.history.push('feeling');
}

emptyInputs(){
    this.setState(emptyFeedback);
}






render() {
    return(
        <div>
        <form className="FeelingSurvey">
        <input className='radio' onChange={this.handleChange}
                checked="{this.state.feeling === 1}"
                type="radio" value="1"/>
        <input className='radio' onChange={this.handleChange}
                checked="{this.state.feeling === 2}"
                type="radio" value="2"/>
        <input className='radio' onChange={this.handleChange}
                checked="{this.state.feeling === 3}"
                type="radio" value="3"/>
        <input className='radio' onChange={this.handleChange}
                checked="{this.state.feeling === 4}"
                type="radio" value="4"/>
        <input className='radio' onChange={this.handleChange}
                checked="{this.state.feeling === 5}"
                type="radio" value="5"/>
        <input type="subumit" onClick={this.handleSubmit}>NEXT</input>



        </form> 
        </div>
    )
}
}
const mapReduxStateToProps = (reduxState) => ({
    reduxState
}),

export default connect(mapReduxStateToProps)(Feeling);