import Posts from './Posts';
import ProfileInfo from './ProfileInfo';
import { ActionType, ProfilePageType } from '../../redux/type';

import styles from './Profile.module.css';

type ProfilePropsType = {
    profilePage: ProfilePageType;
    dispatch: (action: ActionType) => void;
    // addPostMessage: () => void;
    // updatePostTextareaValue: (newText: string) => void;
    // errorHandler: (errorValue: boolean) => void;
};

function Profile({ profilePage, dispatch }: ProfilePropsType) {
    return (
        <>
            <ProfileInfo />
            <Posts
                posts={profilePage.posts}
                postTextareaValue={profilePage.postTextareaValue}
                errorValue={profilePage.error}
                dispatch={dispatch}
                // addPostMessage={addPostMessage}
                // updatePostTextareaValue={updatePostTextareaValue}
                // errorHandler={errorHandler}
            />
        </>
    );
}

export default Profile;
