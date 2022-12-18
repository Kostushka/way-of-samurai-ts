import { DialogsType, MessagesType } from '../containers/Dialogs/type';
import { FriendsType } from '../containers/Friends/type';
import { PostType } from '../containers/Profile/Posts/type';

export type DialogsPageType = {
    dialogNames: Array<DialogsType>;
    dialogMessages: Array<MessagesType>;
};

export type ProfilePageType = {
    posts: Array<PostType>;
    postTextareaValue: string;
    error: boolean;
};

export type FriendsBlockType = {
    friends: Array<FriendsType>;
};

export type StateType = {
    dialogsPage: DialogsPageType;
    profilePage: ProfilePageType;
    friendsBlock: FriendsBlockType;
};

export type ActionType = {
    type: string;
    message?: string;
    newText?: string;
    errorValue?: boolean;
};

export type StoreType = {
    _rerenderEntireTree: () => void;
    subscriber: (observer: () => void) => void;
    _state: StateType;
    getState: () => StateType;
    dispatch: (action: ActionType) => void;
    // addDialogMessage: (message: string) => void;
    // addPostMessage: () => void;
    // updatePostTextareaValue: (newText: string) => void;
    // errorHandler: (errorValue: boolean) => void;
};
