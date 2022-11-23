import Dialog from './Dialog';
import Message from './Message';
import { DialogsPageType } from '../../type';

import styles from './Dialogs.module.css';

type DialogsPropsType = {
    dialogsPage: DialogsPageType;
};

function Dialogs({ dialogsPage }: DialogsPropsType) {
    return (
        <div className={styles.container}>
            <div className={styles.dialogs}>
                <h1 className={styles.header}>Диалоги</h1>
                <Dialog dialogs={dialogsPage.dialogNames} />
            </div>
            <div className={styles.messages}>
                <h1 className={styles.header}>Сообщения</h1>
                <Message messages={dialogsPage.dialogMessages} />
            </div>
        </div>
    );
}

export default Dialogs;
