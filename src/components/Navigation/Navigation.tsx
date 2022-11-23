import { NavLink } from 'react-router-dom';
import Friends from '../../containers/Friends';
import { FriendsBlockType } from '../../type';
import styles from './Navigation.module.css';

type NavigationPropsType = {
    friendsBlock: FriendsBlockType;
};

function Navigation({ friendsBlock }: NavigationPropsType) {
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
            <Friends friends={friendsBlock.friends} />
        </nav>
    );
}

export default Navigation;
