import React from 'react';
import styled from 'styled-components';

import SaveButton from './SaveButton.jsx';

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  z-index: 1;
  position: relative;
  padding: 8px;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`;

const LargeImageContainer = styled.div`
  display: flex;
`;

const LargeImage = styled.img`
  width: 700px;
  height: 500px;
  border-radius: 8px 0px 0px 8px;
  margin-right: 10px;
  transition: all 0.5s ease;
  &:hover{transform: scale(1.05)};
  overflow: hidden;
`;

const VerticalImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 500px;
`;

const SmallImage = styled.img`
  display: flex;
  width: 250px;
  height: 245px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 200px;
  height: 200px;
  margin-left: 35px;
  margin-top: 8px;
  position: absolute;
`;

const SSButton = styled.button`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  height: 30px;
  margin-right: 30px;
  min-width: 100px;
  border-radius: 8px;
  border: none;
  font-size: 16px;
  font-weight: bold;
  box-sizing: border-box;
  line-height: 1.5;
  // color: rgb(59, 65, 68);
  background: #FFFFFF;
  cursor: pointer;
`;

const ForSaleContainer = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  width: 80px;
  height: 20px;
  position: absolute;
  margin-top: 10px;
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
  <ImageWrapper>
    <LargeImageContainer>
      <LargeImage onClick={props.handleShowModal} src={props.images[0].ImageURL} />
      <ForSaleContainer>
        <ForSale>
          For Sale
        </ForSale>
      </ForSaleContainer>
    </LargeImageContainer>

    <VerticalImageContainer>
      <SmallImage src={props.images[1].ImageURL} style={{ borderRadius: '0px 8px 0px 0px' }} />
      <SmallImage src={props.images[2].ImageURL} style={{ marginTop: '10px', borderRadius: '0px 0px 8px 0px' }} />
      <ButtonContainer>
        <SaveButton />
        <SSButton onClick={() => console.log('Shared!')}>
          <svg className="svg" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px">
            <path d="M17.29 7.2v14.285h-2.66V7.201l-3.99 3.99L8.76 9.31l7.2-7.2 7.2 7.2-1.88 1.88-3.99-3.99zm5.32 9.298h-2.66v-2.66h5.32v15.295H6.65V13.838h5.32v2.66H9.31v9.975h13.3v-9.975z" fill="#007882" />
          </svg>
          &nbsp;&nbsp;Share
        </SSButton>
      </ButtonContainer>
    </VerticalImageContainer>
  </ImageWrapper>
);

export default PhotoGallery;
