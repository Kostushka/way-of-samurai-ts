import avatarImg from '../../../../img/avatar.jpg';
import { PostType } from '../type';

import styles from './Post.module.css';

type PostPropsType = {
    posts: Array<PostType>;
};

function Post({ posts }: PostPropsType) {
    const postsList = posts.map((post) => (
        <div key={post.id} className={styles.container}>
            <img className={styles.avatar} src={avatarImg} alt='аватар' />
            <div className={styles.post__wrapper}>
                <span className={styles.message}>{post.message}</span>
                <span>❤ {post.likeCounts}</span>
            </div>
        </div>
    ));

    return <>{postsList}</>;
}

export default Post;
