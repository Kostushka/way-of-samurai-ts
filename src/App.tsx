import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter/AppRouter';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { ActionType, StateType } from './redux/type';
import styles from './App.module.css';

type AppPropsType = {
    state: StateType;
    dispatch: (action: ActionType) => void;
    // addDialogMessage: (message: string) => void;
    // addPostMessage: () => void;
    // updatePostTextareaValue: (newText: string) => void;
    // errorHandler: (errorValue: boolean) => void;
};

function App({ state, dispatch }: AppPropsType) {
    return (
        <BrowserRouter basename='/way-of-samurai-ts/'>
            <div className={styles.container}>
                <Header />
                <Navigation friendsBlock={state.friendsBlock} />
                <main className={styles.main}>
                    <AppRouter
                        state={state}
                        dispatch={dispatch}
                        // addDialogMessage={addDialogMessage}
                        // addPostMessage={addPostMessage}
                        // updatePostTextareaValue={updatePostTextareaValue}
                        // errorHandler={errorHandler}
                    />
                </main>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
