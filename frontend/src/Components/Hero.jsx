import React from 'react'
import './styles/Hero.css'
import FeaturedVehicles from './FeaturedVehicles'
const Hero = () => {
  return (
    <>
    <div className="hero">
        <div className="heroContainer">
            <div className="hero-content">
                <h1>Find your Perfect Two-Wheeler</h1>
                <p>Discover the best bikes,scooters, and electric vehicles from top brands</p>
                <div className="hero-search">
                    <div className="search-filters">
                        <select className='form-control'>
                            <option value>All brands</option>
                            <option value>All brands</option>
                            <option value>All brands</option>
                            <option value>All brands</option>
                            <option value>All brands</option>
                            <option value>All brands</option>
                            <option value>All brands</option>
                            <option value>All brands</option>
                        </select>
                        <select className='form-control'>
                            <option value>Budget</option>
                            <option value>Budget</option>
                            <option value>Budget</option>
                            <option value>Budget</option>
                            <option value>Budget</option>
                            <option value>Budget</option>
                            <option value>Budget</option>
                            <option value>Budget</option>
                        </select>
                        <select className='form-control'>
                            <option value>Fuel type</option>
                            <option value>Fuel type</option>
                            <option value>Fuel type</option>
                            <option value>Fuel type</option>
                            <option value>Fuel type</option>
                            <option value>Fuel type</option>
                            <option value>Fuel type</option>
                            <option value>Fuel type</option>
                        </select>
                        <button className='search'>Search</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <FeaturedVehicles/>
    </>
  )
}

export default Hero