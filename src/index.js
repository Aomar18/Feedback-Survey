import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';


const feedback = {
    feeling: '',
    understanding: '',
    support: '',
    comments: '',
}
//REDUCERS HERE

const feedbackReducer = (state = feedback, action) => {
    if (action.type === 'ADD_FEELING') {
        return { ...state, feeling: action.payload.feeling }
    }
    else if (action.type === 'ADD_UNDERSTANDING') {
        return { ...state, understanding: action.payload.understanding }
    }
    else if (action.type === 'ADD_SUPPORT') {
        return { ...state, support: action.payload.support }
    }
    else if (action.type === 'ADD_COMMENTS') {
        return { ...state, comments: action.payload.comments }
    }
    else if (action.type === 'CLEAR_ALL'){
        return feedback;
    }
    return state;
}






//STORE HERE 

const storeInstance = createStore(
    combineReducers({
        feedbackReducer,
    }),
    applyMiddleware(logger),
)




ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
