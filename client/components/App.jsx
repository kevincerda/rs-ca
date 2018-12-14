import React, { Component } from 'react';
import NavBar from './NavBar.jsx';
import ListItem from './ListItem.jsx';

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
        <section className="container-fluid" id="main-view">
          <div className="row" id="columns">
            <ListItem data={this.state.locationData} />
            <div className="col-7" id="map">
              Click a location card to load a map
            </div>
          </div>
        </section>
      </div>
    );
  }
}
