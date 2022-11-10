import Post from './Post';

function Posts() {
    return (
        <>
            <div>Мои посты</div>
            <div>Новый пост</div>
            <textarea />
            <Post message={'Hello my dear friends!'} likeCounts={2} />
            <Post message={'Hi!'} likeCounts={6} />
            <Post message={'Hey!'} likeCounts={0} />
        </>
    );
}

export default Posts;
