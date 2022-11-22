import Dialog from './Dialog';
import Message from './Message';
import { DialogsType, MessagesType } from './type';

import styles from './Dialogs.module.css';

function Dialogs() {
    const dialogs: Array<DialogsType> = [
        { id: 1, name: 'Андрей' },
        { id: 2, name: 'Дмитрий' },
        { id: 3, name: 'Алексей' },
        { id: 4, name: 'Тамара' },
        { id: 5, name: 'Евгения' },
    ];
    const messages: Array<MessagesType> = [
        { id: 1, message: 'Андрей, привет! Как дела? Как жизнь?' },
        { id: 2, message: 'Дмитрий, алоха!' },
        { id: 3, message: 'Алексей, хай!' },
        { id: 4, message: 'Тамара, бонжур!' },
        { id: 5, message: 'Евгения, ола!' },
    ];
    return (
        <div className={styles.container}>
            <div className={styles.dialogs}>
                <h1 className={styles.header}>Диалоги</h1>
                <Dialog dialogs={dialogs} />
            </div>
            <div className={styles.messages}>
                <h1 className={styles.header}>Сообщения</h1>
                <Message messages={messages} />
            </div>
        </div>
    );
}

export default Dialogs;
