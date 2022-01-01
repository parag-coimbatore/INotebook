import React , {useContext} from 'react'
import noteContext from "../context/notes/noteContext"
import NoteItem from './NoteItem';


const Notes = () => {
    const context = useContext(noteContext);
    const {notes, setNotes} = context; //destructuring to remove notes from body
    return (
        <div className="row my-3">
            <h2 className='text-center my-4'>Your notes</h2>
            {notes.map((note) => {  //Getting our notes here
                return <NoteItem note={note}/>
            })}
        </div>
    )
}

export default Notes
