import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import AdminRow from './AdminRow/AdminRow.js';
import './Admin.css';


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
                feedback: response.data
            })
        }).catch((error) => {
            console.log('error in get', error);
        })
    }

    handleSubmit = (event) => {
        this.props.history.push('/')
    
    }



    render() {
        return (
            <div>
                <h2>Administrator's Data Table</h2>
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
                <br/>
                <br/>
                <p>Return to Survey:</p>
                <button className="home" onClick={this.handleSubmit}>Home</button>

            </div>
        )
    }

}



const mapReduxStateToProps = (reduxState) => ({
    reduxState
});
export default connect(mapReduxStateToProps)(Admin);