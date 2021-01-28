import React from 'react';
import styled from 'styled-components';

import Header from './Header.jsx';
import PhotoGallery from './PhotoGallery.jsx';
import Modal from './Modal.jsx';
import HomeInfo from './HomeInfo.jsx';

const axios = require('axios');

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: auto;
  z-index: 1;
  width: 100%;
  height: 100%;
  max-width: 1000px;
  font-family: 'Cabin';
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      homeInfo: {},
      homeImages: [],
      showModal: false,
    };

    this.handleShowModal = this.handleShowModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  componentDidMount() {
    this.getHomeData();
  }

  handleShowModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  getHomeData() { // refactor to one query using join
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
      <>
        <HomePageContainer>
          {
            this.state.showModal ? (
              <Modal onClose={this.handleCloseModal} images={this.state.homeImages}> </Modal>
            ) : null
          }
          {
            this.state.homeImages.length > 0 && (
            <>
              <Header />
              <PhotoGallery images={this.state.homeImages} handleShowModal={this.handleShowModal} />
              <HomeInfo />
            </>
            )
          }
        </HomePageContainer>
      </>
    );
  }
}

export default App;
