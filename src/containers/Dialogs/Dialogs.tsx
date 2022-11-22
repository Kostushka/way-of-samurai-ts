import Dialog from './Dialog';
import Message from './Message';

import styles from './Dialogs.module.css';

type DialogsType = {
    id: number;
    name: string;
};
type MessagesType = {
    id: number;
    messages: string;
};

function Dialogs() {
    const dialogs: Array<DialogsType> = [
        { id: 1, name: 'Андрей' },
        { id: 2, name: 'Дмитрий' },
        { id: 3, name: 'Алексей' },
        { id: 4, name: 'Тамара' },
        { id: 5, name: 'Евгения' },
    ];
    const messages: Array<MessagesType> = [
        { id: 1, messages: 'Андрей, привет! Как дела? Как жизнь?' },
        { id: 2, messages: 'Дмитрий, алоха!' },
        { id: 3, messages: 'Алексей, хай!' },
        { id: 4, messages: 'Тамара, бонжур!' },
        { id: 5, messages: 'Евгения, ола!' },
    ];
    return (
        <div className={styles.container}>
            <div className={styles.dialogs}>
                <h1 className={styles.header}>Диалоги</h1>
                <Dialog name={dialogs[0].name} id={dialogs[0].id} />
                <Dialog name={dialogs[1].name} id={dialogs[1].id} />
            </div>
            <div className={styles.messages}>
                <h1 className={styles.header}>Сообщения</h1>
                <Message id={messages[0].id} message={messages[0].messages} />
                <Message id={messages[1].id} message={messages[1].messages} />
            </div>
        </div>
    );
}

export default Dialogs;
