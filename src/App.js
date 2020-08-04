import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import Bookshelves from './components/Bookshelves'
import BookSearch from './components/BookSearch'
import { Route } from 'react-router-dom'
import './App.css'

class BooksApp extends Component {
  state = {
    books: [],
    search: [],
    empty: false,
    shelves: [
      {
        title: 'Currently Reading',
        shelf: 'currentlyReading'
      },
      {
        title: 'Want to Read',
        shelf: 'wantToRead'
      },
      {
        title: 'Read',
        shelf: 'read'
      }
    ]
  }

  componentDidMount() {
    this.getAllBooks()
  }

  getAllBooks = () => {
    BooksAPI.getAll()
      .then((books) => {
        this.setState({ books })
      })
  }

  changeBookshelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
    .then(() => {
      this.getAllBooks()
    })
  }

  searchBooks = (query) => {
    if(query !== '') {
      BooksAPI.search(query)
      .then((search) => {
        if(!search.error) {
          this.setState({ search, empty: false })
        } else {
          this.setState({ search: [], empty: true })
        }
      })
    } else {
      this.setState({ search: [], empty: false })
    }
  }

  isInBookshelf = (book) => {
    const complete = this.state.books.find(b => b.id === book.id)
    return  complete ? complete.shelf : 'none'
  }

  render() {
    const { books, search, empty, shelves } = this.state
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <Bookshelves
            books={books}
            changeBookshelf={this.changeBookshelf}
            isInBookshelf={this.isInBookshelf}
            shelves={shelves}
          />
        )}/>
        <Route exact path='/search' render={() => (
          <BookSearch
            search={search}
            empty={empty}
            searchBooks={this.searchBooks}
            changeBookshelf={this.changeBookshelf}
            isInBookshelf={this.isInBookshelf}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
