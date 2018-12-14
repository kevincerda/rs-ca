import React, { Component } from 'react';

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
        <h1>Hello Taco Truck</h1>
      </div>
    );
  }
}
