import React, { Component } from "react";

class BookData extends Component {
  render() {
    return (
      <table className="mt-3 table">
        <td>{author.books[1].title}</td>
        <td>
          {author.first_name} {author.last_name}
        </td>
        <td>
          <button
            className="btn"
            style={{ backgroundColor: author.books[0].color }}
          />
        </td>
      </table>
    );
  }
}

export default BookData;
