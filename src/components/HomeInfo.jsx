import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
  display: flex;
`;

const HomeInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  margin-left: 20px;
`;

const BdBaContainer = styled.div`
  display: flex;
  align-items: center;
`;

const EmptyLine = styled.div`
  height: 16px;
  left: 50%;
  top: 0;
`;

const BedImage = () => (
  <svg className="svg" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px">
    <path d="M9.196 14.603h15.523v.027h1.995v10.64h-3.99v-4.017H9.196v4.017h-3.99V6.65h3.99v7.953zm2.109-1.968v-2.66h4.655v2.66h-4.655z" fill="#869099" />
  </svg>
);

const BathImage = () => (
  <svg className="svg" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px">
    <path d="M23.981 15.947H26.6v1.33a9.31 9.31 0 0 1-9.31 9.31h-2.66a9.31 9.31 0 0 1-9.31-9.31v-1.33h16.001V9.995a2.015 2.015 0 0 0-2.016-2.015h-.67c-.61 0-1.126.407-1.29.965a2.698 2.698 0 0 1 1.356 2.342H13.3a2.7 2.7 0 0 1 1.347-2.337 4.006 4.006 0 0 1 3.989-3.63h.67a4.675 4.675 0 0 1 4.675 4.675v5.952z" fill="#869099" />
  </svg>
);

const SqFtImage = () => (
  <svg className="svg" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px">
    <path d="M13.748 21.276l-3.093-3.097v3.097h3.093zm12.852 5.32H10.655v.004h-5.32v-.004H5.32v-5.32h.015V5.32L26.6 26.596z" fill="#869099" />
  </svg>
);

const HomeInfo = () => (
  <FooterContainer>
    <HomeInfoContainer>
      <div>
        <span style={{ fontSize: '28px', fontWeight: 'bold', color: 'rgb(59, 65, 68)' }}>435 Marina Blvd</span>
      </div>
      <div style={{ fontSize: '16px', lineHeight: 1.5, color: 'rgb(59, 65, 68)', letterSpacing: '-0.1px' }}>
        San Francisco, CA 94123
      </div>

      <EmptyLine />

      <BdBaContainer>
        <BedImage />
        <span style={{ fontSize: '16px', lineHeight: 1.5, letterSpacing: '-0.1px', color: 'rgb(59, 65, 68)', marginRight: '6px', marginLeft: '2px' }}> 5 beds </span>
        <BathImage />
        <span style={{ fontSize: '16px', lineHeight: 1.5, letterSpacing: '-0.1px', color: 'rgb(59, 65, 68)', marginRight: '6px', marginLeft: '2px' }}> 8 baths </span>
        <SqFtImage />
        <span style={{ fontSize: '16px', lineHeight: 1.5, letterSpacing: '-0.1px', color: 'rgb(59, 65, 68)', marginLeft: '2px' }}> 7,039 sqft </span>
      </BdBaContainer>
    </HomeInfoContainer>
  </FooterContainer>
);

export default HomeInfo;
