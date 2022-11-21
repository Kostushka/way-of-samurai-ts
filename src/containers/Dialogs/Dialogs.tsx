import Dialog from './Dialog';
import Message from './Message';

import styles from './Dialogs.module.css';

function Dialogs() {
    return (
        <div className={styles.container}>
            <div className={styles.dialogs}>
                <h1 className={styles.header}>Диалоги</h1>
                <Dialog name={'Андрей'} id={1} />
                <Dialog name={'Дмитрий'} id={2} />
                <Dialog name={'Алексей'} id={3} />
                <Dialog name={'Тамара'} id={4} />
                <Dialog name={'Евгения'} id={5} />
            </div>
            <div className={styles.messages}>
                <h1 className={styles.header}>Сообщения</h1>
                <Message message={'Андрей, привет! Как дела? Как жизнь?'} />
                <Message message={'Дмитрий, алоха!'} />
                <Message message={'Алексей, хай!'} />
                <Message message={'Тамара, бонжур!'} />
                <Message message={'Евгения, ола!'} />
            </div>
        </div>
    );
}

export default Dialogs;
