import styles from 'Keyboard.module.css'
import {notes} from '../../domain/note';
import {selectKey} from '../../domain/keyboard';
import {Key} from '../Key';

export const Keyboard = () => {
    return (
        <div className={styles.keyboard}>
            {notes.map(({midi,type,index,octave})=>{
                const label=selectKey(octave,index)
                return <Key key={midi} type={type} label={label}/>
            })}
        </div>
    );
};

