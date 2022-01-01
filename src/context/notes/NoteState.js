import NoteContext from './noteContext'
import { useState } from 'react'

const NoteState = (props) => {

    //For now the notes will be kept hard coded
    const notesInitial = [
        {
          "_id": "61caf44052f91dc4dab4adaf",
          "user": "61caf3e952f91dc4dab4ada9",
          "title": "My Title",
          "description": "Wake up early in the morning",
          "tag": "personal",
          "date": "2021-12-28T11:25:52.799Z",
          "__v": 0
        },
        {
          "_id": "61caf45652f91dc4dab4adb1",
          "user": "61caf3e952f91dc4dab4ada9",
          "title": "My Title",
          "description": "Get well soon",
          "tag": "personal",
          "date": "2021-12-28T11:26:14.508Z",
          "__v": 0
        },
        {
          "_id": "61caf44052f91dc4dab4adaf",
          "user": "61caf3e952f91dc4dab4ada9",
          "title": "My Title",
          "description": "Wake up early in the morning",
          "tag": "personal",
          "date": "2021-12-28T11:25:52.799Z",
          "__v": 0
        },
        {
          "_id": "61caf45652f91dc4dab4adb1",
          "user": "61caf3e952f91dc4dab4ada9",
          "title": "My Title",
          "description": "Get well soon",
          "tag": "personal",
          "date": "2021-12-28T11:26:14.508Z",
          "__v": 0
        },
        {
          "_id": "61caf44052f91dc4dab4adaf",
          "user": "61caf3e952f91dc4dab4ada9",
          "title": "My Title",
          "description": "Wake up early in the morning",
          "tag": "personal",
          "date": "2021-12-28T11:25:52.799Z",
          "__v": 0
        },
        {
          "_id": "61caf45652f91dc4dab4adb1",
          "user": "61caf3e952f91dc4dab4ada9",
          "title": "My Title",
          "description": "Get well soon",
          "tag": "personal",
          "date": "2021-12-28T11:26:14.508Z",
          "__v": 0
        },
        {
          "_id": "61caf44052f91dc4dab4adaf",
          "user": "61caf3e952f91dc4dab4ada9",
          "title": "My Title",
          "description": "Wake up early in the morning",
          "tag": "personal",
          "date": "2021-12-28T11:25:52.799Z",
          "__v": 0
        },
        {
          "_id": "61caf45652f91dc4dab4adb1",
          "user": "61caf3e952f91dc4dab4ada9",
          "title": "My Title",
          "description": "Get well soon",
          "tag": "personal",
          "date": "2021-12-28T11:26:14.508Z",
          "__v": 0
        }
      ]
      const [notes, setnotes] = useState(notesInitial)

    return (
    <NoteContext.Provider value={{notes, setnotes}}>
        {props.children};
    </NoteContext.Provider>)
}

export default NoteState;