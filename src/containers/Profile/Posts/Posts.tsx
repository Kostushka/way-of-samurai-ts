import Post from './Post';
import styles from './Posts.module.css';

function Posts() {
    return (
        <div>
            <div className={styles.container}>
                <div>Мои посты</div>
                <textarea />
                <button className={styles.btn}>Добавить пост</button>
            </div>

            <Post message={'Hello my dear friends!'} likeCounts={2} />
            <Post message={'Hi!'} likeCounts={6} />
            <Post message={'Hey!'} likeCounts={0} />
        </div>
    );
}

export default Posts;
