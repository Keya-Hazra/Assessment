/* eslint-disable */
import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/ui/Navbar'

function Layout() {
  return (
    <Suspense fallback={(
      <div
        className="flex items-center justify-center h-screen"
      >
        <h1 className="text-3xl font-bold lg:text-5xl animate-pulse">
          Psycho
          <span className="text-transparent bg-gradient-to-tr to-primaryLight via-primaryLight from-primaryDark bg-clip-text">Art</span>
        </h1>
      </div>
)}
    >

      <div className="lg:container lg:mx-auto">
        <div className="flex flex-col items-center justify-center">
          <div className="w-full max-w-6xl">
            <Navbar />
            <div className="px-4">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </Suspense>

  )
}

export default Layout
