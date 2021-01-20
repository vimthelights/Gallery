import React from 'react';
import styled from 'styled-components';

const Container1 = styled.div`
  display: flex;
  width: 992 px;
  height: 500 px;
`;

const Container2 = styled.div`
  display: flex;
  flex-direction: column;
  width: 200 px;
  height: 500 px;
`;

const Img0 = styled.img`
  width: 800 px;
  height: 500 px;
`;

const Img1 = styled.img`
  width: 192 px;
  height: 240 px;
`;

const PhotoBox1 = (props) => {
  return (
    <Container1>
      <Img0 src='https://truliaphotos.s3.us-east-2.amazonaws.com/1.webp' />
      <Container2>
        <Img1 src='https://truliaphotos.s3.us-east-2.amazonaws.com/2.webp' />
        <Img1 src='https://truliaphotos.s3.us-east-2.amazonaws.com/3.webp' />
      </Container2>
    </Container1>
  )
};

export default PhotoBox1;
