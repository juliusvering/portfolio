import React, { Component } from 'react';
import './App.css';
import ImageFeed from './components/ImageFeed';
import Header from './components/Header'
import Footer from './components/Footer'
import { Box, Text, Flex } from 'rebass';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Flex justifyContent='center' flexWrap='nowrap'>
          <Box p={5} bg='white' color='#373543' width={[0.9, 0.8, 0.5]}>
            <Text fontSize={5} fontWeight='bold'>
              welcome to julius vering's design portfolio page.
            </Text>
          </Box>
        </Flex>
        <ImageFeed />
        <Footer />
        </div>
    );
  }
}

export default App;
