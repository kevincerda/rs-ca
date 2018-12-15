import React, { Component } from 'react';
import NavBar from './NavBar.jsx';
import ListItem from './ListItem.jsx';
import MapView from './MapView.jsx';
import { googleAPIKey } from '../../credentials.json';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      locationData: [],
      mapConfig: {
        URL: 'https://maps.googleapis.com/maps/api/staticmap?'
      }
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
              <MapView API_KEY={googleAPIKey} />
            </div>
          </div>
        </section>
      </div>
    );
  }
}
