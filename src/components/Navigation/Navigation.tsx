import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

function Navigation() {
    return (
        <nav className={styles.nav}>
            <ul className={styles.nav__list}>
                <li>
                    <NavLink to={'/profile'}>Профиль</NavLink>
                </li>
                <li>
                    <NavLink to={'/dialogs'}>Сообщения</NavLink>
                </li>
                <li>
                    <NavLink to={'/news'} href='#'>
                        Новости
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/music'}>Музыка</NavLink>
                </li>
                <li>
                    <NavLink to={'/settings'}>Настройки</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;
