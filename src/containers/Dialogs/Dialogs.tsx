import Dialog from './Dialog';
import Message from './Message';
import { DialogsPageType } from '../../redux/type';

import styles from './Dialogs.module.css';

type DialogsPropsType = {
    dialogsPage: DialogsPageType;
    addDialogMessage: (message: string) => void;
};

function Dialogs({ dialogsPage, addDialogMessage }: DialogsPropsType) {
    return (
        <div className={styles.container}>
            <div className={styles.dialogs}>
                <h1 className={styles.header}>Диалоги</h1>
                <Dialog dialogs={dialogsPage.dialogNames} />
            </div>
            <div className={styles.messages}>
                <h1 className={styles.header}>Сообщения</h1>
                <Message
                    messages={dialogsPage.dialogMessages}
                    addDialogMessage={addDialogMessage}
                />
            </div>
        </div>
    );
}

export default Dialogs;
