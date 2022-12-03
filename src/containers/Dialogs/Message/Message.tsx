import { createRef } from 'react';
import { useState } from 'react';
import UiTextarea from '../../../components/UiTextarea';
import { MessagesType } from '../type';
import styles from './Message.module.css';

type MessagePropsType = {
    messages: Array<MessagesType>;
    addDialogMessage: (message: string) => void;
};

function Message({ messages, addDialogMessage }: MessagePropsType) {
    // стейт для поля ввода и ошибки
    const [textareaValue, setTextareaValue] = useState<string>('');
    const [error, setError] = useState<boolean>(false);

    // на изменение поля ввода
    const valueChangeHandler = (value: string) => {
        setTextareaValue(value);
        setError(false);
    };
    // на добавление сообщения
    const addMessageHandler = () => {
        if (textareaValue.trim()) {
            addDialogMessage(textareaValue.trim());
            setTextareaValue('');
        } else {
            setError(true);
        }
    };
    // на добавление сообщения по enter или перенос строки на shift enter
    const addOnEnterMessageHandler = (
        e: React.KeyboardEvent<HTMLTextAreaElement>
    ) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            addMessageHandler();
        }
    };

    const messagesList = messages.map((message) => (
        <p className={styles.message} key={message.id}>
            {message.message}
        </p>
    ));

    return (
        <>
            <div className={styles.container}>{messagesList}</div>
            <div className={styles.textarea}>
                <UiTextarea
                    value={textareaValue}
                    placeholder='Введите сообщение'
                    errorMessage={error}
                    onChange={valueChangeHandler}
                    onKeyPress={addOnEnterMessageHandler}
                />
                <button onClick={addMessageHandler} disabled={error}>
                    Добавить сообщение
                </button>
            </div>
        </>
    );
}

export default Message;
