import {useAudioContext} from '../AudioContextProvider/useAudioContext';
import {NoAudioMessage} from '../NoAudioMessage';
import {Keyboard} from '../Keyboard';

export  const Main = () => {
    const AudioContext=useAudioContext()
    return !!AudioContext?<Keyboard/>:<NoAudioMessage/>
};

