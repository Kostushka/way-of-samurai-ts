import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {
    addDialogMessage,
    addPostMessage,
    errorHandler,
    updatePostTextareaValue,
} from './redux/state';
import { StateType } from './redux/type';

export const rerenderEntireTree = (state: StateType) => {
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
