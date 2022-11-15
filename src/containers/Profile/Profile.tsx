import headerImg from '../../img/header.jpg';
import Posts from './Posts';

import styles from './Profile.module.css';

function Profile() {
    return (
        <>
            <img className={styles.main__img} src={headerImg} alt='главная' />
            <div className={styles.main__block}>
                профиль и описание
                <Posts />
            </div>
        </>
    );
}

export default Profile;
