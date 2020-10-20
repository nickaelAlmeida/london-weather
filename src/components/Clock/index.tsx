import React, { useEffect, useCallback, useState } from 'react';
import { Container } from './styles';


const Clock: React.FC = () => {

  const [now, setNow] = useState('');

  useEffect(() => {
    updateTime();
  });

  const updateTime = useCallback(() => {
    const date = new Date();
    setNow((date.getHours() < 10 ? '0' : '') + date.getHours() + ':' + (date.getMinutes() < 10 ? '0' : '') + date.getMinutes());
    setTimeout(() => { updateTime(); }, 1000);
  }, []);

  return (
    <Container>{now} GMT</Container>
  );
}

export default Clock;