import Posts from './Posts';
import ProfileInfo from './ProfileInfo';
import { ProfilePageType } from '../../type';

import styles from './Profile.module.css';

type ProfilePropsType = {
    profilePage: ProfilePageType;
};

function Profile({ profilePage }: ProfilePropsType) {
    return (
        <>
            <ProfileInfo />
            <Posts posts={profilePage.posts} />
        </>
    );
}

export default Profile;
