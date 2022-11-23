import { MessagesType } from '../type';
import styles from './Message.module.css';

type MessagePropsType = {
    messages: Array<MessagesType>;
};

function Message({ messages }: MessagePropsType) {
    const messagesList = messages.map((message) => (
        <p className={styles.message} key={message.id}>
            {message.message}
        </p>
    ));

    return <div className={styles.container}>{messagesList}</div>;
}

export default Message;
