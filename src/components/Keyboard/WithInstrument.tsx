import {useAudioContext} from '../AudioContextProvider/useAudioContext';
import {useInstrument} from '../../state/Instrument/Context';
import {SoundfontProvider} from '../../adapters/Soundfont';
import {Keyboard} from './Keyboard';

/*export const KeyboardWithInstrument = () => {
    const AudioContext = useAudioContext()!
    const {instrument} = useInstrument()
    const {loading, current, play, stop, load} = useSoundfont({AudioContext})

    useEffect(() => {
        if (!loading && instrument !== current) load(instrument)
    }, [load, loading, current, instrument])

    console.log(instrument)
    return <Keyboard loading={loading} play={play} stop={stop}/>
};*/

//todo fix rerender

//using renderProps
export const KeyboardWithInstrument = () => {
    const AudioContext = useAudioContext()!
    const {instrument} = useInstrument()

    return <SoundfontProvider
        AudioContext={AudioContext}
        instrument={instrument}
        render={(props) => <Keyboard {...props}/>}
    />
};