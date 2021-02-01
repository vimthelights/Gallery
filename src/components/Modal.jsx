import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const modalRoot = document.getElementById('PhotoGallery');

const ModalOuterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 6;
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
  padding: 5px;
  object-fit: cover;
  width: ${(props) => (`${(100 / Number(props.num))}%`)};
`;
// padding: ${(props) => ((props.num === 1) ? '0 0 8px 0' : '0 8px 8px 0')};
// width: ${(props) => (`${(100 / Number(props.num))}%`)};

const HeaderWrapper0 = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 85%;
  height: 90px;
  background-color: white;
`;

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: white;
`;

const HeaderButtons = styled.button`
  margin: 0px;
  border-radius: 8px;
  border-width: 1px;
  border-style: solid;
  cursor: pointer;
  display: inline-block;
  color: rgb(59, 65, 68);
  background-color: rgb(255, 255, 255);
  text-align: center;
  font-weight: bold;
  transition: top 0.1s ease 0s, box-shadow 0.1s ease 0s, border-color 0.1s ease 0s, background-color 0.1s ease 0s, color 0.1s ease 0s;
  white-space: nowrap;
  font-size: 16px;
  line-height: 1.5;
  padding: 8px 16px;
  margin-top: 7px;
  margin-left: 7px;
  &:hover{
    background-color: rgb(232, 233, 234);
  };
`;

const CloseButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-left: auto;
  right: 0;
  z-index: 6;
`;

const ImageRow = ({ num, imageElement }) => (
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
          <HeaderWrapper0>
            <HeaderWrapper>
              <HeaderButtons style={{ color: 'rgb(0, 120, 130)', borderColor: 'rgb(232, 233, 234)' }}>Photos</HeaderButtons>
              <HeaderButtons style={{ border: 'none' }}>Map</HeaderButtons>
              <HeaderButtons style={{ border: 'none' }}>Street View</HeaderButtons>
              <HeaderButtons style={{ border: 'none' }}>Schools</HeaderButtons>
              <HeaderButtons style={{ border: 'none' }}>Crime</HeaderButtons>
              <HeaderButtons style={{ border: 'none' }}>Commute</HeaderButtons>
              <HeaderButtons style={{ border: 'none' }}>Shop & Eat</HeaderButtons>
              <CloseButtonWrapper>
                <button type="button" onClick={this.props.onClose} style={{ display: 'flex', justifyContent: 'flex-end', backgroundColor: 'white', border: 'none', cursor: 'pointer' }}>
                  <svg className="svg" width="24px" height="24px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M27.816 25.935l-1.881 1.88-21.83-21.83 1.88-1.88 21.83 21.83zm-1.881-21.83l1.88 1.88-21.83 21.83-1.88-1.88 21.83-21.83z" fill="rgb(59, 65, 68)" />
                  </svg>
                </button>
              </CloseButtonWrapper>
            </HeaderWrapper>
            <div style={{ width: '100%', backgroundColor: 'white' }}>
              <hr style={{ backgroundColor: 'white' }} />
            </div>
            <div style={{ display: 'flex', backgroundColor: 'white', alignItems: 'center', fontFamily: 'Cabin', fontWeight: '500', fontSize: '14px', lineHeight: 1.43 }}>&nbsp;&nbsp;435 Marina Blvd &nbsp;|&nbsp; $25,000,000 &nbsp;|&nbsp; 5 Beds 7 Baths</div>
          </HeaderWrapper0>
          <div style={{ display: 'flex', height: '90px' }} />
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
