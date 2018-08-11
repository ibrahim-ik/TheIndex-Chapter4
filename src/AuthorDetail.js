import React, { Component } from "react";
import App from "./App";

class AuthorDetail extends Component {
  render() {
    const author = this.props.author;

    const AD = author.books.map(Detail => (
      <tr>
        <td>{Detail.title}</td>
        <td>
          {author.first_name} {author.last_name}
        </td>
        <td>
          <button className="btn" style={{ backgroundColor: Detail.color }} />
        </td>
      </tr>
    ));

    return (
      <div className="author col-xs-10">
        <div>
          <h3>
            {author.first_name} {author.last_name}
          </h3>
          <img src={author.imageUrl} className="img-thumbnail" />
        </div>
        <table className="mt-3 table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Authors</th>
              <th>Color</th>
            </tr>
          </thead>
          <tbody>{AD}</tbody>
        </table>
      </div>
    );
  }
}

export default AuthorDetail;
