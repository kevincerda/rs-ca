import React, { Component } from 'react';
import NavBar from './NavBar.jsx';
import ListItem from './ListItem.jsx';
import MapView from './MapView.jsx';
import { googleAPIKey } from '../../credentials.json';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      activeItem: '',
      markerLatitude: undefined,
      markerLongitude: undefined,
      locationData: []
    };
    this.fetchLocationData = this.fetchLocationData.bind(this);
    this.handleItemClick = this.handleItemClick.bind(this);
    this.setMapMarker = this.setMapMarker.bind(this);
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

  handleItemClick(e) {
    const truckId = e.currentTarget.dataset.id;
    const latitude = e.currentTarget.dataset.latitude;
    const longitude = e.currentTarget.dataset.longitude;
    this.setState({ activeItem: truckId });
    this.setMapMarker(latitude, longitude);
  }

  setMapMarker(latitude, longitude) {
    this.setState({ markerLatitude: latitude, markerLongitude: longitude });
  }

  render() {
    return (
      <div>
        <NavBar />
        <section className="container" id="main-view">
          <div className="row" id="columns">
            <ListItem
              data={this.state.locationData}
              handleItemClick={this.handleItemClick}
              activeItem={this.state.activeItem}
            />
            <MapView
              API_KEY={googleAPIKey}
              markerLongitude={this.state.markerLongitude}
              markerLatitude={this.state.markerLatitude}
            />
          </div>
        </section>
      </div>
    );
  }
}
