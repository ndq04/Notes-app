import { MdSearch } from 'react-icons/md'
const Search = ({ handleSearchNote }) => {
  return (
    <div className='search'>
      <MdSearch className='search-icon' size='1.5rem' />
      <input
        type='text'
        placeholder='Type to search ...'
        onChange={(e) => handleSearchNote(e.target.value)}
      />
    </div>
  )
}

export default Search
