import headerImg from '../../img/header.jpg';
import avatarImg from '../../img/avatar.jpg';

import styles from './Profile.module.css';

function Profile() {
    return (
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
    );
}

export default Profile;
