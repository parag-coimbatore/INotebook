import NoteContext from './noteContext'
import { useState } from 'react'

const NoteState = (props) => {

    //For now the notes will be kept hard coded
    const notesInitial = [
        {
          "_id": "61caf441052f91dc4dab4adaf",
          "user": "61caf3e952f91dc4dab4ada9",
          "title": "My Title",
          "description": "Wake up early in the morning",
          "tag": "personal",
          "date": "2021-12-28T11:25:52.799Z",
          "__v": 0
        },
        {
          "_id": "61caf456522f91dc4dab4adb1",
          "user": "61caf3e952f91dc4dab4ada9",
          "title": "My Title",
          "description": "Get well soon",
          "tag": "personal",
          "date": "2021-12-28T11:26:14.508Z",
          "__v": 0
        },
        {
          "_id": "61caf44052f391dc4dab4adaf",
          "user": "61caf3e952f91dc4dab4ada9",
          "title": "My Title",
          "description": "Wake up early in the morning",
          "tag": "personal",
          "date": "2021-12-28T11:25:52.799Z",
          "__v": 0
        },
        {
          "_id": "61caf45652f491dc4dab4adb1",
          "user": "61caf3e952f91dc4dab4ada9",
          "title": "My Title",
          "description": "Get well soon",
          "tag": "personal",
          "date": "2021-12-28T11:26:14.508Z",
          "__v": 0
        },
        {
          "_id": "61caf44052f591dc4dab4adaf",
          "user": "61caf3e952f91dc4dab4ada9",
          "title": "My Title",
          "description": "Wake up early in the morning",
          "tag": "personal",
          "date": "2021-12-28T11:25:52.799Z",
          "__v": 0
        },
        {
          "_id": "61caf45652f961dc4dab4adb1",
          "user": "61caf3e952f91dc4dab4ada9",
          "title": "My Title",
          "description": "Get well soon",
          "tag": "personal",
          "date": "2021-12-28T11:26:14.508Z",
          "__v": 0
        },
        {
          "_id": "61caf44052f91d7c4dab4adaf",
          "user": "61caf3e952f91dc4dab4ada9",
          "title": "My Title",
          "description": "Wake up early in the morning",
          "tag": "personal",
          "date": "2021-12-28T11:25:52.799Z",
          "__v": 0
        },
        {
          "_id": "61caf45652f91dc48dab4adb1",
          "user": "61caf3e952f91dc4dab4ada9",
          "title": "My Title",
          "description": "Get well soon",
          "tag": "personal",
          "date": "2021-12-28T11:26:14.508Z",
          "__v": 0
        }
      ]
      const [notes, setNotes] = useState(notesInitial)

      //Add a note
      const addNote = (title, description, tag) => {
        //TODO:- aPI CALL
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
        
      }

      //Edit a note
      const editNote = (id) => {
        
      }

    return (
    <NoteContext.Provider value={{notes, addNote, deleteNote, editNote}}>
        {props.children};
    </NoteContext.Provider>)
}

export default NoteState;