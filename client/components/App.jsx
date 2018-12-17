// Dependencies
import React, { Component } from 'react';
import { withGetScreen } from 'react-getscreen';
import { googleAPIKey } from '../../credentials.json';
// Components
import NavBar from './NavBar.jsx';
import ListItem from './ListItem.jsx';
import MapView from './MapView.jsx';
import Footer from './Footer.jsx';
// Assets
import PhoneIcon from '../../assets/phone-icon.png';
import DirectionsIcon from '../../assets/direction-icon.png';

class App extends Component {
  constructor() {
    super();
    this.state = {
      activeItem: undefined,
      activeItemData: undefined,
      detailsActive: false,
      weekday: new Date().getDay().toString(),
      markerLatitude: undefined,
      markerLongitude: undefined,
      locationData: [],
      activeComponent: 'ListView',
      activeButtonMobile: 'ListView'
    };
    this.fetchLocationData = this.fetchLocationData.bind(this);
    this.handleItemClick = this.handleItemClick.bind(this);
    this.handleDirectionsClick = this.handleDirectionsClick.bind(this);
    this.handleMoreInfoClick = this.handleMoreInfoClick.bind(this);
    this.handleExitClick = this.handleExitClick.bind(this);
    this.setMapMarker = this.setMapMarker.bind(this);
    this.renderComponent = this.renderComponent.bind(this);
    this.handleMobileButtonToggle = this.handleMobileButtonToggle.bind(this);
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
    this.props.isTablet() &&
      this.setState({
        activeComponent: 'MapView',
        activeButtonMobile: 'MapView'
      });
  }

  handleExitClick() {
    this.setState({ detailsActive: false });
  }

  setMapMarker(latitude, longitude) {
    this.setState({ markerLatitude: latitude, markerLongitude: longitude });
  }

  renderComponent() {
    switch (this.state.activeComponent) {
      case 'ListView':
        return (
          <ListItem
            data={this.state.locationData}
            handleItemClick={this.handleItemClick}
            handleMoreInfoClick={this.handleMoreInfoClick}
            activeItem={this.state.activeItem}
            handleDirectionsClick={this.handleDirectionsClick}
            PhoneIcon={PhoneIcon}
            weekday={this.state.weekday}
          />
        );
      case 'MapView':
        return (
          <MapView
            mapConfig={this.state.mapConfig}
            API_KEY={googleAPIKey}
            markerLongitude={this.state.markerLongitude}
            markerLatitude={this.state.markerLatitude}
            activeItem={this.state.activeItem}
            activeItemData={this.state.activeItemData}
            detailsActive={this.state.detailsActive}
            handleExitClick={this.handleExitClick}
            handleDirectionsClick={this.handleDirectionsClick}
            weekday={this.state.weekday}
            PhoneIcon={PhoneIcon}
            DirectionsIcon={DirectionsIcon}
          />
        );
    }
  }

  handleMobileButtonToggle(e) {
    e.preventDefault();
    const view = e.currentTarget.dataset.view;
    this.setState({ activeComponent: view, activeButtonMobile: view });
  }

  render() {
    if (this.props.isTablet()) {
      return (
        <div>
          <NavBar />
          <section className="container" id="main-view">
            <div className="row" id="mobile-display">
              {this.renderComponent()}
            </div>
          </section>
          <Footer
            handleMobileButtonToggle={this.handleMobileButtonToggle}
            activeButtonMobile={this.state.activeButtonMobile}
          />
        </div>
      );
    }
    return (
      <div>
        <NavBar />
        <section className="container" id="main-view">
          <div className="row" id="default-display">
            <ListItem
              data={this.state.locationData}
              handleItemClick={this.handleItemClick}
              handleMoreInfoClick={this.handleMoreInfoClick}
              activeItem={this.state.activeItem}
              handleDirectionsClick={this.handleDirectionsClick}
              PhoneIcon={PhoneIcon}
              weekday={this.state.weekday}
            />
            <MapView
              API_KEY={googleAPIKey}
              markerLongitude={this.state.markerLongitude}
              markerLatitude={this.state.markerLatitude}
              activeItem={this.state.activeItem}
              activeItemData={this.state.activeItemData}
              detailsActive={this.state.detailsActive}
              handleExitClick={this.handleExitClick}
              handleDirectionsClick={this.handleDirectionsClick}
              weekday={this.state.weekday}
              PhoneIcon={PhoneIcon}
              DirectionsIcon={DirectionsIcon}
            />
          </div>
        </section>
      </div>
    );
  }
}

export default withGetScreen(App, {
  tabletLimit: 769,
  shouldListenOnResize: true
});
