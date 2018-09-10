import React, { Component } from 'react';


const emptyfeedback = {
    support: ''
}

class Support extends Component {
    constructor() {
        super();

    }

    handleChange = (event) => {
        this.setState({
            ...this.state,
            support: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const action = { type: 'ADD_SUPPORT', payload: this.state }
        this.props.dispatch(action);
        this.props.history.push('support');
        this.emptyInputs();
    }

    emptyInputs()




    render() {
        return (<div className="supportView">

            <form className="supportSurvey">

                <input className='radio' onChange={this.handleChange}
                    checked="{this.state.support === 1}"
                    type="radio" value="1" />

                <input className='radio' onChange={this.handleChange}
                    checked="{this.state.support === 2}"
                    type="radio" value="2" />

                <input className='radio' onChange={this.handleChange}
                    checked="{this.state.support === 3}"
                    type="radio" value="3" />

                <input className='radio' onChange={this.handleChange}
                    checked="{this.state.support === 4}"
                    type="radio" value="4" />

                <input className='radio' onChange={this.handleChange}
                    checked="{this.state.support === 5}"
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
export default connect(mapReduxStateToProps)(support);