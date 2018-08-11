import React, { Component } from "react";
import App from "./App";
import authorCard from "./AuthorCard";
import SearchBar from "./SearchBar";

// Components
import AuthorCard from "./AuthorCard";

class AuthorsList extends Component {
  render() {
    const q = <SearchBar filterAuthors={this.props.filterAuthors} />;
    const authorCards = this.props.authors.map(author => (
      <AuthorCard
        key={author.first_name + author.last_name}
        author={author}
        selectAuthor={this.props.selectAuthor}
      />
    ));

    return (
      <div className="authors">
        <h3>Authors</h3>
        <div className="row">{q}</div>
        <div className="row">{authorCards}</div>
      </div>
    );
  }
}

export default AuthorsList;
