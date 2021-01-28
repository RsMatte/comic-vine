import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 40px;
  color: #3a3a3a;
  line-height: 50px;
  max-width: 700px;
  text-align: center;
  margin-top: 80px;
  margin-bottom: 30px;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  max-width: 700px;
  flex-direction: column;
  align-items: center;

  > img {
    max-height: 500px;
    border: 2px solid black;
  }

  > div {
    margin: 30px 0;
    font-weight: 600;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  max-width: 700px;
  margin-bottom: 50px;

  > button {
    width: 30%;
    height: 40px;
    background: #f00;
    border-radius: 5px;
    border: 0px;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      background: #ffa500;
    }
  }
`;
