import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const modalRoot = document.getElementById('PhotoGallery');

const ModalOuterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 200;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  backgroundColor: rgba(1,0,0,0.3);
  backdrop-filter: blur(2px);
`;

const ModalInnerWrapper = styled.div`
  padding: 20;
  background: #fff;
  border-radius: 2px;
  display: inline-block;
  height: 80%;
  width: 85%;
  margin: 1rem;
  position: relative;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  overflow: scroll;
`;

const VerticalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow-y: scroll;
  object-fit: scale-down;
`;

const ImageRowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
`;

const Image = styled.img`
  display: flex;
  justify-content: flex-start;
  max-height: 550px;
  padding: ${(props) => ((props.num === 1) ? '0 0 8px 0' : '0 8px 8px 0')};
  object-fit: cover;
  width: ${(props) => (`${(100 / Number(props.num))}%`)};
`;

const ImageRow = ({num, imageElement}) => (
  <ImageRowWrapper>
    {
      imageElement.map((image) => <Image num={num} src={image.ImageURL} />)
    }
  </ImageRowWrapper>
);

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageArr: [],
    };
  }

  componentDidMount() {
    this.generateMatrix();
  }

  generateMatrix() {
    const result = [];

    let counter = 0;
    let lastVal = 0;
    while (counter < this.props.images.length) {
      let randNum = Math.floor(Math.random() * 3 + 1);
      while (randNum === lastVal) {
        randNum = Math.floor(Math.random() * 3 + 1);
      }
      lastVal = randNum;
      const imageArr = [];
      for (let i = 0; i < randNum; i += 1) {
        if (this.props.images[counter]) {
          imageArr.push(this.props.images[counter]);
          counter += 1;
        } else {
          break;
        }
      }
      result.push(imageArr);
    }

    this.setState({ imageArr: result });
  }

  render() {
    return ReactDOM.createPortal(
      <ModalOuterWrapper onClick={this.props.onClose}>
        <ModalInnerWrapper>
          <button type="button" onClick={this.props.onClose}>
            <svg className="svg" width="24px" height="24px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <path d="M27.816 25.935l-1.881 1.88-21.83-21.83 1.88-1.88 21.83 21.83zm-1.881-21.83l1.88 1.88-21.83 21.83-1.88-1.88 21.83-21.83z" fill="#869099" />
            </svg>
          </button>
          <hr />
          <VerticalWrapper>
            {
              this.state.imageArr.map((imageElement) => <ImageRow num={imageElement.length} imageElement={imageElement} />)
            }
          </VerticalWrapper>
        </ModalInnerWrapper>
      </ModalOuterWrapper>,
      modalRoot,
    );
  }
}

export default Modal;
