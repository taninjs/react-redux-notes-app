import React from 'react'
import { connect } from 'react-redux'

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
              <button>x</button>
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

export default connect(mapStateToProps, null)(NotesList)