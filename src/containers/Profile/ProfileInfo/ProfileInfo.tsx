import headerImg from '../../../img/header.jpg';

import styles from './ProfileInfo.module.css';

function ProfileInfo() {
    return (
        <>
            <img className={styles.main__img} src={headerImg} alt='главная' />
            <div className={styles.main__block}>профиль и описание</div>
        </>
    );
}

export default ProfileInfo;
