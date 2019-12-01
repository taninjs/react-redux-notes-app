import React from 'react'
import { connect } from 'react-redux'
import { removeNote } from '../redux/actions/actions'

class NotesList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <>
        <h3>Notes</h3>
        <ul>
          {this.props.notes.map(note => (
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
    notes: state.notes
  }
}

const mapDispatchToProps = {
  removeNote: removeNote
}

export default connect(mapStateToProps, mapDispatchToProps)(NotesList)