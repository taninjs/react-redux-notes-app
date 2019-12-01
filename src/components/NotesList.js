import React from 'react'
import { connect } from 'react-redux'
import { removeNote, showActiveNotes, showDeletedNotes } from '../redux/actions/actions'

class NotesList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let visibility = this.props.visibility
    let notes = this.props.notes.filter(note => note.status === visibility)

    return (
      <>
        <h3>Notes</h3>
        <button onClick={this.props.showActiveNotes}>Show Active Notes</button>
        <button onClick={this.props.showDeletedNotes}>Show Deleted Notes</button>
        <ul>
          {notes.map(note => (
            <li key={note.id}>
              <b>{note.title}</b>
              <button onClick={() => this.props.removeNote(note.id)}>x</button>
              <br />
              <span>{note.content}</span>
            </li>
          ))}

        </ul>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    notes: state.notes,
    visibility: state.visibility
  }
}

const mapDispatchToProps = {
  removeNote: removeNote,
  showActiveNotes: showActiveNotes,
  showDeletedNotes: showDeletedNotes
}

export default connect(mapStateToProps, mapDispatchToProps)(NotesList)