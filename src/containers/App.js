import React, { Component } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Header from '../components/Header/Header';
import Profile from './Profile';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Nunito", "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  html {
    line-height: 1.6;
}

  h1,
  h2,
  h3,
  h4,
  h5 {
    line-height: 1.2;
  }
`;

const AppWrapper = styled.div`
  text-align: center;
`;

class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <AppWrapper>
          <Header />
          <Profile />
        </AppWrapper>
      </>
    );
  }
}

export default App;
