import React, { Component } from 'react';

const feedback = {
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





render() {
    return(
        <div>
        </div>
    )
}
}
export default Feeling;