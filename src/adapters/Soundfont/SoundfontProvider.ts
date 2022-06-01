import {InstrumentName} from 'soundfont-player';
import {ReactElement} from 'react';
import {MidiValue} from '../../domain/note';

type ProvidedProps = {
    loading: boolean
    play(note: MidiValue): Promise<void>
    stop(note: MidiValue): Promise<void>
}

type ProviderProps = {
    instrument?: InstrumentName
    AudioContext: AudioContextType
    render(props: ProvidedProps): ReactElement
}