import styled from 'styled-components';


export const Container = styled.div`

  display: flex;

  justify-content: space-between;
  align-items: center;

  margin: 5px;
  padding: 10px 20px;

  border-radius: 5px;
  background-color: #58595D;


  h1 {
    width: 100px;
  }

  > p {
    font-size: 40px;
  }

  div {
    flex: 1;
    text-align: right;
  }

  div p {
    font-size: 14px;
    text-transform: uppercase;
  }
`;