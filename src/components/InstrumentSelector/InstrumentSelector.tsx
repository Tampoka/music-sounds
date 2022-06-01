import {useInstrument} from '../../state/Instrument/Context';
import {ChangeEvent} from 'react';
import {InstrumentName} from 'soundfont-player';
import styles from './InstrumentSelector.module.css'
import {options} from './options';

export const InstrumentSelector = () => {
    const {instrument, setInstrument} = useInstrument()
    const updateValue = ({target}: ChangeEvent<HTMLSelectElement>) => {
        setInstrument(target.value as InstrumentName)
    }
    return (
        <select
            className={styles.instruments}
            onChange={updateValue}
            value={instrument}
        >
            {options.map(({label, value}) => (
                <option key={value} value={value}>
                    {label}
                </option>
            ))}
        </select>
    );
};

