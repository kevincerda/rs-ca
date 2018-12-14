import React, { Component } from 'react';
import NavBar from './NavBar.jsx';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      locationData: []
    };
    this.fetchLocationData = this.fetchLocationData.bind(this);
  }

  componentDidMount() {
    this.fetchLocationData();
  }

  fetchLocationData() {
    const URI = 'https://my.api.mockaroo.com/locations.json?key=a45f1200';
    fetch(URI)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({ locationData: [...this.state.locationData, ...data] });
      })
      .catch(error => {
        console.error(`Error fetching data ${error}`);
      });
  }

  render() {
    return (
      <div>
        <NavBar />
        <section className="container" id="main-view">
          <div className="row">
            <div className="col-6">left</div>
            <div className="col-6">right</div>
          </div>
        </section>
      </div>
    );
  }
}
