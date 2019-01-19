import React, { Component } from 'react';
import { Flex, Card, Image, Text } from 'rebass';


function Item (props) {
  return (<Flex>
    <Card
      width={[0.9, 0.8, 0.5]}
      mx='auto'
      my={2}
      p={4}
      color='#373543'
    boxShadow='0 2px 16px rgba(0, 0, 0, 0.25)'>
      <Image
        src={props.imagePath}
        borderRadius={7}
      />
      <Text fontSize={2} mt={2}>
        {props.text}
      </Text>
    </Card>
  </Flex>);
};

export default Item;
