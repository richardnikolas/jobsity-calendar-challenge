import axios from 'axios';

class CalendarService {
  getWeatherByCity = async cityName => {
    const response = await axios.get(`${window.env.REACT_OPEN_WEATHER_API_URL}?q=${cityName}&appid=${window.env.REACT_OPEN_WEATHER_API_KEY}`)
    return response.data.list[0].weather[0] ?? {};
  };
};


export default new CalendarService();