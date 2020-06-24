import fetch from 'node-fetch'

export const getQuality = async ({ zip }) => {
  const response = await fetch(
    `http://www.airnowapi.org/aq/forecast/zipCode/?format=application/json&zipCode=${zip}&date=2020-06-24&distance=25&API_KEY=5DBA34CF-223A-4431-8A57-8907908C7E43`
  )
  const json = await response.json()
  const descriptor = (aqi) => {
    if (aqi >= 0 && aqi <= 50) {
      return 'Good'
    }
    if (aqi >= 51 && aqi <= 100) {
      return 'Moderate'
    }
    if (aqi >= 101 && aqi <= 150) {
      return 'Unhealthy for Sensitive Groups'
    }
    if (aqi >= 151 && aqi <= 200) {
      return 'Unhealthy'
    }
    if (aqi >= 201 && aqi <= 300) {
      return 'Very Unhealthy'
    }
    if (aqi >= 301) {
      return 'Hazardous'
    } else {
      return 'No data'
    }
  }

  const color = (aqi) => {
    if (aqi >= 0 && aqi <= 50) {
      return '#00e400'
    }
    if (aqi >= 51 && aqi <= 100) {
      return '#ffff00'
    }
    if (aqi >= 101 && aqi <= 150) {
      return '#ff7e00'
    }
    if (aqi >= 151 && aqi <= 200) {
      return '#ff0000'
    }
    if (aqi >= 201 && aqi <= 300) {
      return '#8f3f97'
    }
    if (aqi >= 301) {
      return '#7e0023'
    } else {
      return '#7e0023'
    }
  }

  return {
    zip,
    aqi: json[0].AQI,
    discussion: json[0].Discussion,
    description: descriptor(json[0].AQI),
    color: color(json[0].AQI),
  }
}
