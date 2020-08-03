import React from 'react'
import RenderBooks from './RenderBooks'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const BookSearch = (props) => {
  return (
    <div className="search-books">
      <div className="search-books-bar" onClick={(e) => props.searchBooks('')}>
        <Link className='close-search' to='/'>
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title or author"
            onChange={(e) => props.searchBooks(e.target.value)}
          />
        </div>
      </div>
      <div className="search-books-results">
        {props.empty && <div>No books were found</div>}
        <ol className="books-grid">
          {props.search && (<RenderBooks
            books={props.search}
            shelf={''}
            changeBookshelf={props.changeBookshelf}
            isInBookshelf={props.isInBookshelf}
          />)}
        </ol>
      </div>
    </div>
  )
}

BookSearch.propTypes = {
  search: PropTypes.array,
  changeBookshelf: PropTypes.func.isRequired,
  searchBooks: PropTypes.func.isRequired,
  isInBookshelf: PropTypes.func.isRequired
}

export default BookSearch
