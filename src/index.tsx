import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import { state, subscriber } from './redux/state';
// import {
//     addDialogMessage,
//     addPostMessage,
//     errorHandler,
//     updatePostTextareaValue,
// } from './redux/state';
import { store } from './redux/state';

const rerenderEntireTree = () => {
    ReactDOM.render(
        <App
            state={store.getState()}
            addDialogMessage={store.addDialogMessage.bind(store)}
            addPostMessage={store.addPostMessage.bind(store)}
            updatePostTextareaValue={store.updatePostTextareaValue.bind(store)}
            errorHandler={store.errorHandler.bind(store)}
        />,
        document.getElementById('root')
    );
};

store.subscriber(rerenderEntireTree);

rerenderEntireTree();
