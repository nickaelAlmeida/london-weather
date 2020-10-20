import React from 'react';
import { Container, Bar } from './styles';

interface ProgressbarProps {
  seconds: number;
}

const Progressbar: React.FC<ProgressbarProps> = ({ seconds, ...props }) => {
  return (
    <Container>
      <p>Reloading in {seconds}s</p>
      <div>
        <Bar progress={seconds}>&nbsp;</Bar>
      </div>
    </Container>
  );
}

export default Progressbar;