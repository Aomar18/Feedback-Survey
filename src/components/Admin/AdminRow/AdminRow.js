import React, { Component } from 'react';
import axios from 'axios';

class AdminRow extends Component {


    handleDelete = () => {
        axios({
            method: 'DELETE',
            url: `/feedback/${this.props.feedback.id}`,
        }).then((response) => {
            this.props.getResults();
            alert('SURVEY ITEM DELETED!')
        }).catch((error) => {
            console.log('error making Delete request', error);
        });

    }


    render() {
        return (

            <tr>
                <td>
                    {this.props.feedback.feeling}
                </td>
                <td>
                    {this.props.feedback.understanding}
                </td>
                <td>
                    {this.props.feedback.support}
                </td>
                <td>
                    {this.props.feedback.comments}
                </td>
                <td>
                    <button onClick={this.handleDelete}>Delete</button>
                </td>
            </tr>

        );
    }
}
export default AdminRow;