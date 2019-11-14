import React from "react";
import ReactDOM from "react-dom";
import BusinessList from "./component/BusinessList/BusinessList";
import Business from "./component/Business/Business";
import SearchBar from "./component/SearchBar/SearchBar";

import "./styles.css";

const business = {
  imageSrc: 'https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Bordertown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
};

const businesses = [
  business,
  business,
  business,
  business,
  business,
  business
];

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar />
        <BusinessList businesses={businesses} />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
