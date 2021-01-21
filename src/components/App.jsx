import React from 'react';

import HomePage from './HomePage.jsx';

const axios = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      homeInfo: {},
      homeImages: [],
      photobox1imgs: [],
    };
  }

  componentDidMount() {
    this.getHomeData();
  }

  getHomeData() {
    const randHomeID = Math.floor(Math.random() * 100);

    axios.get('/api/homeinfo', { params: { ID: randHomeID } })
      .then((response) => {
        this.setState({ homeInfo: response.data });
      })
      .catch((error) => {
        console.log(error);
      });

    axios.get('/api/homeimages', { params: { ID: randHomeID } })
      .then((response) => {
        this.setState({
          homeImages: response.data,
          photobox1imgs: [response.data[0], response.data[1], response.data[2]],
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        {
          this.state.photobox1imgs.length > 0 &&
          <HomePage images={this.state.photobox1imgs} />
        }
      </div>
    );
  }
}

export default App;
