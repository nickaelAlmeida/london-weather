import React, { useEffect, useCallback, useState } from 'react';
import { getWeatherNow, getWeatherNextDays } from './services/openWeather';
import IWeatherData from './interfaces/IWeatherData';

import Clock from './components/Clock';
import Progressbar from './components/Progressbar';
import NextDaysList from './components/NextDaysList';

import GlobalStyle, { Header } from './styles/global';


const App: React.FC = () => {

  const [seconds, setSeconds]                       = useState(60);
  const [currentTemperature, setCurrentTemperature] = useState('-');
  const [nextDays, setNextDays]                     = useState<IWeatherData[]>([]);


  useEffect(() => {
    updateWeather();
  }, []);

  useEffect(() => {
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    } else {
      updateWeather();
      setSeconds(60);
    }
  }, [seconds]);

  const updateWeather = useCallback(async () => {
    await getWeatherNow({
      success : async (temp) => {
        setCurrentTemperature(temp);
      }
    });

    await getWeatherNextDays({
      success : async (nextDaysList) => {
        setNextDays(nextDaysList);
      }
    });
  }, []);


  return (
    <>
      <Header>
        <h1>LONDON</h1>
        <Clock />
        <div>{currentTemperature}°</div>
      </Header>

      <Progressbar seconds={seconds} />
      <NextDaysList list={nextDays} />

      <GlobalStyle />
    </>
  );
}

export default App;