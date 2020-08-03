import React from 'react'
import PropTypes from 'prop-types'
import MoveToShelf from './MoveToShelf'

const RenderBooks = (props) => {
  return(
    <div className="bookshelf-books">
      <ol className="books-grid">
        {props.books.length > 0 && (props.books.map((book) => (
          book.imageLinks && (book.shelf === `${props.shelf}` || props.shelf === '') &&
          (<li key={book.id}>
            <div className="book">
              <div className="book-top">
                <div
                  className="book-cover"
                  style={{
                    width: 128,
                    height: 193,
                    backgroundImage: `url(${book.imageLinks.smallThumbnail})`
                  }}
                ></div>
                <MoveToShelf
                  book={book}
                  changeBookshelf={props.changeBookshelf}
                  shelf={props.shelf}
                  isInBookshelf={props.isInBookshelf}
                />
              </div>
              <div className="book-title">{book.title}</div>
              {book.authors && (<div className="book-authors">
                {book.authors.join(', ')}
              </div>)}
            </div>
          </li>)
        )))}
      </ol>
    </div>
  )
}

RenderBooks.propTypes = {
  books: PropTypes.array.isRequired,
  shelf: PropTypes.string.isRequired,
  changeBookshelf: PropTypes.func.isRequired,
  isInBookshelf: PropTypes.func.isRequired
}

export default RenderBooks