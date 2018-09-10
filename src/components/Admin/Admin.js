import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import AdminRow from './AdminRow/AdminRow.js';

class Admin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            feedback: [],

        }
    }

    componentDidMount() {
        this.getFeedback();
    }

    getFeedback = () => {
        axios({
            method: 'GET',
            url: '/feedback',
        }).then((response) => {
            console.log(response.data);
            this.setState({
                feedback: response.data.rows
            })
        }).catch((error) => {
            console.log('error in get', error);
        })
    }


    handleDelete = () => {
        axios({
            method: 'DELETE',
            url: `/feedback/${this.props.feedback.id}`,
        }).then((response) => {
            this.props.getResults();
        }).catch((error) => {
            console.log('error making Delete request', error);
        });

    }

    render() {
        return (
            <div>
                <table align="center" className="table">
                    <thead>
                        <tr>
                            <th>Feeling</th>
                            <th>Comprehension</th>
                            <th>Support</th>
                            <th>Comments</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.feedback.map((feedback, i) => {
                            return (
                                
                                <AdminRow key={i} feedback={feedback} />

                            );
                        })}
                    </tbody>
                </table>

            </div>
        )
    }

}



const mapReduxStateToProps = (reduxState) => ({
    reduxState
});
export default connect(mapReduxStateToProps)(Admin);