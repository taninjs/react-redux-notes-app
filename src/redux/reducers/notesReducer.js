
import { ADD_NOTE, REMOVE_NOTE, DELETED } from '../actions/actions'

function notesReducer(notes = [], action) {
  switch (action.type) {
    case ADD_NOTE:
      return [
        ...notes,
        {
          id: action.id,
          title: action.title,
          content: action.content,
          status: action.status
        }
      ]
    case REMOVE_NOTE:
      return notes.map(note => note.id === action.id ? { ...note, status: DELETED } : note)

    default:
      return notes
  }
}

export default notesReducer