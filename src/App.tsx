import logo from './img/logo.png';
import headerImg from './img/header.jpg';
import avatarImg from './img/avatar.jpg';
import styles from './App.module.css';

function App() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <img src={logo} alt='лого' />
            </header>
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
            <main className={styles.main}>
                <img src={headerImg} alt='главная' />
                <div className={styles.main__block}>
                    <img src={avatarImg} alt='аватар' />
                    профиль и описание
                    <div>Мои посты</div>
                    <div>Новый пост</div>
                    <div>Пост 1</div>
                    <div>Пост 2</div>
                </div>
            </main>
            <footer className={styles.footer}>Здесь пока ничего нет</footer>
        </div>
    );
}

export default App;
