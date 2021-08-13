import { useEffect, useState } from 'react'
import NotesList from './components/NotesList'
import { v4 as uuid } from 'uuid'
import Search from './components/Search'
import Header from './components/Header'

function App() {
  const [notes, setNotes] = useState([
    // { id: uuid(), text: 'This is my first note!', date: '12/08/2021' },
    // { id: uuid(), text: 'This is my second note!', date: '12/08/2021' },
    // { id: uuid(), text: 'This is my third note!', date: '12/08/2021' },
  ])
  const [searchText, setSearchText] = useState('')
  const [darkMode, setDarkMode] = useState(false)

  const addNote = (text) => {
    if (text) {
      const date = new Date()
      const newNotes = [...notes]
      const newNote = { id: uuid(), text, date: date.toLocaleDateString() }
      newNotes.unshift(newNote)
      setNotes(newNotes)
    }
  }
  const removeNote = (id) => {
    const NewNotes = notes.filter((note) => note.id !== id)
    setNotes(NewNotes)
  }

  useEffect(() => {
    const saveNotes = JSON.parse(localStorage.getItem('react-notes-app-data'))
    if (saveNotes) {
      setNotes(saveNotes)
    }
  }, [])
  useEffect(() => {
    const saveDarkMode = JSON.parse(
      localStorage.getItem('react-notes-app-data-dark-mode')
    )
    if (saveDarkMode) {
      setDarkMode(saveDarkMode)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('react-notes-app-data', JSON.stringify(notes))
  }, [notes])

  useEffect(() => {
    localStorage.setItem(
      'react-notes-app-data-dark-mode',
      JSON.stringify(darkMode)
    )
  }, [darkMode])
  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className='container'>
        <Header handleToggleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText)
          )}
          handleAddNote={addNote}
          handleRemoveNote={removeNote}
        />
      </div>
    </div>
  )
}

export default App
