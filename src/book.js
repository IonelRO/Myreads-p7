import React, {Component} from 'react';

class Book extends Component {
render() {
  let validthumbnail = this.props.book.imageLinks ?
  this.props.book.imageLinks.thumbnail : '/src/img/no-cover.png';
  
  return (
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={{
             width: 128,
             height: 192,
             backgroundImage: `url(
              "${
                validthumbnail
              }"` }}>
        </div>
                  
      <div className="book-shelf-changer">
        <select onChange={(event) => this.props.movebooks(
          this.props.book, event.target.value
          )}
          value={this.props.shelf}
        >
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    </div>
    <div className="book-title">{this.props.book.title}</div>
      <div className="book-authors">
           { this.props.book.authors
           ? this.props.book.authors.map(
             (author) => {return author + ', ';})
           : "unavailable"}
      </div>
    </div>     
  )}
}

export default Book

/* https://stackoverflow.com/questions/28868071/onchange-event-using-react-js-for-drop-down */