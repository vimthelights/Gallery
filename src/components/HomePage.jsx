import React from 'react';
import styled from 'styled-components';

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const LargeImage = styled.img`
  width: 800px;
  height: 500px;
  border-radius: 8px 0px 0px 8px;
  margin-right: 10px;
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
  display: flex
  width: 200px;
  height: 200px;
  margin-left: 10px;
  margin-top: 8px;
  position: absolute;
  z-index: 1;
`;

const HomePage = (props) => (
  <ImageWrapper>
    <LargeImage src={props.images[0].ImageURL} />

    <VerticalImageContainer>
      <SmallImage src="https://truliaphotos.s3.us-east-2.amazonaws.com/2.webp" style={{ borderRadius: '0px 8px 0px 0px' }} />
      <SmallImage src="https://truliaphotos.s3.us-east-2.amazonaws.com/3.webp" style={{ marginTop: '10px', borderRadius: '0px 0px 8px 0px' }} />
      <ButtonContainer>
        <button
          type="button"
          onClick={() => console.log('Saved!')}
          style={{
            height: '30px',
            marginRight: '30px',
            minWidth: '100px',
            borderRadius: '8px',
            border: 'none',
            fontsize: '16px',
            background: '#FFFFFF',
            cursor: 'pointer',
          }}
        >
          <svg className="svg" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px">
            <path d="M26.95 11.863a5.214 5.214 0 0 0-8.908-3.677l-1.908 1.908-1.906-1.908a5.214 5.214 0 1 0-7.377 7.366l1.912 1.913 7.371 7.373 7.373-7.373 1.912-1.912a5.193 5.193 0 0 0 1.53-3.69zM16.157 6.31A7.874 7.874 0 1 1 27.3 17.433l-1.913 1.913-9.254 9.254-1.88-1.88-7.373-7.374-1.91-1.91a7.874 7.874 0 1 1 11.137-11.13l.027.025.022-.022z" fill="#869099" />
          </svg>
          Save
        </button>

        <button
          type="button"
          onClick={() => console.log('Shared!')}
          style={{
            height: '30px',
            marginBottom: 0,
            minWidth: '100px',
            borderRadius: '8px',
            border: 'none',
            fontsize: '16px',
            background: '#FFFFFF',
            cursor: 'pointer',
          }}
        >
          <svg className="svg" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px">
            <path d="M17.29 7.2v14.285h-2.66V7.201l-3.99 3.99L8.76 9.31l7.2-7.2 7.2 7.2-1.88 1.88-3.99-3.99zm5.32 9.298h-2.66v-2.66h5.32v15.295H6.65V13.838h5.32v2.66H9.31v9.975h13.3v-9.975z" fill="#869099" />
          </svg>
          Share
        </button>
      </ButtonContainer>
    </VerticalImageContainer>
  </ImageWrapper>
);

export default HomePage;
