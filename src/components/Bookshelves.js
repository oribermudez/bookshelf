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
          <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>
            <RenderBooks
              books={props.books}
              shelf='currentlyReading'
              changeBookshelf={props.changeBookshelf}
              isInBookshelf={props.isInBookshelf}
            />
          </div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Want to Read</h2>
            <RenderBooks
              books={props.books}
              shelf='wantToRead'
              changeBookshelf={props.changeBookshelf}
              isInBookshelf={props.isInBookshelf}
            />
          </div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Read</h2>
            <RenderBooks
              books={props.books}
              shelf='read'
              changeBookshelf={props.changeBookshelf}
              isInBookshelf={props.isInBookshelf}
            />
          </div>
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
