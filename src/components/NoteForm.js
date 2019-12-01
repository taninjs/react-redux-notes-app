import React from 'react'


class NoteForm extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <form>
        <h3>Add a Note</h3>
        Title: <br />
        <input type="text" name="title" />
        <br />
        Content: <br />
        <textarea name="content" cols="30" rows="5"></textarea>
        <br />
        <button type="submit">Add Note</button>
      </form>
    )
  }
}

export default NoteForm