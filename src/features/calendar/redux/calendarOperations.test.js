import * as calendarOperations from './calendarOperations';
import * as calendarActions from './calendarActions';

describe('Calendar - Operations', () => {
  it('should get weather for city', async () => {
    const cityName = 'Miami';

    const dispatch = jest.fn();

    await calendarOperations.getWeatherForCity(cityName)(dispatch);

    expect(dispatch.mock.calls.length).toBe(4);

    const setLoadingDispatchOne = dispatch.mock.calls[0][0];
    expect(setLoadingDispatchOne.type).toBe(calendarActions.setIsLoading().type);

    const setCurrentWeatherDispatch = dispatch.mock.calls[1][0];
    expect(setCurrentWeatherDispatch.type).toBe(calendarActions.setCurrentWeather().type);

    const setWeatherServiceErrorDispatch = dispatch.mock.calls[2][0];
    expect(setWeatherServiceErrorDispatch.type).toBe(calendarActions.setWeatherServiceError().type);

    const setLoadingDispatchTwo = dispatch.mock.calls[3][0];
    expect(setLoadingDispatchTwo.type).toBe(calendarActions.setIsLoading().type);
  });
});
