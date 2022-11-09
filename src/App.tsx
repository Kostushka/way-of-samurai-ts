import Header from './components/Header';
import Navigation from './components/Navigation';
import Profile from './containers/Profile';
import Footer from './components/Footer';

import styles from './App.module.css';

function App() {
    return (
        <div className={styles.container}>
            <Header />
            <Navigation />
            <Profile />
            <Footer />
        </div>
    );
}

export default App;
