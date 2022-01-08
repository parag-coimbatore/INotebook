import React , {useContext}from 'react'
import noteContext from "../context/notes/noteContext"


const NoteItem = (props) => {
    const context = useContext(noteContext);
    const {deleteNote} = context;
    const { note ,updateNote} = props;
    return (
        <div className="col-md-3">
            <div className="card my-3" >
                <div className="card-body">
                    <div className="container text-center">
                    <h5 className="card-title text-center ">{note.title}</h5>
                    <p className="card-text text-center">{note.description}</p>
                    <p className="card-text text-center">"{note.tag}"</p>
                    <i className="fas fa-trash mx-3" onClick={ ()=> {deleteNote(note._id); props.showAlert("Deleted Successfully","success")}}></i>
                    <i className="fas fa-pen-square mx-3" onClick={() => {updateNote(note); }}></i>
                </div>
                </div>
            </div>
        </div>
    )
}

export default NoteItem
