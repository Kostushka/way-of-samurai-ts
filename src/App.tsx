import { BrowserRouter } from 'react-router-dom';
import AppRouter from './components/AppRouter/AppRouter';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

import styles from './App.module.css';

function App() {
    return (
        <BrowserRouter basename='/way-of-samurai-ts/'>
            <div className={styles.container}>
                <Header />
                <Navigation />
                <main className={styles.main}>
                    <AppRouter />
                </main>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
