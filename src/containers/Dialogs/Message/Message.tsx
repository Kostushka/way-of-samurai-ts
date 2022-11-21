import styles from './Message.module.css';

type MessageType = {
    message: string;
};

function Message({ message }: MessageType) {
    return (
        <ul className={styles.message}>
            <li>{message}</li>
        </ul>
    );
}

export default Message;
