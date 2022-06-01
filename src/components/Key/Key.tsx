import styles from './Key.module.css';
import {NoteType} from '../../domain/note';
import {FC} from 'react';
import clsx from 'clsx';
import {usePressObserver} from '../PressObserver';

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
    const pressed = usePressObserver({
        watchKey: label,
        onStartPress: onDown,
        onFinishPress: onUp
    })
    return (
        <button
            className={clsx(styles.key, styles[type],
                pressed && "is-pressed")}
            onMouseDown={onDown}
            onMouseUp={onUp}
            type="button"
            {...rest}>
            {label}
        </button>
    );
};

