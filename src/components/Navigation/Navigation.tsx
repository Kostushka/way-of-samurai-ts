import styles from './Navigation.module.css';

function Navigation() {
    return (
        <nav className={styles.nav}>
            <ul>
                <li>
                    <a href='#'>Профиль</a>
                </li>
                <li>
                    <a href='#'>Сообщение</a>
                </li>
                <li>
                    <a href='#'>Новости</a>
                </li>
                <li>
                    <a href='#'>Музыка</a>
                </li>
                <li>
                    <a href='#'>Настройки</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;
