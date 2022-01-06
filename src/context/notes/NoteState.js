import NoteContext from './noteContext'
import { useState } from 'react'

const NoteState = (props) => {

  //For now the notes will be kept hard coded
  const host = " http://localhost:5000"
  const notesInitial = [
    
  ]
  const [notes, setNotes] = useState(notesInitial)

  //Get all notes
  const getNotes = async() => {
    //TODO:- aPI CALL
    //API CALL
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFjYWYzZTk1MmY5MWRjNGRhYjRhZGE5In0sImlhdCI6MTY0MDY5MDcwN30.rkww3kaQgVnn_wn6v-b_7kXwxhFRTBVwnGne4sNawXA"
      },
    });
    const json = await response.json()
    console.log(json)
    setNotes(json)
  }
  
  //Add a note
  const addNote = async(title, description, tag) => {
    //TODO:- aPI CALL
    //API CALL
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFjYWYzZTk1MmY5MWRjNGRhYjRhZGE5In0sImlhdCI6MTY0MDY5MDcwN30.rkww3kaQgVnn_wn6v-b_7kXwxhFRTBVwnGne4sNawXA"
      },
      body: JSON.stringify({title, description, tag})
    });

    const note = await response.json();
    setNotes(notes.concat(note))
    
  }



  //Delete a note
  const deleteNote = async(id) => {
    //TODO: API CALL
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFjYWYzZTk1MmY5MWRjNGRhYjRhZGE5In0sImlhdCI6MTY0MDY5MDcwN30.rkww3kaQgVnn_wn6v-b_7kXwxhFRTBVwnGne4sNawXA"
      },
    });
    const json = response.json();
   

    const newNotes = notes.filter((note) => {
      return note._id !== id
    })
    setNotes(newNotes)
  }

  //Edit a note
  const editNote = async (id, title, description, tag) => {
    //API CALL
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'PUT', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFjYWYzZTk1MmY5MWRjNGRhYjRhZGE5In0sImlhdCI6MTY0MDY5MDcwN30.rkww3kaQgVnn_wn6v-b_7kXwxhFRTBVwnGne4sNawXA"
      },
      body: JSON.stringify({title, description, tag})
    });
    const json = await response.json();



    let newNotes = JSON.parse(JSON.stringify(notes))
    //LOGIC FOR EDITING IN CLIENT
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
      
    }
    console.log(id,notes)
    setNotes(newNotes);
  }

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote , getNotes}}>
      {props.children};
    </NoteContext.Provider>)
}

export default NoteState;