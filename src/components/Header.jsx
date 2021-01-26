import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
`;

const LeftArrow = () => (
  <svg className="svg" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" cursor="pointer">
    <path d="M9.716 17.1l5.11 5.776-1.993 1.763-7.725-8.731 7.693-9.005 2.022 1.728-4.963 5.81h16.385v2.66H9.715z" fill="#007882" />
  </svg>
);

const GreaterThan = () => (
  <svg className="svg" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" width="16px" height="16px">
    <path d="M17.65 16.513l-7.147-7.055 1.868-1.893 9.068 8.951-9.069 8.927-1.866-1.896z" fill="#869099" />
  </svg>
);

const Header = () => (
  <HeaderContainer>
    <LeftArrow />
    <span style={{ color: 'rgb(0, 120, 130)', fontWeight: 'bold', marginLeft: '4px', fontSize: '14px', cursor: 'pointer' }}>Back to Search&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
    <span style={{ color: 'rgb(134, 144, 153)', fontSize: '14px' }}>For Sale</span>
    <GreaterThan />
    <span style={{ color: 'rgb(0, 120, 130)', fontSize: '14px', cursor: 'pointer' }}>CA</span>
    <GreaterThan />
    <span style={{ color: 'rgb(0, 120, 130)', fontSize: '14px', cursor: 'pointer' }}>San Francisco</span>
    <GreaterThan />
    <span style={{ color: 'rgb(0, 120, 130)', fontSize: '14px', cursor: 'pointer' }}>94123</span>
    <GreaterThan />
    <span style={{ color: 'rgb(134, 144, 153)', fontSize: '14px' }}>435 Marina Blvd</span>
  </HeaderContainer>
)

export default Header;
