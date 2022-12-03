import { useState } from 'react';
import { createRef } from 'react';
import Post from './Post';
import { PostType } from './type';

import styles from './Posts.module.css';
import UiTextarea from '../../../components/UiTextarea';

type PostsPropsType = {
    posts: Array<PostType>;
    addPostMessage: (message: string) => void;
};

function Posts({ posts, addPostMessage }: PostsPropsType) {
    // стейт для поля ввода и ошибки
    const [textareaValue, setTextareaValue] = useState<string>('');
    const [error, setError] = useState<boolean>(false);
    // const textareaRef = createRef<any>();

    // обработчик для поля ввода
    const textareaChangeHandler = (value: string) => {
        setTextareaValue(value);
        setError(false);
    };
    // обработчик для отправки поста по нажатию кнпоки
    const addPostHandler = () => {
        // addPostMessage(textareaRef.current.value);
        // textareaRef.current.value = '';
        if (textareaValue.trim()) {
            addPostMessage(textareaValue.trim());
            setTextareaValue('');
        } else {
            setError(true);
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
                    placeholder='Здесь будет текст вашего поста'
                    value={textareaValue}
                    onChange={textareaChangeHandler}
                    onKeyPress={addOnEnterPostHandler}
                    errorMessage={error}
                />

                <button
                    className={styles.btn}
                    onClick={addPostHandler}
                    disabled={error}
                >
                    Добавить пост
                </button>
            </div>
            <Post posts={posts} />
        </div>
    );
}

export default Posts;
