import { useState } from 'react';
import { createRef } from 'react';
import Post from './Post';
import { PostType } from './type';

import styles from './Posts.module.css';
import UiTextarea from '../../../components/UiTextarea';

type PostsPropsType = {
    postTextareaValue: string;
    errorValue: boolean;
    posts: Array<PostType>;
    addPostMessage: () => void;
    updatePostTextareaValue: (newText: string) => void;
    errorHandler: (errorValue: boolean) => void;
};

function Posts({
    posts,
    errorValue,
    addPostMessage,
    postTextareaValue,
    updatePostTextareaValue,
    errorHandler,
}: PostsPropsType) {
    // стейт для поля ввода и ошибки
    // const [textareaValue, setTextareaValue] = useState<string>('');
    // const [error, setError] = useState<boolean>(false);
    const textareaRef = createRef<any>();

    // обработчик для поля ввода
    // const textareaChangeHandler = (value: string) => {
    //     setTextareaValue(value);
    //     setError(false);
    // };
    const textareaChangeHandler = () => {
        updatePostTextareaValue(textareaRef.current.value);
        errorHandler(false);
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
        if (textareaRef.current.value.trim()) {
            addPostMessage();
        } else {
            errorHandler(true);
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
