import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 35px;
  color: #3a3a3a;
  line-height: 56px;

  margin-top: 80px;
`;

export const Form = styled.form`
  margin-top: 40px;
  max-width: 700px;

  display: flex;

  > input {
    flex: 1;
    height: 60px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;

    border: 2px solid #fff;
    border-right: 0;

    &::placeholder {
      color: #a8a8b3;
    }
  }

  > button {
    width: 210px;
    height: 60px;
    background: #f00;
    border-radius: 0px 5px 5px 0px;
    border: 0px;
    color: #fff;
    font-weight: bold;

    transition: background-color 0.2s;

    &:hover {
      background: #ffa500;
    }
  }
`;

export const NumberOfResults = styled.div`
  color: #a8a8b3;
  margin-top: 30px;
`;

export const Characters = styled.div`
  margin-top: 10px;
  max-width: 700px;
  > a div,
  a img {
    transition: 0.2s;
    &:hover {
      transform: translateX(10px);
    }
  }
  > a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;
    display: flex;
    align-items: center;
    & + a {
      margin-top: 16px;
    }
    > img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
      border: 1px solid red;
    }
    > p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    > div {
      flex: 1;
      margin: 0 30px;
      > strong {
        font-size: 23px;
        color: #3d3d4d;
      }
    }
  }
`;