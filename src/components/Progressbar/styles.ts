import styled from 'styled-components';

interface BarProps {
  progress: number;
}


export const Container = styled.div`

  padding: 15px;
  background-color: #32353E;

  p {
    margin: 0px 0px 5px 15px;
    font-size: 15px;
  }

  > div {

    border-width: 4px;
    border-color: #25282F;
    border-style: solid;
    border-radius: 14px;
  }
`;


export const Bar = styled.div<BarProps>`

  width: ${(props) => ((60 - props.progress) * 1.66)}%;
  height: 20px;

  margin: 1px;
  transition: 1s;

  border-radius: 12px;
  background-color: #F49C07;
`;