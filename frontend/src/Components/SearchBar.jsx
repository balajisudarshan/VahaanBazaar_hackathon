import React from 'react'
import './styles/SearchBar.css'

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="search-bar-container">
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search vehicles..."
        className="search-input"
      />
    </div>
  )
}

export default SearchBar
