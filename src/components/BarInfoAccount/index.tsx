import React from 'react';

import {
  Bar,
  Container,
  InfoBar,
  Tweets,
  Followings,
  Followers,
  Favorites,
  Lists,
  Moments,
  Actions,
  Button,
} from './styles';

import moreImg from '../../assets/more.svg';

const BarInfo: React.FC = () => {
  return (
    <Bar>
      <Container>
        <InfoBar>
          <Tweets>
            <span>Tweets</span>
            <strong>3931</strong>
          </Tweets>
          <Followings>
            <span>Followings</span>
            <strong>654</strong>
          </Followings>
          <Followers>
            <span>Followers</span>
            <strong>387</strong>
          </Followers>
          <Favorites>
            <span>Favorites</span>
            <strong>265</strong>
          </Favorites>
          <Lists>
            <span>Lists</span>
            <strong>8</strong>
          </Lists>
          <Moments>
            <span>Moments</span>
            <strong>0</strong>
          </Moments>
        </InfoBar>

        <Actions>
          <Button>Follow</Button>
          <img src={moreImg} alt="More" />
        </Actions>
      </Container>
    </Bar>
  );
};

export default BarInfo;
