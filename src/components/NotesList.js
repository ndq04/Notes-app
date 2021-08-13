import AddNote from './AddNote'
import Note from './Note'

const NotesList = ({ notes, handleAddNote, handleRemoveNote }) => {
  return (
    <div className='notes-list'>
      {notes.map((note) => (
        <Note key={note.id} {...note} handleRemoveNote={handleRemoveNote} />
      ))}
      <AddNote handleAddNote={handleAddNote} />
    </div>
  )
}

export default NotesList
