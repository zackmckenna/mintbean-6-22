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

  return (
    <BasicLayout>
      <div className="max-w-screen-sm justify-center container text-center mx-auto">
        <div className="p-4">
          <span className="rounded block text-gray-700 text-center bg-gray-400 px-4 py-2">
            <h1 className="text-6xl font-extrabold">AirQ</h1>
            <p>whats your air quality?</p>
          </span>
          <span className="block text-gray-700 text-center rounded bg-gray-400 px-4 py-2 mt-2">
            <div>
              <Form className="flex" onSubmit={onSubmit}>
                <TextField
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white"
                  name="zip"
                  placeholder="Zip code"
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
        <a
          className="block mt-4 lg:inline-block lg:mt-0 text-gray-600 hover:text-blue-500 mr-4"
          rel="noreferrer"
          target="_blank"
          href="https://www.airnow.gov/"
        >
          data from AirNow.gov
        </a>
      </div>
    </BasicLayout>
  )
}

export default HomePage
