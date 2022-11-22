import styles from './Message.module.css';

type MessageType = {
    id: number;
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
