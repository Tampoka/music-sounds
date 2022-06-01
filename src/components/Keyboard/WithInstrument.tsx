import {useAudioContext} from '../AudioContextProvider/useAudioContext';
import {useSoundfont} from '../../adapters/Soundfont/useSoundFont';
import {Keyboard} from './Keyboard';
import {useMount} from '../../utils/useMount';

export const KeyboardWithInstrument = () => {
    const AudioContext=useAudioContext()!
    const {loading, play,stop,load}=useSoundfont({AudioContext})

    useMount(load)

    return <Keyboard loading={loading} play={play} stop={stop} />
};

