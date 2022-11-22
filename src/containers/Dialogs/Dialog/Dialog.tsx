import { NavLink } from 'react-router-dom';
import { DialogsType } from '../type';
import styles from './Dialog.module.css';

type DialogPropsType = {
    dialogs: Array<DialogsType>;
};

function Dialog({ dialogs }: DialogPropsType) {
    const dialogsList = dialogs.map((dialog) => (
        <li key={dialog.id}>
            <NavLink to={`/dialogs/${dialog.id}`}>{dialog.name}</NavLink>
        </li>
    ));

    return <ul className={styles.dialog}>{dialogsList}</ul>;
}

export default Dialog;
