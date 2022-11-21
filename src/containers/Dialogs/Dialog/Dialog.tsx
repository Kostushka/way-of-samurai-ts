import { NavLink } from 'react-router-dom';
import styles from './Dialog.module.css';

type DialogType = {
    name: string;
    id: number;
};

function Dialog({ name, id }: DialogType) {
    return (
        <ul className={styles.dialog}>
            <li>
                <NavLink to={`/dialogs/${id}`}>{name}</NavLink>
            </li>
        </ul>
    );
}

export default Dialog;
