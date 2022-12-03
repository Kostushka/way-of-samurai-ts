import styles from './UiTextarea.module.css';

type UiTextareaType = {
    placeholder: string;
    value: string;
    onChange: (value: string) => void;
    onKeyPress: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
    errorMessage: boolean;
};

function UiTextarea({
    onChange,
    onKeyPress,
    errorMessage,
    ...props
}: UiTextareaType) {
    return (
        <div className={styles.container}>
            <textarea
                className={styles.textarea}
                onChange={(e) => onChange(e.currentTarget.value)}
                onKeyPress={(e) => onKeyPress(e)}
                {...props}
            />
            {errorMessage && <div className={styles.error}>Введите текст</div>}
        </div>
    );
}

export default UiTextarea;
