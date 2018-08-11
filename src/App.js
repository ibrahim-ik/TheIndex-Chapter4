import React, { Component } from "react";
import axios from "axios";
import AuthorDetail from "./AuthorDetail";
import SearchBar from "./SearchBar";

// Components
import Sidebar from "./Sidebar";
import Loading from "./Loading";
import AuthorsList from "./AuthorsList";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authors: [],
      filteredAuthors: [],
      loading: true,
      currentAuthor: {}
    };
    this.selectAuthor = this.selectAuthor.bind(this);
    this.updateCurrentAuthor = this.updateCurrentAuthor.bind(this);
    this.filterAuthors = this.filterAuthors.bind(this);
  }

  componentDidMount() {
    axios
      .get("https://the-index-api.herokuapp.com/api/authors/")
      .then(res => res.data)
      .then(authors =>
        this.setState({
          authors: authors,
          filteredAuthors: authors,
          loading: false
        })
      )
      .catch(err => console.error(err));
  }

  getContentView() {
    if (this.state.loading) {
      return <Loading />;
    } else if (
      this.state.currentAuthor &&
      this.state.currentAuthor.first_name
    ) {
      return <AuthorDetail author={this.state.currentAuthor} />;
    } else {
      return (
        <AuthorsList
          authors={this.state.filteredAuthors}
          selectAuthor={this.selectAuthor}
          filterAuthors={this.filterAuthors}
        />
      );
    }
  }

  selectAuthor(author) {
    axios
      .get(`https://the-index-api.herokuapp.com/api/authors/${author.id}/`)
      .then(res => res.data)
      .then(authors =>
        this.setState({ currentAuthor: authors, loading: false })
      )
      .catch(err => console.error(err));
  }

  updateCurrentAuthor() {
    this.setState({ currentAuthor: null });
  }

  filterAuthors(query) {
    let filteredAuthors = this.state.authors.filter(author => {
      return author.first_name.toLowerCase().includes(query.toLowerCase());
    });
    this.setState({ filteredAuthors: filteredAuthors });
  }

  render() {
    return (
      <div id="app" className="container-fluid">
        <div className="row">
          <div className="col-2">
            <Sidebar updateCurrentAuthor={this.updateCurrentAuthor} />
          </div>
          <div className="content col-10">{this.getContentView()}</div>
        </div>
      </div>
    );
  }
}

export default App;
