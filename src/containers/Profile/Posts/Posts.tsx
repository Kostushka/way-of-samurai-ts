import { useState } from 'react';
import { createRef } from 'react';
import Post from './Post';
import { PostType } from './type';

import styles from './Posts.module.css';
import UiTextarea from '../../../components/UiTextarea';
import { ActionType } from '../../../redux/type';

type PostsPropsType = {
    postTextareaValue: string;
    errorValue: boolean;
    posts: Array<PostType>;
    dispatch: (action: ActionType) => void;
    // addPostMessage: () => void;
    // updatePostTextareaValue: (newText: string) => void;
    // errorHandler: (errorValue: boolean) => void;
};

function Posts({
    posts,
    errorValue,
    postTextareaValue,
    dispatch,
}: PostsPropsType) {
    // стейт для поля ввода и ошибки
    // const [textareaValue, setTextareaValue] = useState<string>('');
    // const [error, setError] = useState<boolean>(false);
    const textareaRef = createRef<HTMLTextAreaElement>();

    // обработчик для поля ввода
    // const textareaChangeHandler = (value: string) => {
    //     setTextareaValue(value);
    //     setError(false);
    // };
    const textareaChangeHandler = () => {
        if (textareaRef.current) {
            // updatePostTextareaValue(textareaRef.current.value);
            dispatch({
                type: 'UPDATE_POST',
                newText: textareaRef.current.value,
            });
        }
        // errorHandler(false);
        dispatch({ type: 'ERROR_HANDLER', errorValue: false });
    };
    // обработчик для отправки поста по нажатию кнпоки
    // const addPostHandler = () => {
    //     if (textareaValue.trim()) {
    //         addPostMessage(textareaValue.trim());
    //     } else {
    //         setError(true);
    //     }
    //     setTextareaValue('');
    // };
    const addPostHandler = () => {
        // addPostMessage(textareaRef.current.value);
        // textareaRef.current.value = '';

        if (textareaRef.current?.value.trim()) {
            // addPostMessage();
            dispatch({ type: 'ADD_POST' });
        } else {
            // errorHandler(true);
            dispatch({ type: 'ERROR_HANDLER', errorValue: true });
        }
    };
    // обработчик для отправки поста по нажатию на enter
    const addOnEnterPostHandler = (
        e: React.KeyboardEvent<HTMLTextAreaElement>
    ) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            addPostHandler();
        }
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div>Мои посты</div>
                {/* <textarea ref={textareaRef} /> */}
                <UiTextarea
                    refValue={textareaRef}
                    placeholder='Здесь будет текст вашего поста'
                    // value={textareaValue}
                    value={postTextareaValue}
                    onChange={textareaChangeHandler}
                    onKeyPress={addOnEnterPostHandler}
                    // errorMessage={error}
                    errorMessage={errorValue}
                />

                <button
                    className={styles.btn}
                    onClick={addPostHandler}
                    // disabled={error}
                    disabled={errorValue}
                >
                    Добавить пост
                </button>
            </div>
            <Post posts={posts} />
        </div>
    );
}

export default Posts;
