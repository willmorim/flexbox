import React from 'react';

import {
  Container,
  ProfileData,
  InfoProfile,
  Place,
  Url,
  Joined,
  Born,
  Footer,
  Followers,
  Circles,
  CirclesContent,
  Images,
  Photos,
  PhotosContent,
} from './styles';

import profileImg from '../../assets/avatar.png';
import placeImg from '../../assets/place.svg';
import urlImg from '../../assets/url.svg';
import joinedImg from '../../assets/joined.svg';
import bornImg from '../../assets/born.svg';
import followersImg from '../../assets/followers.svg';
import widgetImg from '../../assets/images.svg';

const Profile: React.FC = () => {
  return (
    <Container>
      <ProfileData>
        <img src={profileImg} alt="William Amorim" />
        <h1>William Amorim</h1>
        <span>@Exibit</span>
        <p>ReactJS, React Native, NodeJS & Gamer</p>
      </ProfileData>

      <InfoProfile>
        <Place>
          <img src={placeImg} alt="Place" />
          <span>Sumré, São Paulo</span>
        </Place>
        <Url>
          <img src={urlImg} alt="URL" />
          <span>exibit.be</span>
        </Url>
        <Joined>
          <img src={joinedImg} alt="Joined" />
          <span>Joined July 2012</span>
        </Joined>
        <Born>
          <img src={bornImg} alt="Born" />
          <span>Born the 20th of June 1995</span>
        </Born>
      </InfoProfile>

      <Footer>
        <Followers>
          <img src={followersImg} alt="Followers" />
          <span>100 followers that you know</span>

          <Circles>
            <CirclesContent />
            <CirclesContent />
            <CirclesContent />
            <CirclesContent />
            <CirclesContent />
            <CirclesContent />
            <CirclesContent />
            <CirclesContent />
            <CirclesContent />
            <CirclesContent />
            <CirclesContent />
            <CirclesContent />
          </Circles>
        </Followers>
        <Images>
          <img src={widgetImg} alt="Images" />
          <span>266 Photos and videos</span>

          <Photos>
            <PhotosContent />
            <PhotosContent />
            <PhotosContent />
            <PhotosContent />
            <PhotosContent />
            <PhotosContent />
          </Photos>
        </Images>
      </Footer>
    </Container>
  );
};

export default Profile;
