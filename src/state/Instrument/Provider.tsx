import {DEFAULT_INSTRUMENT} from '../../domain/sounds';
import {FC, ReactNode, useState} from 'react';
import {InstrumentContext} from './Context';


type Children = {
    children: ReactNode
}
export const InstrumentContextProvider: FC<Children> = ({
                                                            children
                                                        }) => {
    const [instrument, setInstrument] = useState(DEFAULT_INSTRUMENT)

    return (
        <InstrumentContext.Provider value={{instrument, setInstrument}}>
            {children}
        </InstrumentContext.Provider>
    )
}