import styled from 'styled-components';

export const Bar = styled.div`
  height: 59px;
  background: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);
`;

export const Container = styled.div`
  max-width: 1170px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding: 0 30px;
  padding-left: 285px;
`;

export const InfoBar = styled.div`
  display: flex;
  align-items: center;
  padding: 0 15px;
  height: 100%;
`;

export const Tweets = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 15px;
  position: relative;
  height: 100%;

  ::after {
    content: '';
    width: 100%;
    height: 2px;
    background: #3bb9e3;
    left: 0;
    bottom: 0;
    position: absolute;
  }

  span {
    color: #667580;
    font-size: 12px;
    font-weight: bold;
  }

  strong {
    color: #667580;
    font-size: 18px;
    font-weight: bold;
    margin-top: 2px;
    color: #3bb9e3;
  }
`;

export const Followings = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 15px;

  span {
    color: #667580;
    font-size: 12px;
    font-weight: bold;
  }

  strong {
    color: #667580;
    font-size: 18px;
    font-weight: bold;
    margin-top: 2px;
  }
`;

export const Followers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 15px;

  span {
    color: #667580;
    font-size: 12px;
    font-weight: bold;
  }

  strong {
    color: #667580;
    font-size: 18px;
    font-weight: bold;
    margin-top: 2px;
  }
`;

export const Favorites = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 15px;

  span {
    color: #667580;
    font-size: 12px;
    font-weight: bold;
  }

  strong {
    color: #667580;
    font-size: 18px;
    font-weight: bold;
    margin-top: 2px;
  }
`;

export const Lists = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 15px;

  span {
    color: #667580;
    font-size: 12px;
    font-weight: bold;
  }

  strong {
    color: #667580;
    font-size: 18px;
    font-weight: bold;
    margin-top: 2px;
  }
`;

export const Moments = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 15px;

  span {
    color: #667580;
    font-size: 12px;
    font-weight: bold;
  }

  strong {
    color: #667580;
    font-size: 18px;
    font-weight: bold;
    margin-top: 2px;
  }
`;

export const Actions = styled.div`
  display: flex;
`;

export const Button = styled.button`
  height: 34px;

  align-items: center;
  justify-content: center;

  width: 90px;
  font-weight: bold;
  font-size: 14px;
  color: #3bb9e3;
  border: 1px solid #3bb9e3;
  border-radius: 16px;

  margin-right: 20px;
`;
