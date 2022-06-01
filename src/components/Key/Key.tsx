import styles from './Key.module.css';
import {NoteType} from '../../domain/note';
import {FC} from 'react';
import clsx from 'clsx';

type PressCallback = () => void
type KeyProps = {
    type: NoteType
    label: string
    disabled?: boolean
    onUp: PressCallback
    onDown: PressCallback
}
export const Key: FC<KeyProps> = (props) => {
    const {type, label, onUp, onDown, ...rest} = props
    return (
        <button
            className={clsx(styles.key, styles[type])}
            onMouseDown={onDown}
            onMouseUp={onUp}
            type="button"
            {...rest}>
            {label}
        </button>
    );
};

