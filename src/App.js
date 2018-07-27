import React from 'react'
import * as BooksAPI from './BooksAPI';
import './App.css'
import { Router  } from 'react-router-dom';
import MainPage from './MainPage';
import SearchPage from './SearchPage';
// import * as BooksAPI from './BooksAPI'


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
    /*BooksAPI.getAll().then((books) => console.log(books))*/
  

   movebooks = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
            this.booksUpdate()
      })
  }

    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
   
  render() {
    return (
      <div className="app">

            {/* <MainPage
                books={this.state.books}
                movebooks={this.movebooks}/>
    */}
    <SearchPage />
        </div>
    )
  }
}



export default BooksApp;
