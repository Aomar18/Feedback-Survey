import React, { Component } from 'react';


class AdminRow extends Component {
    render() {
        return (

            <tr>
                <td>{this.props.feedback.feeling}</td>
                <td>{this.props.feedback.understanding} </td>
                <td>{this.props.feedback.support}</td>
                <td>{this.props.feedback.comments}</td>
                <td><button onClick={this.handleDelete}>Delete</button></td>
            </tr>

        );
    }
}
export default AdminRow;