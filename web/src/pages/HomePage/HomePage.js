import BasicLayout from 'src/layouts/BasicLayout'

const HomePage = () => {
  return (
    <BasicLayout>
      <div className="container mx-auto">
        <h1 className="text-lg font-bold">Mintbean Hackathon 6-22</h1>
        <p className="text-md font-hairline">Weatherhack</p>
        <div className="bg-gray-200 p4"></div>
      </div>
    </BasicLayout>
  )
}

export default HomePage
