import React, { Component } from 'react';
import { connect } from 'react-redux';


const emptyFeedback = {
    understanding: '',
}

class Understanding extends Component {
    constructor() {
        super();

        this.state = emptyFeedback;

    }

    handleChange = (event) => {
        this.setState({
            ...this.state,
            understanding: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const action = { type: 'ADD_UNDERSTANDING', payload: this.state }
        this.props.dispatch(action);
        this.props.history.push('support');
        this.emptyInputs();
    }

    emptyInputs() {
        this.setState(emptyFeedback);
    }




    render() {
        return (
            <div className="understandingView">
            <br/>
            <h1>How well are you understanding the content?</h1>
                <form className="understandingSurvey">

                    <label>1</label>
                    <input className='radio' onChange={this.handleChange}
                        checked="{this.state.understanding === '1'}"
                        type="radio" value="1" />
                    <br />
                    <label>2</label>
                    <input className='radio' onChange={this.handleChange}
                        checked="{this.state.understanding === '2'}"
                        type="radio" value="2" />
                    <br />
                    <label>3</label>
                    <input className='radio' onChange={this.handleChange}
                        checked="{this.state.understanding === '3'}"
                        type="radio" value="3" />
                    <br />
                    <label>4</label>
                    <input className='radio' onChange={this.handleChange}
                        checked="{this.state.understanding === '4'}"
                        type="radio" value="4" />
                    <br />
                    <label>5</label>
                    <input className='radio' onChange={this.handleChange}
                        checked="{this.state.understanding === '5'}"
                        type="radio" value="5" />
                    <br />
                    <button type="submit" onClick={this.handleSubmit}>NEXT</button>



                </form>
            </div>

        )
    }

}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
})
export default connect(mapReduxStateToProps)(Understanding);