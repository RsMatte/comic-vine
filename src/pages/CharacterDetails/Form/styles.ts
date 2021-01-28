import styled from 'styled-components';

export const Form = styled.form`
  max-width: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 40px;

  > button {
    width: 20%;
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

export const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  margin-bottom: 30px;

  > input {
    height: 60px;
    padding: 0 24px;
    border: 1px solid black;
    border-radius: 5px;
    color: #3a3a3a;
  }

  > select {
    font-size: 18px;
    height: 60px;
    padding: 0 24px;
    border: 1px solid black;
    border-radius: 5px;
  }
`;

export const ErrorMessage = styled.div`
  color: red;
`;
