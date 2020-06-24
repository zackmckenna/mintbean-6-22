import BasicLayout from 'src/layouts/BasicLayout'

const AboutPage = () => {
  const tableData = [
    {
      number: '0 - 50',
      category: 'Good',
      color: '00e400',
      categoryNumber: '1',
    },
    {
      number: '51 - 100',
      category: 'Moderate',
      color: 'ffff00',
      categoryNumber: '2',
    },
  ]

  const generateRow = (row) => {
    return (
      <tr>
        <th className="px-4 py-2">{row.number}</th>
        <th className="px-4 py-2">{row.category}</th>
        <th style={{ color: `${row.color}` }} className="px-4 py-2">
          {row.color}
        </th>
        <th className="px-4 py-2">{row.categoryNumber}</th>
      </tr>
    )
  }

  return (
    <BasicLayout>
      <div>
        <h1>Air Quality 101</h1>
        <p>
          The EPA developed the AQI, which reports levels of ozone, particle
          pollution, and other common air pollutants on the same scale. An AQI
          reading of 101 corresponds to a level above the national air quality
          standard - the higher the AQI rating, the greater the health impact.
        </p>
        <h2>AQI Colors</h2>
        <p>
          The AQI is divided into color-coded categories and each category is
          identified by a simple informative descriptor. The descriptors are
          intended to convey information to the public about how air quality
          relates to public health. The table below defines the AQI categories.
        </p>
        <table className="table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2">AQI Number</th>
              <th className="px-4 py-2">AQI Category</th>
              <th className="px-4 py-2">AQI Color</th>
              <th className="px-4 py-2">Category Number</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row) => generateRow(row))}
            {/* <tr>
              <td className="border px-4 py-2">0 - 50</td>
              <td className="border px-4 py-2">Good</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border px-4 py-2">51 - 100</td>
              <td className="border px-4 py-2">Moderate</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">101 - 150</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">151 - 200</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">201 - 300</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">301 - 500</td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </BasicLayout>
  )
}

export default AboutPage
