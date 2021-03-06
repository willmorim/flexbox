import React from 'react';

import {
  Container,
  Header,
  MenuItems,
  MenuSearch,
  Button,
  Home,
  Notifications,
  Messages,
  Banner,
} from './styles';

import logoImg from '../../assets/logo.svg';
import avatarImg from '../../assets/avatar.png';
import homeImg from '../../assets/home.svg';
import notificationImg from '../../assets/notification.svg';
import messageImg from '../../assets/message.svg';

const MenuHeader: React.FC = () => {
  return (
    <>
      <Header>
        <Container>
          <MenuItems>
            <Home>
              <img src={homeImg} alt="Home" />
              Home
            </Home>
            <Notifications>
              <img src={notificationImg} alt="Notifications" />
              Notifications
            </Notifications>
            <Messages>
              <img src={messageImg} alt="Messages" />
              Messages
            </Messages>
          </MenuItems>

          <img src={logoImg} alt="Logo Twitter" />

          <MenuSearch>
            <input type="text" placeholder="Search on Twitter" />
            <img src={avatarImg} alt="Avatar" />
            <Button>Tweet</Button>
          </MenuSearch>
        </Container>
      </Header>
      <Banner>
        <h1>Twitter do William</h1>
      </Banner>
    </>
  );
};

export default MenuHeader;
