import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { state, subscriber } from './redux/state';
import {
    addDialogMessage,
    addPostMessage,
    errorHandler,
    updatePostTextareaValue,
} from './redux/state';
import { StateType } from './redux/type';

const rerenderEntireTree = (state: StateType) => {
    ReactDOM.render(
        <App
            state={state}
            addDialogMessage={addDialogMessage}
            addPostMessage={addPostMessage}
            updatePostTextareaValue={updatePostTextareaValue}
            errorHandler={errorHandler}
        />,
        document.getElementById('root')
    );
};

subscriber(rerenderEntireTree);

rerenderEntireTree(state);
