import React from 'react';
import styled from 'styled-components';

import Header from './Header.jsx';
import PhotoGallery from './PhotoGallery.jsx';
import Modal from './Modal.jsx';
import HomeInfo from './HomeInfo.jsx';

const axios = require('axios');

const StyledWrapper = styled.div`
  display: flex;
  .one {
    flex: 1
  }
  .two {
    flex: 2
  }
`;

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  z-index: 100;
  width: 992px;
  height: 100%;
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
      <StyledWrapper>
        <div className="one" />
        <HomePageContainer className="two">
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
        <div className="one" />
      </StyledWrapper>
    );
  }
}

export default App;
