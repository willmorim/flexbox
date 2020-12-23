import styled from 'styled-components';

export const Container = styled.div`
  width: 290px;
  margin-top: 10px;
`;

export const Content = styled.div`
  /* background: #fff;
  padding: 15px; */
`;

export const Follow = styled.div`
  background: #fff;
  padding: 15px;
  margin-top: 10px;
`;

export const Title = styled.div`
  display: flex;
  align-items: baseline;

  strong {
    font-size: 18px;
    color: #1f2226;
  }

  a {
    color: #3bb9e3;
    font-size: 12px;
    text-decoration: none;
    position: relative;
    padding-left: 10px;
  }

  a::before {
    content: '';
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background: #222;
    margin-left: 5px;
    margin-right: 5px;
    position: absolute;
    left: 0;
    top: 6px;
  }
`;

export const ContainerList = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ccd6dd;
  padding-bottom: 10px;
  margin-bottom: 10px;
  margin-top: 10px;

  > a {
    color: #ccd6dd;
    text-decoration: none;
    font-size: 14px;
  }

  :last-child {
    margin-bottom: 0;
    padding-bottom: 0;
    border: 0;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
  }
`;

export const Info = styled.div`
  margin-left: 10px;
  display: flex;
  flex-direction: column;

  strong {
    font-size: 14px;
    color: #1f2326;
  }

  span {
    margin-left: 5px;
    font-weight: normal;
    color: #9a9a9a;
  }
`;

export const Button = styled.div`
  height: 27px;
  margin-top: 4px;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 90px;
  font-weight: bold;
  font-size: 14px;
  color: #3bb9e3;
  border: 1px solid #3bb9e3;
  border-radius: 16px;
`;
