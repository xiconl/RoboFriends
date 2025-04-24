import React from 'react'

const SearchBox = ({seachfield, searchchange }) => {
  return (
    <div>
        <input
        className='pa3 ba b--green bg-lightest-blue'
        type="search"
        placeholder="Search Robots"
        onChange={ searchchange } />
    </div>
  )
}

export default SearchBox
