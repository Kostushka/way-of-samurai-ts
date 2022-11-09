import logo from '../../img/logo.png';

import styles from './Header.module.css';

function Header() {
    return (
        <header className={styles.header}>
            <img src={logo} alt='лого' />
        </header>
    );
}

export default Header;
