import React from 'react';

import {
  Container,
  Content,
  Follow,
  Title,
  ContainerList,
  Profile,
  Info,
  Button,
} from './styles';

import avatarImg from '../../assets/avatar.png';

const Widgets: React.FC = () => {
  return (
    <Container>
      <Content>
        <Follow>
          <Title>
            <strong>Who to follow</strong>
            <a href="/#">Refresh</a>
            <a href="/#">View all</a>
          </Title>

          <ContainerList>
            <Profile>
              <img src={avatarImg} alt="Avatar" />
              <Info>
                <strong>
                  Spade
                  <span>@spade_be</span>
                </strong>
                <Button>Follow</Button>
              </Info>
            </Profile>
            <a href="/#">x</a>
          </ContainerList>

          <ContainerList>
            <Profile>
              <img src={avatarImg} alt="Avatar" />
              <Info>
                <strong>
                  Spade
                  <span>@spade_be</span>
                </strong>
                <Button>Follow</Button>
              </Info>
            </Profile>
            <a href="/#">x</a>
          </ContainerList>

          <ContainerList>
            <Profile>
              <img src={avatarImg} alt="Avatar" />
              <Info>
                <strong>
                  Spade
                  <span>@spade_be</span>
                </strong>
                <Button>Follow</Button>
              </Info>
            </Profile>
            <a href="/#">x</a>
          </ContainerList>
        </Follow>
      </Content>
    </Container>
  );
};

export default Widgets;
