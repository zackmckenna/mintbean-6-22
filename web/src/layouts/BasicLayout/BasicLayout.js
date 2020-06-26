import { useState } from 'react'
import { Link, routes } from '@redwoodjs/router'

const BasicLayout = ({ children }) => {
  const [toggle, setToggle] = useState(true)

  const handleToggle = (e) => {
    e.preventDefault()
    setToggle(!toggle)
  }

  return (
    <>
      <header>
        <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
          <div className="flex items-center flex-shrink-0 text-white mr-6">
            {/* <svg
              className="fill-current h-8 w-8 mr-2"
              width="54"
              height="54"
              viewBox="0 0 54 54"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
            </svg> */}
            <span className="font-semibold text-xl tracking-tight">
              <Link to={routes.home()}>AirQ</Link>
            </span>
          </div>
          <div className="block lg:hidden">
            <button
              onClick={(e) => handleToggle(e)}
              className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
            >
              <svg
                className="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div
            className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
              toggle ? 'hidden' : null
            }`}
          >
            <div className="text-sm lg:flex-grow">
              {/* <Link
                className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
                to={routes.home()}
              >
                Home
              </Link> */}
              <Link
                className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
                to={routes.about()}
              >
                Air Quality 101
              </Link>
              {/* <Link
                className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
                to={routes.weather()}
              >
                weather
              </Link> */}
              <a
                className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
                rel="noreferrer"
                target="_blank"
                href="https://mintbean.io/mb-event/bd7a7182-3898-46ad-b42b-336198f41443"
              >
                Mintbean Hackathon 6-24
              </a>
              <a
                className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
                rel="noreferrer"
                target="_blank"
                href="https://zackmckenna.com"
              >
                made by zackmckenna
              </a>
            </div>
          </div>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}

export default BasicLayout
