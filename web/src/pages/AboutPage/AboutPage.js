import BasicLayout from 'src/layouts/BasicLayout'

const AboutPage = () => {
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
      <div className="container justify-center max-w-screen-sm mx-auto">
        <div className="bg-green-400 rounded mt-4 p-2">
          <h1 className="text-xl font-bold">Air Quality 101</h1>
          <p className="leading-relaxed">
            The EPA developed the AQI, which reports levels of ozone, particle
            pollution, and other common air pollutants on the same scale. An AQI
            reading of 101 corresponds to a level above the national air quality
            standard - the higher the AQI rating, the greater the health impact.
          </p>
        </div>
        <div className="bg-blue-300 rounded mt-4 p-2">
          <h2 className="text-xl font-bold">AQI Colors</h2>
          <p className="leading-relaxed">
            The AQI is divided into color-coded categories and each category is
            identified by a simple informative descriptor. The descriptors are
            intended to convey information to the public about how air quality
            relates to public health. The table below defines the AQI
            categories.
          </p>
        </div>
        <table className="mt-4 border table-auto">
          <thead>
            <tr>
              <th className="px-4 border py-2">AQI Number</th>
              <th className="px-4 border py-2">AQI Category</th>
              <th className="px-4 border py-2">AQI Color</th>
              <th className="px-4 border py-2">Category Number</th>
            </tr>
          </thead>
          <tbody>{tableData.map((row) => generateRow(row))}</tbody>
        </table>
      </div>
    </BasicLayout>
  )
}

export default AboutPage
