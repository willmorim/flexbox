import React from 'react';

import MenuHeader from '../../components/MenuHeader';
import BarInfoAccount from '../../components/BarInfoAccount';
import Profile from '../../components/Profile';
import Timeline from '../../components/Timeline';
import Widgets from '../../components/Widgets';

import { Container } from './styled';

const Feed: React.FC = () => {
  return (
    <>
      <MenuHeader />
      <BarInfoAccount />
      <Container>
        <Profile />
        <Timeline />
        <Widgets />
      </Container>
    </>
  );
};

export default Feed;
