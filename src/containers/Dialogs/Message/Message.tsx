import { MessagesType } from '../type';
import styles from './Message.module.css';

type MessagePropsType = {
    messages: Array<MessagesType>;
};

function Message({ messages }: MessagePropsType) {
    const messagesList = messages.map((message) => (
        <li key={message.id}>{message.message}</li>
    ));

    return <ul className={styles.message}>{messagesList}</ul>;
}

export default Message;
