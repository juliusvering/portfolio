import React from 'react';
import { Flex, Text, Link, Box} from 'rebass';

const Header = function (props) {
  return (<Flex
    px={2}
    color='white'
    bg='#373543'
          alignItems='center'>
    <Text p={2} fontWeight='bold'>julius vering.</Text>
    <Box mx='auto' />
    <Link
      href='https://www.github.com/juliusvering'
      p={2}
    color='white'>
      github.
    </Link>
    <Link
      href='https://www.linkedin.com/in/julius-vering'
      p={2}
    color='white'>
      linkedin.
    </Link>
    <Link
      href='https://www.juliusvering.com'
      p={2}
    color='white'>
      personal website.
    </Link>
    <Link
      href='mailto:julius.vering@berkeley.edu'
      p={2}
    color='white'>
      email.
    </Link>
  </Flex>);
};

export default Header;
