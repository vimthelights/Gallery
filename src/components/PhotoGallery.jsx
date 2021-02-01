import React from 'react';
import styled from 'styled-components';

import SaveButton from './SaveButton.jsx';

const ImageWrapper0 = styled.div`
  display: flex;
  overflow: hidden;
  width: 1010px;
  border-radius: 8px;
  margin-top: 10px;
  margin: auto;
  position: relative;
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  position: relative;
  transition: all 0.5s ease;
  &:hover{transform: scale(1.05)};
  max-height: 500px;
  min-width: 1000px;
`;

const LargeImage = styled.img`
  display: flex;
  width: 750px;
  height: 500px;
  border-radius: 8px 0px 0px 8px;
  margin-right: 10px;
`;

const VerticalImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 260px;
  height: 510px;
`;

const SmallImage = styled.img`
  display: flex;
  width: 250px;
  height: 250px;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 80px;
  z-index: 3;
  position: absolute;
  top: 0;
  left: 0;
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 250px;
  height: 80px;
  margin-top: 8px;
  right: 0px;
  position: absolute;
`;

const ShareButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  margin-right: 30px;
  min-width: 100px;
  border-radius: 8px;
  border: none;
  font-size: 16px;
  font-family: 'Cabin';
  font-weight: 500;
  box-sizing: border-box;
  line-height: 1.5;
  background-color: white;
  cursor: pointer;
  position: absolute;
  right: -15px;
  top: 4px;
  z-index: 2;
`;

const ForSaleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  position: absolute;
  width: 80px;
  height: 20px;
  margin-top: 10px;
  left: 10px;
  z-index: 2;
`;

const ForSale = styled.span`
  margin-right: 4px;
  text-transform: uppercase;
  background-color: rgb(255, 255, 255);
  color: rgb(0, 178, 91);
  font-size: 12px;
  line-height: 1.33;
  padding: 2px 4px;
  border-radius: 4px;
  font-weight: bold;
`;

const PhotoGallery = (props) => (
  <ImageWrapper0>
    {/* display FOR SALE, Save, and Share buttons */}
    <HeaderContainer>
      <ForSaleContainer>
        <ForSale>
          For Sale
        </ForSale>
      </ForSaleContainer>
      <ButtonContainer>
        <SaveButton />
        <ShareButton onClick={() => console.log('Shared!')}>
          <svg className="svg" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px">
            <path d="M17.29 7.2v14.285h-2.66V7.201l-3.99 3.99L8.76 9.31l7.2-7.2 7.2 7.2-1.88 1.88-3.99-3.99zm5.32 9.298h-2.66v-2.66h5.32v15.295H6.65V13.838h5.32v2.66H9.31v9.975h13.3v-9.975z" fill="#007882" />
          </svg>
          &nbsp;Share
        </ShareButton>
      </ButtonContainer>
    </HeaderContainer>

    {/* Display 3 homepage images*/}
    <ImageWrapper onClick={props.handleShowModal}>
      <LargeImage src={props.images[0].ImageURL} />

      <VerticalImageContainer>
        <SmallImage src={props.images[1].ImageURL} style={{ borderRadius: '0px 8px 0px 0px' }} />
        <SmallImage src={props.images[2].ImageURL} style={{ marginTop: '10px', borderRadius: '0px 0px 8px 0px' }} />
      </VerticalImageContainer>
    </ImageWrapper>
  </ImageWrapper0>
);

export default PhotoGallery;
