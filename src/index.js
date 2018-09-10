import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';


const defaultContent = {
    feeling: '',
    understanding: '',
    support: '',
    comments: '',
}
//REDUCERS HERE

const feedbackReducer = (state = defaultContent, action) => {
    const updateContent = action.payload;
    if (action.type === 'ADD_FEELING') {
        return { ...state, feeling: updateContent.feeling }
    }
    else if (action.type === 'ADD_UNDERSTANDING') {
        return { ...state, understanding: updateContent.understanding }
    }
    else if (action.type === 'ADD_SUPPORT') {
        return { ...state, support: updateContent.support }
    }
    else if (action.type === 'ADD_COMMENTS') {
        return { ...state, comments: updateContent.comments }
    }
    else if (action.type === 'CLEAR_ALL'){
        return defaultContent;
    }
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
