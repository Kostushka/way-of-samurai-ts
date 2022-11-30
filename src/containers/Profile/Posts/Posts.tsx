import { createRef } from 'react';
import Post from './Post';
import { PostType } from './type';

import styles from './Posts.module.css';

type PostsPropsType = {
    posts: Array<PostType>;
};

function Posts({ posts }: PostsPropsType) {
    const textareaRef = createRef<any>();
    const addPostHandler = () => {
        console.log(textareaRef.current.value);
    };
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div>Мои посты</div>
                <textarea ref={textareaRef} />
                <button className={styles.btn} onClick={addPostHandler}>
                    Добавить пост
                </button>
            </div>
            <Post posts={posts} />
        </div>
    );
}

export default Posts;
