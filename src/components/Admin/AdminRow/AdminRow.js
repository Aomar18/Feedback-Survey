import React, {Component} from 'react';


class AdminRow extends Component {
    render(){
        return(
            <div className="AdminRow">
            <tr>
            <td>{this.state.feedback.feeling}</td>
            <td>{this.state.feedback.understanding} </td>
            <td>{this.state.feedback.support}</td>
            <td>{this.props.feedback.comments}</td>
            <td><button onClick={this.handleDelete}>Delete</button></td>
            </tr>
            </div>
        );
    }
}
export default AdminRow;