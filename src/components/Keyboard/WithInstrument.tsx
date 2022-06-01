import {useAudioContext} from '../AudioContextProvider/useAudioContext';
import {useSoundfont} from '../../adapters/Soundfont/useSoundFont';
import {Keyboard} from './Keyboard';
import {useInstrument} from '../../state/Instrument/Context';
import {useEffect} from 'react';

export const KeyboardWithInstrument = () => {
    const AudioContext = useAudioContext()!
    const {instrument} = useInstrument()
    const {loading, current, play, stop, load} = useSoundfont({AudioContext})

    useEffect(() => {
        if (!loading && instrument !== current) load(instrument)
    }, [load, loading, current, instrument])

    console.log(instrument)
    return <Keyboard loading={loading} play={play} stop={stop}/>
};

//todo fix rerender