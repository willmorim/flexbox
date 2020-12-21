import styled from 'styled-components';
import search from '../../assets/search.svg';

export const Container = styled.div`
  max-width: 1170px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding: 0 30px;
`;

export const Header = styled.div`
  height: 46px;
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);
`;

export const MenuItems = styled.div`
  display: flex;
  align-items: center;
`;
export const Home = styled.div`
  display: flex;
  align-items: center;
  font-size: 13px;
  color: #667580;
  font-weight: bold;

  img {
    margin-right: 7px;
  }
`;
export const Notifications = styled.div`
  display: flex;
  align-items: center;
  font-size: 13px;
  color: #667580;
  font-weight: bold;
  margin-left: 30px;

  img {
    margin-right: 7px;
  }
`;
export const Messages = styled.div`
  display: flex;
  align-items: center;
  font-size: 13px;
  color: #667580;
  font-weight: bold;
  margin-left: 30px;

  img {
    margin-right: 7px;
  }
`;
export const MenuSearch = styled.div`
  display: flex;

  input {
    width: 220px;
    border: 1px solid #e6ecf0;
    height: 34px;
    padding: 0 30px 0 12px;
    border-radius: 16px;
    color: #667581;
    font-size: 12px;
    background: #f5f8fa url(${search}) no-repeat 190px center;
  }

  img {
    height: 34px;
    width: 34px;
    border-radius: 50%;
    margin: 0 15px;
  }
`;
export const Button = styled.button`
  height: 34px;
  background: #3bb9e3;

  align-items: center;
  justify-content: center;

  width: 90px;
  font-weight: bold;
  font-size: 14px;
  color: #fff;
  border: 0;
  border-radius: 16px;
`;
