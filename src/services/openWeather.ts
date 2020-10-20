import axios, { AxiosResponse } from 'axios';

interface IParams {
  success(data: any) : void;
  error?(cod: string, msg: string) : Promise<void> | void;
}

const axiosApi = axios.create();


export const getWeatherNow = async (params: IParams) => {
  await axiosApi.request({
    url : 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=dd51937cfd70ea0c568862114ee3d432&units=metric',
  }).then((response : AxiosResponse) => {
    params.success(String(response.data.main.temp).split('.')[0]);
  }).catch(error => {
    if (params.error) {
      params.error(error.response.data.status, error.response.data.erro);
    }
  });
}


export const getWeatherNextDays = async (params: IParams) => {
  await axiosApi.request({
    url : 'http://api.openweathermap.org/data/2.5/forecast?q=London,uk&APPID=dd51937cfd70ea0c568862114ee3d432&units=metric',
  }).then((response : AxiosResponse) => {

    const daysOfWeek = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
    const newList    = new Array();
    const now        = new Date().getDay();
    const control    = [now];

    response.data.list.map((item: any) => {

      const currentWeekday = new Date(item.dt * 1000).getDay();

      if (control.every(element => {
        return element !== currentWeekday;
      })) {
        newList.push({
          week        : daysOfWeek[currentWeekday],
          temperature : String(item.main.temp).split('.')[0],
          description : item.weather[0].description,
          icon        : item.weather[0].icon,
        });
      }

      control.push(currentWeekday);
    });

    params.success(newList);

  }).catch(error => {
    if (params.error) {
      params.error(error.response.data.status, error.response.data.erro);
    }
  });
}