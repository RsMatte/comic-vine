import styled from 'styled-components';

export const DescriptionWrapper = styled.div`
  text-align: justify;
  color: black;
  max-width: 700px;

  > h1, h2, h3 {
    margin: 20px 0;
  }

  > p {
    > a {
      text-decoration: none;
    }
  }

  > figure {
    margin-bottom: 20px;
  }
`;
