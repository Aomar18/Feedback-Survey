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
        const action = { type: 'ADD_understanding', payload: this.state }
        this.props.dispatch(action);
        this.props.history.push('understanding');
        this.emptyInputs();
    }

    emptyInputs(){
        this.setState(emptyFeedback);
    }




    render() {
        return (<div className="understandingView">

            <form className="understandingSurvey">

                <input className='radio' onChange={this.handleChange}
                    checked="{this.state.understanding === 1}"
                    type="radio" value="1" />

                <input className='radio' onChange={this.handleChange}
                    checked="{this.state.understanding === 2}"
                    type="radio" value="2" />

                <input className='radio' onChange={this.handleChange}
                    checked="{this.state.understanding === 3}"
                    type="radio" value="3" />

                <input className='radio' onChange={this.handleChange}
                    checked="{this.state.understanding === 4}"
                    type="radio" value="4" />

                <input className='radio' onChange={this.handleChange}
                    checked="{this.state.understanding === 5}"
                    type="radio" value="5" />

                <input type="submit" onClick={this.handleSubmit}>NEXT</input>



            </form>
        </div>
        
        )
    }

}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
})
export default connect(mapReduxStateToProps)(Understanding);