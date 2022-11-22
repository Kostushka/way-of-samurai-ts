import Post from './Post';
import styles from './Posts.module.css';

type PostsType = {
    id: number;
    message: string;
    likeCounts: number;
};

function Posts() {
    const posts: Array<PostsType> = [
        { id: 1, message: 'Hello my dear friends!', likeCounts: 2 },
        { id: 2, message: 'Hi!', likeCounts: 6 },
        { id: 3, message: 'Hey!', likeCounts: 0 },
    ];
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div>Мои посты</div>
                <textarea />
                <button className={styles.btn}>Добавить пост</button>
            </div>

            <Post
                id={posts[0].id}
                message={posts[0].message}
                likeCounts={posts[0].likeCounts}
            />
            <Post
                id={posts[1].id}
                message={posts[1].message}
                likeCounts={posts[1].likeCounts}
            />
        </div>
    );
}

export default Posts;
