import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import Book from './Book';

class FindPage extends Component {

 state = {
    query: "",
    findBooks: []
  }
  updateQuery = (query) => {
    this.setState({ query: query })
    this.updatefindBooks(query)
  }

updatefindBooks = (query) => {
        //if the user types a query, look for books that match
        if (query) {
            //display books that match
            BooksAPI.search(query).then((findBooks) => {
                //if the search query doesn't exist, then show no results
                //(many thanks the FEND scholarship Slack
                //for help in solving this)
                //I also used this for reference: https://dev.to/sarah_chima/error-boundaries-in-react-3eib
                if (findBooks.error) {
                    this.setState({ findBooks: [] })
                } else {
                    this.setState({ findBooks: findBooks })
                }
            })
            //if there is no query, then show no results
        } else {
            this.setState({ findBooks: [] })
        }
    }

render (){
	return(
		<div className="search-books">
      <div className="search-books-bar">
       <Link className="close-search" to="/">Close</Link>
        
        <div className="search-books-input-wrapper">
          <input type="text" 
          placeholder="Search by title or author"
          value={this.state.query}
          onChange={(event) => this.updateQuery(event.
            target.value)}
          />

        </div>
      </div>
      <div className="search-books-results">
          <ol className="books-grid">
              {this.state.findBooks
                  .map((findBooks) =>
                  <li key={findBooks.id}>
                      <Book
                          book={findBooks}
                          movebooks={this.props.movebooks}
                          shelf="none"

                          />
                  </li>
              )}
          </ol>
        </div>
    </div>
  );}}

export default FindPage;