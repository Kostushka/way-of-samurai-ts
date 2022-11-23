import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter/AppRouter';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { StateType } from './type';

import styles from './App.module.css';

type AppPropsType = {
    state: StateType;
};

function App({ state }: AppPropsType) {
    return (
        <BrowserRouter basename='/way-of-samurai-ts/'>
            <div className={styles.container}>
                <Header />
                <Navigation friendsBlock={state.friendsBlock} />
                <main className={styles.main}>
                    <AppRouter state={state} />
                </main>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
