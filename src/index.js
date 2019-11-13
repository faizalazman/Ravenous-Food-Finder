import React from "react";
import ReactDOM from "react-dom";
import BusinessList from "./component/BusinessList/BusinessList";
import Business from "./component/Business/Business";
import SearchBar from "./component/SearchBar/SearchBar";

import "./styles.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar />
        <BusinessList />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
