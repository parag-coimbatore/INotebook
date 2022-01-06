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
    

    console.log("Adding a new note")
    const note = {
      "_id": "61caf45652f91dc48dab4adb1",
      "user": "61caf3e952f91dc4dab4ada9",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "2021-12-28T11:26:14.508Z",
      "__v": 0
    };
    setNotes(notes.concat(note))
  }



  //Delete a note
  const deleteNote = (id) => {
    //TODO: API CALL
    console.log("Deleting the note with id" + id)
    const newNotes = notes.filter((note) => {
      return note._id !== id
    })
    setNotes(newNotes)
  }

  //Edit a note
  const editNote = async (id, title, description, tag) => {
    //API CALL
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      headers: {
        'Content-Type': 'application/json',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFjYWYzZTk1MmY5MWRjNGRhYjRhZGE5In0sImlhdCI6MTY0MDY5MDcwN30.rkww3kaQgVnn_wn6v-b_7kXwxhFRTBVwnGne4sNawXA"
      },
      body: JSON.stringify({title, description, tag})
    });
    const json = response.json();



    //LOGIC FOR EDITING IN CLIENT
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;

      }

    }
  }

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote , getNotes}}>
      {props.children};
    </NoteContext.Provider>)
}

export default NoteState;