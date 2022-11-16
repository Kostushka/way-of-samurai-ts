import { NavLink } from 'react-router-dom';
import styles from './Dialogs.module.css';

function Dialogs() {
    return (
        <div className={styles.container}>
            <div className={styles.dialogs}>
                <h1 className={styles.header}>Диалоги</h1>
                <ul>
                    <li>
                        <NavLink to={'/dialogs/1'}>Андрей</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/dialogs/2'}>Дмитрий</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/dialogs/3'}>Алексей</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/dialogs/4'}>Тамара</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/dialogs/5'}>Евгения</NavLink>
                    </li>
                </ul>
            </div>
            <div className={styles.messages}>
                <h1 className={styles.header}>Сообщения</h1>
                <ul>
                    <li>Андрей, привет! Как дела? Как жизнь?</li>
                    <li>Дмитрий, алоха!</li>
                    <li>Алексей, хай!</li>
                    <li>Тамара, бонжур!</li>
                    <li>Евгения, ола!</li>
                </ul>
            </div>
        </div>
    );
}

export default Dialogs;
