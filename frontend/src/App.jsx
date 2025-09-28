import React from 'react'
import Login from './pages/Login'
import NavBar from './Components/NavBar'
import Hero from './Components/Hero'
import FeaturedVehicles from './Components/FeaturedVehicles'
import AllVehicles from './pages/AllVehicles'
const App = () => {
  return (
    <>
      <NavBar/>
      {/* <Login/> */}
      {/* <Hero/>
      <FeaturedVehicles/> */}
      <AllVehicles/>
    </>
  )
}

export default App