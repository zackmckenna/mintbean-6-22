import fetch from 'node-fetch'

export const getQuality = async ({ zip }) => {
  const response = await fetch(
    `http://www.airnowapi.org/aq/forecast/zipCode/?format=application/json&zipCode=${zip}&date=2020-06-24&distance=25&API_KEY=5DBA34CF-223A-4431-8A57-8907908C7E43`
  )
  const json = await response.json()

  return {
    zip,
    aqi: json[0].AQI,
    discussion: json[0].Discussion,
}
