import Posts from './Posts';
import ProfileInfo from './ProfileInfo';

import styles from './Profile.module.css';

function Profile() {
    return (
        <>
            <ProfileInfo />
            <Posts />
        </>
    );
}

export default Profile;
