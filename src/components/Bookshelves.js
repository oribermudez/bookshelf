import React from 'react'
import RenderBooks from './RenderBooks'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Bookshelves = (props) => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {props.shelves.map(shelf => (
            <div className="bookshelf" key={shelf.shelf}>
              <h2 className="bookshelf-title">{shelf.title}</h2>
              <RenderBooks
                books={props.books}
                shelf={shelf.shelf}
                changeBookshelf={props.changeBookshelf}
                isInBookshelf={props.isInBookshelf}
              />
          </div>
          ))}
        </div>
      </div>
      <div className="open-search">
        <Link className='open-search-button' to='/search'>
          Add a book
        </Link>
      </div>
    </div>
  )
}

Bookshelves.propTypes = {
  books: PropTypes.array.isRequired,
  changeBookshelf: PropTypes.func.isRequired,
  isInBookshelf: PropTypes.func.isRequired
}

export default Bookshelves
