import { Form, TextField, Submit } from '@redwoodjs/web'
import { useState } from 'react'
import WeatherCell from 'src/components/WeatherCell'
import BasicLayout from 'src/layouts/BasicLayout'
import QualityCell from 'src/components/QualityCell'

const WeatherPage = () => {
  const [zip, setZip] = useState()

  const onSubmit = (data) => {
    setZip(data.zip)
  }

  return (
    <BasicLayout>
      <Form onSubmit={onSubmit} style={{ fontSize: '2rem' }}>
        <TextField
          name="zip"
          placeholder="Zip code"
          maxLength="5"
          validation={{ required: true, pattern: /^\d{5}$/ }}
        />
        <Submit>Go</Submit>
      </Form>
      {zip && <WeatherCell zip={zip} />}
      {zip && <QualityCell zip={zip} />}
    </BasicLayout>
  )
}

export default WeatherPage
