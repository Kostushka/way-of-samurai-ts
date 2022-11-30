import { createRef } from 'react';
import { MessagesType } from '../type';
import styles from './Message.module.css';

type MessagePropsType = {
    messages: Array<MessagesType>;
};

function Message({ messages }: MessagePropsType) {
    const textareaRef = createRef<any>();

    const messagesList = messages.map((message) => (
        <p className={styles.message} key={message.id}>
            {message.message}
        </p>
    ));

    return (
        <>
            <div className={styles.container}>{messagesList}</div>
            <div className={styles.textarea}>
                <textarea ref={textareaRef} />
                <button onClick={() => console.log(textareaRef.current.value)}>
                    Добавить сообщение
                </button>
            </div>
        </>
    );
}

export default Message;
