import React, { Component } from 'react';
import { connect } from 'react-redux';

const emptyFeedback = {
    feeling: '',
}


class Feeling extends Component {

    constructor() {
        super();

        this.state = emptyFeedback;

    }

    handleChange = (event) => {
        this.setState({
            ...this.state,
            feeling: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const action = { type: 'ADD_FEELING', payload: this.state }
        this.props.dispatch(action);
        this.props.history.push('understanding');
        this.emptyInputs();
    }

    emptyInputs() {
        this.setState(emptyFeedback);
    }






    render() {
        console.log(this.state);
        return (
            <div>
                <h1> How are you feeling ? </h1>

                <form className="FeelingSurvey">
                    <label>1</label>
                    <input className='radio' onChange={this.handleChange}
                        type="radio" value="1" />
                    <br />
                    <label>2</label>
                    <input className='radio' onChange={this.handleChange}

                        type="radio" value="2" />
                    <br />
                    <label>3</label>
                    <input className='radio' onChange={this.handleChange}

                        type="radio" value="3" />
                    <br />
                    <label>4</label>
                    <input className='radio' onChange={this.handleChange}

                        type="radio" value="4" />
                    <br />
                    <label>5</label>
                    <input className='radio' onChange={this.handleChange}

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
});
export default connect(mapReduxStateToProps)(Feeling);