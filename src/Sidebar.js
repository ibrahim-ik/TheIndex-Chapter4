import React, { Component } from "react";
import AuthorsList from "./AuthorsList";

class Sidebar extends Component {
  render() {
    const AuthorsList = this.props.AuthorsList;

    return (
      <div id="sidebar">
        <img src="theindex.svg" className="logo" alt="the index logo" />
        <section>
          <h4 className="menu-item active">
            <button onClick={this.props.updateCurrentAuthor}>AUTHORS</button>
          </h4>
        </section>
      </div>
    );
  }
}

export default Sidebar;
