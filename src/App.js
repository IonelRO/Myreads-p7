import React from 'react'
import * as BooksAPI from './BooksAPI';
import './App.css'
import { Route  } from 'react-router-dom';
import FirstPage from './FirstPage';
import FindPage from './FindPage';

class BooksApp extends React.Component {
  state = {
        books: []
  }

  booksUpdate() {
        BooksAPI.getAll().then((books) => {
        this.setState({ books: books })
        })
    }
  componentDidMount () {
    this.booksUpdate()
    }
   
   movebooks = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
            this.booksUpdate()
      })
  }

render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
            <FirstPage
                books={this.state.books}
                movebooks={this.movebooks} />
        )} />

        <Route path="/search" render={() => (
            <FindPage
                books={this.state.books}
                movebooks={this.movebooks} />
        )} />
      </div>
  )}}

export default BooksApp;
