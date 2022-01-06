import React, { useContext, useState } from 'react'
import noteContext from "../context/notes/noteContext"

const AddNote = () => {
    const context = useContext(noteContext);
    const { addNote } = context; //destructuring to remove notes from body

    const [note, setNote] = useState({title: "", description: "", tag: ""})

    const handleClick = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        setNote({title: "", description: "", tag: ""})
    }
    const onChange = (e) => {
        setNote({...note, [e.target.name]: e.target.value})
    }
    return (
        <div className="container">
            <h1 className="text-center my-3={value.toString()}">Add a note</h1>
            {/* form from bootstrap */}
            <form my-3>
                <div className="form-group" className="text-center my-5">
                    <h5 htmlFor="title" >Title</h5>
                    <input type="text" className="form-control" id="title" name="title" value={note.title}aria-describedby="emailHelp" placeholder="Enter title" onChange={onChange}/>
                </div>
                <div className="form-group" className="text-center my-5">
                    <h5 htmlFor="tag">Tag</h5>
                    <input type="text" className="form-control" id="tag" name="tag" value={note.tag}placeholder="Enter tag" onChange={onChange}  minLength={5} required/>
                </div>
                <div className="form-group col-lg-1" className="text-center my-5">
                    <h5 htmlFor="description">Description</h5>
                    <input type="text" className="form-control" id="description" name="description" value={note.description}placeholder="Enter description" onChange={onChange}  minLength={5} required/>
                </div>
                <div className="col-md-12 text-center">
                    <button disabled={note.title.length<5 || note.description.length<5} type="submit" className="btn btn-primary btn-lg btn-block" onClick={handleClick}  minLength={5} required>Add Note</button>
                </div>
            </form>
        </div>
    )
}

export default AddNote
