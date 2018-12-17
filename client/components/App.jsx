import React, { Component } from 'react';
import NavBar from './NavBar.jsx';
import ListItem from './ListItem.jsx';
import MapView from './MapView.jsx';
import Footer from './Footer.jsx';
import { googleAPIKey } from '../../credentials.json';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      activeItem: undefined,
      activeItemData: undefined,
      detailsActive: false,
      weekday: undefined,
      markerLatitude: undefined,
      markerLongitude: undefined,
      locationData: []
    };
    this.fetchLocationData = this.fetchLocationData.bind(this);
    this.handleItemClick = this.handleItemClick.bind(this);
    this.handleDirectionsClick = this.handleDirectionsClick.bind(this);
    this.handleMoreInfoClick = this.handleMoreInfoClick.bind(this);
    this.handleExitClick = this.handleExitClick.bind(this);
    this.setMapMarker = this.setMapMarker.bind(this);
    this.setWeekDay;
  }

  componentDidMount() {
    this.fetchLocationData();
    this.setWeekDay();
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

  handleDirectionsClick(latitude, longitude) {
    const googleURL = 'https://www.google.com/maps/dir/?api=1';
    return `${googleURL}&destination=${latitude},${longitude}`;
  }

  handleMoreInfoClick(e) {
    const selectedTruck = parseInt(e.currentTarget.dataset.truck);
    const truckData = this.state.locationData.find(
      truck => truck.id === selectedTruck
    );
    this.setState({ activeItemData: truckData, detailsActive: true });
  }

  handleExitClick() {
    this.setState({ detailsActive: false });
  }

  setMapMarker(latitude, longitude) {
    this.setState({ markerLatitude: latitude, markerLongitude: longitude });
  }

  setWeekDay() {
    const weekday = new Date().getDay().toString();
    this.setState({ weekday: weekday });
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
              handleMoreInfoClick={this.handleMoreInfoClick}
              activeItem={this.state.activeItem}
              handleDirectionsClick={this.handleDirectionsClick}
            />
            <MapView
              API_KEY={googleAPIKey}
              markerLongitude={this.state.markerLongitude}
              markerLatitude={this.state.markerLatitude}
              activeItem={this.state.activeItem}
              activeItemData={this.state.activeItemData}
              detailsActive={this.state.detailsActive}
              handleExitClick={this.handleExitClick}
              weekday={this.state.weekday}
            />
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}
