import React from 'react';
import styled from 'styled-components';

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
  cursor: pointer;
  outline: 0;
`;

class SaveButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      saved: false,
    };
  }

  render() {
    if (!this.state.saved) {
      return (
        <SSButton style={{ marginLeft: '10px' }} onClick={() => this.setState({ saved: !this.state.saved })}>
          <svg className="svg" position="absolute" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px">
            <path d="M26.95 11.863a5.214 5.214 0 0 0-8.908-3.677l-1.908 1.908-1.906-1.908a5.214 5.214 0 1 0-7.377 7.366l1.912 1.913 7.371 7.373 7.373-7.373 1.912-1.912a5.193 5.193 0 0 0 1.53-3.69zM16.157 6.31A7.874 7.874 0 1 1 27.3 17.433l-1.913 1.913-9.254 9.254-1.88-1.88-7.373-7.374-1.91-1.91a7.874 7.874 0 1 1 11.137-11.13l.027.025.022-.022z" fill="#007882" />
          </svg>
          &nbsp;&nbsp;Save
        </SSButton>
      );
    }
    return (
      <SSButton style={{ marginLeft: '10px' }} onClick={() => this.setState({ saved: !this.state.saved })}>
        <svg className="svg" position="absolute" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" width="24px" height="24px">
          <path d="M16.157 6.31A7.874 7.874 0 1 1 27.3 17.433l-1.913 1.912-9.254 9.254-1.88-1.88-7.373-7.374-1.91-1.91a7.874 7.874 0 1 1 11.137-11.13l.027.025.022-.022z" fill="#ff0000" />
        </svg>
        &nbsp;&nbsp;Save
      </SSButton>
    );
  }
}

export default SaveButton;
