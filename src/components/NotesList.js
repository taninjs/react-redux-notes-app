import React from 'react'


class NotesList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <>
        <h3>Notes</h3>
        <ul>
          <li>
            <b>Title</b>
            <button>x</button>
            <br />
            <span>Note Content</span>
          </li>
        </ul>
      </>
    )
  }
}

export default NotesList