import { uniqueId } from 'lodash'

export const ADD_NOTE = 'ADD_NOTE'
export const REMOVE_NOTE = 'REMOVE_NOTE'

export const ACTIVE = 'ACTIVE'
export const DELETED = 'DELETED'

export const SHOW_ACTIVE = 'SHOW_ACTIVE'
export const SHOW_DELETED = 'SHOW_DELETED'

export function addNote(title, content) {
  return {
    id: uniqueId(),
    type: ADD_NOTE,
    title: title,
    content: content,
    status: ACTIVE
  }
}

export function removeNote(id) {
  return { type: REMOVE_NOTE, id: id }
}

export function showActiveNotes() {
  return { type: SHOW_ACTIVE }
}

export function showDeletedNotes() {
  return { type: SHOW_DELETED }
}