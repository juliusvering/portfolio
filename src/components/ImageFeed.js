import React from 'react';
import Item from './Item';
import { Text, Box, Flex } from 'rebass';
import personal1 from '../img/personal1.png'
import personal2 from '../img/personal2.png'
import haendlr1 from '../img/haendlr1.png'
import haendlr2 from '../img/haendlr2.png'
import haendlr3 from '../img/haendlr3.png'
import guse1 from '../img/screen1.PNG'
import guse2 from '../img/screen2.PNG'
import guse3 from '../img/screen4.PNG'


const ImageFeed = function (props) {
  return (
    <div>
      <Flex justifyContent='center' flexWrap='nowrap'>
        <Box p={4} pt={5} bg='white' color='#373543' width={[0.9, 0.8, 0.5]}>
          <Text fontSize={4} fontWeight='bold'>
            web shop: händlr.
          </Text>
        </Box>
      </Flex>
      <Item imagePath={haendlr1} text="this is a screenshot of a webshop i built. i used Typescript and React for the frontend.
      further customizations were made using CSS and html." />
      <Item imagePath={haendlr3} text="the design is responsive, i.e. it adjusts to various screen sizes. the page itself is in german, for
      a german audience. however, the shown articles come from a database in english and therefore have english properties." />
      <Item imagePath={haendlr2} text="the entire application follows the same color and font scheme. furthermore, all text containers
      look the same, creating unity within the web application." />
      <Flex justifyContent='center' flexWrap='nowrap'>
        <Box p={4} pt={5} bg='white' color='#373543' width={[0.9, 0.8, 0.5]}>
          <Text fontSize={4} fontWeight='bold'>
            personal website.
          </Text>
        </Box>
      </Flex>
      <Item imagePath={personal1} text="this is a screenshot of my personal website. the main site
        shows miniature views of my projects. i built it using Javascript and React.
      i also customized the site further using html and CSS." />
      <Item imagePath={personal2} text="this is another screenshot from my personal website.
        it was taken from the detailed post view, which is shown as the user selects one of the posts. throughout the entire
      website, i used the material design principles." />
      <Flex justifyContent='center' flexWrap='nowrap'>
        <Box p={4} pt={5} bg='white' color='#373543' width={[0.9, 0.8, 0.5]}>
          <Text fontSize={4} fontWeight='bold'>
            web app: guse.
          </Text>
        </Box>
      </Flex>
      <Item imagePath={guse3} text="this is a screenshot of a web app i built using React and Javascript. again, the site follows a unified
      design concept, in colors, fonts and structural elements." />
      <Item imagePath={guse2} text="the web app takes in user input to assemble a personalized investment portfolio.
      the purpose of the platform is to help non-finance experts make sound personal finance decisions." />
      <Item imagePath={guse1} text="me and my team built this as a part of a hackathon project at Calhacks, the world's largest collegiate
      hackathon. with the app, we won the IBM challenge, against over 2,000 competitors." />
    </div>
  );
};

export default ImageFeed;
