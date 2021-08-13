import { MdDeleteForever } from 'react-icons/md'
const Note = ({ id, text, date, handleRemoveNote }) => {
  const handleRemove = () => {
    if (handleRemoveNote) {
      handleRemoveNote(id)
    }
  }
  return (
    <div className='note'>
      <span>{text}</span>
      <div className='note-footer'>
        <small className='date'>{date}</small>
        <MdDeleteForever
          className='delete-icon'
          size='1.4rem'
          onClick={handleRemove}
        />
      </div>
    </div>
  )
}

export default Note
