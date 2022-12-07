import Posts from './Posts';
import ProfileInfo from './ProfileInfo';
import { ProfilePageType } from '../../redux/type';

import styles from './Profile.module.css';

type ProfilePropsType = {
    profilePage: ProfilePageType;
    addPostMessage: () => void;
    updatePostTextareaValue: (newText: string) => void;
    errorHandler: (errorValue: boolean) => void;
};

function Profile({
    profilePage,
    addPostMessage,
    updatePostTextareaValue,
    errorHandler,
}: ProfilePropsType) {
    return (
        <>
            <ProfileInfo />
            <Posts
                posts={profilePage.posts}
                postTextareaValue={profilePage.postTextareaValue}
                errorValue={profilePage.error}
                addPostMessage={addPostMessage}
                updatePostTextareaValue={updatePostTextareaValue}
                errorHandler={errorHandler}
            />
        </>
    );
}

export default Profile;
