import NoteContext from './noteContext'
import { useState } from 'react'

const NoteState = (props) => {

    const s1 = {
        "name":"Parag",
        "class":"5b"
    }

    const [state, setState] = useState(s1)
    const update = () => {
        setTimeout(() => {
            setState({
                "name":"Parag Coimbatore",
                "class":"First Class"
            })
        }, 1000);
    }

    return (
    <NoteContext.Provider value={{state:state, update:update}}>
        {props.children};
    </NoteContext.Provider>)
}

export default NoteState;