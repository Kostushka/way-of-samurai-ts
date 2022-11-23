import Post from './Post';
import { PostType } from './type';

import styles from './Posts.module.css';

type PostsPropsType = {
    posts: Array<PostType>;
};

function Posts({ posts }: PostsPropsType) {
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
