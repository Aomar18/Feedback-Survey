import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
const emptyInfo = [];


class Admin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            feedback: emptyInfo

        }
    }

    componentDidMount() {
        this.getResults();
    }

    getResults = () => {
        axios({
            method: 'GET',
            url: '/feedback',
        }).then((response) => {
            console.log(response.data);
            this.setState({
                result: response.data.rows
            })
        }).catch((error) => {
            console.log('error in get', error);
        })
    }


    handleDelete = () => {
        axios({
            method: 'DELETE',
            url: `/feedback/${this.props.result.id}`,
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
                        <tr>
                            <td>{this.props.result.feeling}</td>
                            <td>{this.props.result.understanding} </td>
                            <td>{this.props.result.support}</td>
                            <td>{this.props.result.comments}</td>
                            <td><button onClick={this.handleDelete}>Delete</button></td>
                        </tr>

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