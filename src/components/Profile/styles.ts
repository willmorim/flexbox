import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1170px;
  /* margin: 0 auto; */
  /* display: flex; */
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding: 0 30px;
  /* padding-left: 285px; */
  width: 270px;
`;

export const ProfileData = styled.div`
  img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 5px solid #fff;
    margin-top: -130px;
  }

  h1 {
    font-size: 21px;
    color: #1f2226;
    margin-top: 10px;
  }

  span {
    font-size: 14px;
    color: #53626c;
  }

  p {
    font-size: 14px;
    color: #1f2226;
    margin-top: 15px;
  }
`;

export const InfoProfile = styled.div`
  font-size: 14px;
  color: #657786;
  align-items: center;
  margin-top: 20px;

  img {
    margin-right: 10px;
  }
`;

export const Place = styled.div`
  display: flex;
`;

export const Url = styled.div`
  display: flex;
  margin-top: 5px;
`;

export const Joined = styled.div`
  display: flex;
  margin-top: 5px;
`;

export const Born = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
`;

export const Footer = styled.div`
  /* margin-top: 20px; */
  font-weight: normal;
  color: #3bb9e3;
  font-size: 14px;

  img {
    margin-right: 5px;
  }
`;

export const Followers = styled.div`
  align-items: center;
  margin-top: 30px;
`;

export const Circles = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const CirclesContent = styled.div`
  width: 45px;
  height: 45px;
  background: #d0d5d9;
  border-radius: 50%;
  margin-right: 5px;
  margin: 5px 5px 5px 0;
  flex-grow: 1;
`;

export const Images = styled.div`
  align-items: center;
  margin-top: 30px;
`;

export const Photos = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const PhotosContent = styled.div`
  width: 80px;
  height: 80px;
  background: #d0d5d9;
  border-radius: 8px;
  margin-right: 5px;
  margin: 5px 5px 5px 0;
  flex-grow: 1;
`;
