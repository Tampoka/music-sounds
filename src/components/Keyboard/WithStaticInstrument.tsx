import {Keyboard} from './Keyboard';
import {withInstrumentStatic} from '../../adapters/Soundfont/withInstrumentStatic';
import {useAudioContext} from '../AudioContextProvider/useAudioContext';

const withGuitar = withInstrumentStatic("acoustic_guitar_steel")
const withPiano = withInstrumentStatic("acoustic_grand_piano")
const WrappedKeyboard = withPiano(Keyboard)

export const KeyboardWithInstrument = () => {
    const AudioContext = useAudioContext()!
    return <WrappedKeyboard AudioContext={AudioContext} />
}