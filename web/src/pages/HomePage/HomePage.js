import BasicLayout from 'src/layouts/BasicLayout'
import { Form, TextField, Submit } from '@redwoodjs/web'
import { useState } from 'react'
import WeatherCell from 'src/components/WeatherCell'
import QualityCell from 'src/components/QualityCell'

const HomePage = () => {
  const [zip, setZip] = useState()

  const onSubmit = (data) => {
    setZip(data.zip)
  }

  const tableData = [
    {
      number: '0 - 50',
      category: 'Good',
      color: '#00e400',
      categoryNumber: '1',
    },
    {
      number: '51 - 100',
      category: 'Moderate',
      color: '#ffff00',
      categoryNumber: '2',
    },
    {
      number: '101 - 150',
      category: 'Unhealthy for Sensitive Groups',
      color: '#ff7e00',
      categoryNumber: '3',
    },
    {
      number: '151 - 200',
      category: 'Unhealthy',
      color: '#ff0000',
      categoryNumber: '4',
    },
    {
      number: '201 - 300',
      category: 'Very Unhealthy',
      color: '#8f3f97',
      categoryNumber: '5',
    },
    {
      number: '301 - 500',
      category: 'Hazardous',
      color: '#7e0023',
      categoryNumber: '6',
    },
  ]

  const generateRow = (row) => {
    return (
      <tr>
        <th className="border px-4 py-2">{row.number}</th>
        <th className="border px-4 py-2">{row.category}</th>
        <th style={{ background: row.color }} className="border px-4 py-2">
          {row.color}
        </th>
        <th className="border px-4 py-2">{row.categoryNumber}</th>
      </tr>
    )
  }

  return (
    <BasicLayout>
      <div className="max-w-screen-sm justify-center container text-center mx-auto">
        <div className="p-4">
          <span className="rounded block text-gray-700 text-center px-4 py-2">
            <h1 className="text-6xl font-extrabold">AirQ</h1>
            <p>whats your air quality?</p>
          </span>
          <span className="block text-gray-700 text-center justify-center rounded px-4 py-2 mt-2">
            <div>
              <Form className="flex" onSubmit={onSubmit}>
                <TextField
                  className="appearance-none block w-full mr-2 text-gray-700 border rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white"
                  name="zip"
                  placeholder="zip code"
                  maxLength="5"
                  validation={{ required: true, pattern: /^\d{5}$/ }}
                />
                <Submit className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Submit
                </Submit>
              </Form>
            </div>
          </span>
          <div className="justify-center">
            {zip && <WeatherCell zip={zip} />}
            {zip && <QualityCell zip={zip} />}
          </div>
        </div>
        <span>
          data from{' '}
          <a
            className="mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-blue-500"
            rel="noreferrer"
            target="_blank"
            href="https://www.airnow.gov/"
          >
            airnow.gov
          </a>{' '}
          and{' '}
          <a
            className="mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-blue-500"
            rel="noreferrer"
            target="_blank"
            href="hhttps://openweathermap.org/"
          >
            openweathermap.org
          </a>
        </span>
      </div>
    </BasicLayout>
  )
}

export default HomePage
