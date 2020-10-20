import React from 'react';
import IWeatherData from '../../interfaces/IWeatherData';
import { Container } from './styles';

interface NextDaysListProps {
  list : IWeatherData[];
}

const NextDaysList: React.FC<NextDaysListProps> = ({ list, ...props }) => {
  return (
    <>
      {list.map(day => (
      <Container key={day.week}>
        <h1>{day.week}</h1>
        <p>{day.temperature}°</p>
        <div>
          <img src={`http://openweathermap.org/img/wn/${day.icon}.png`} />
          <p>{day.description}</p>
        </div>
      </Container>
      ))}
    </>
  );
}

export default NextDaysList;