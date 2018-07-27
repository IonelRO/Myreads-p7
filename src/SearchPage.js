import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI';
import Book from './Book';
class SearchPage extends Component {

 state = {
    query: "",
    findBooks: []
  }
  updateQuery = (query) => {
    this.setState({ query: query })
   {/* this.updateSearchPage(query)*/}
  }

getfindBooks = (query) => {
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
             {/* <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
              */}


              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" 
                placeholder="Search by title or author"
                value={this.state.query}
                onChange={(event) => this.updateQuery(event.target.value)}
                />

              </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                    {this.state.findBooks
                        .map((findBooks) =>
                        <li key={findBooks.id}>
                            <Book
                                bookID={findBooks.id}
                                image={findBooks.imageLinks}
                                title={findBooks.title}
                                authors={findBooks.authors}
                                updateShelf={this.props.updateShelf}
                                currentShelf={findBooks.shelf = "none"}/>
                        </li>
                    )}
                </ol>
              </div>
          </div>
        );
	}
}
export default SearchPage;