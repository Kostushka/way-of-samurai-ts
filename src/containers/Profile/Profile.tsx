import Posts from './Posts';
import ProfileInfo from './ProfileInfo';
import { ProfilePageType } from '../../redux/type';

import styles from './Profile.module.css';

type ProfilePropsType = {
    profilePage: ProfilePageType;
    addPostMessage: (message: string) => void;
};

function Profile({ profilePage, addPostMessage }: ProfilePropsType) {
    return (
        <>
            <ProfileInfo />
            <Posts posts={profilePage.posts} addPostMessage={addPostMessage} />
        </>
    );
}

export default Profile;
