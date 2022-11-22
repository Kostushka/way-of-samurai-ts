import avatarImg from '../../../../img/avatar.jpg';

import styles from './Post.module.css';

type PostPropsType = {
    id: number;
    message: string;
    likeCounts: number;
};

function Post({ message, likeCounts }: PostPropsType) {
    return (
        <div className={styles.container}>
            <img className={styles.avatar} src={avatarImg} alt='аватар' />
            <div className={styles.post__wrapper}>
                <span className={styles.message}>{message}</span>
                <span>❤ {likeCounts}</span>
            </div>
        </div>
    );
}

export default Post;
