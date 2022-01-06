import React, { useContext, useState } from 'react'
import noteContext from "../context/notes/noteContext"

const AddNote = () => {
    const context = useContext(noteContext);
    const { addNote } = context; //destructuring to remove notes from body

    const [note, setNote] = useState({title: "", description: "", tag: "default"})

    const handleClick = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
    }
    const onChange = (e) => {
        setNote({...note, [e.target.name]: e.target.value})
    }
    return (
        <div className="container">
            <h1 className="text-center my-3={value.toString()}">Add a note</h1>
            {/* form from bootstrap */}
            <form my-3>
                <div className="form-group" className="text-center">
                    <h5 htmlFor="title" >Title</h5>
                    <input type="text" className="form-control" id="title" name="title" aria-describedby="emailHelp" placeholder="Enter title" onChange={onChange}/>
                </div>
                <div className="form-group" className="text-center my-3">
                    <h5 htmlFor="description">Description</h5>
                    <input type="text" className="form-control" id="description" name="description" placeholder="Enter description" onChange={onChange} />
                </div>
                <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <div className="col-md-12 text-center">
                    <button type="submit" className="btn btn-primary btn-lg btn-block" onClick={handleClick}>Add Note</button>
                </div>


            </form>
        </div>
    )
}

export default AddNote
