import { useState, useContext, createContext } from 'react'

const EventContext = createContext(false)
const EventChangeContext = createContext(() => {})

export const useEvent = () => {
    return useContext(EventContext)
}
export const useEventChange = () => {
    return useContext(EventChangeContext)
}

interface iEvent {
    children: React.ReactNode
}

export function CoolContext(props: iEvent){
    const [event, setEvent] = useState(false)

    const onEvent = () => {
        setEvent((prev) => !prev)
    }

    return(
        <EventContext.Provider value={event}>
            <EventChangeContext.Provider value={onEvent}>
                {props.children}
            </EventChangeContext.Provider>
        </EventContext.Provider>
    )
}

