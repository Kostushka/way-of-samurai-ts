import { PostType } from './type';
import Post from './Post';

import styles from './Posts.module.css';

function Posts() {
    const posts: Array<PostType> = [
        { id: 1, message: 'Hello my dear friends!', likeCounts: 2 },
        { id: 2, message: 'Hi!', likeCounts: 6 },
        { id: 3, message: 'Hey!', likeCounts: 0 },
        { id: 4, message: 'Hey!', likeCounts: 8 },
        { id: 5, message: 'Hey!', likeCounts: 10 },
    ];
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div>Мои посты</div>
                <textarea />
                <button className={styles.btn}>Добавить пост</button>
            </div>
            <Post posts={posts} />
        </div>
    );
}

export default Posts;
