import React from 'react'
import PropTypes from 'prop-types'

const MoveToShelf = (props) => {
    return(
      <div className="book-shelf-changer">
        <select
          value={props.isInBookshelf(props.book)}
          onChange={(e) => props.changeBookshelf(props.book, e.target.value)}
        >
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    )
}

MoveToShelf.propTypes = {
  book: PropTypes.object.isRequired,
  changeBookshelf: PropTypes.func.isRequired,
  isInBookshelf: PropTypes.func.isRequired
}

export default MoveToShelf