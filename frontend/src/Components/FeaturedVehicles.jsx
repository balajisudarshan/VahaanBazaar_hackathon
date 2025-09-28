import React, { useState } from 'react'
import VehicleCard from './VehicleCard'
// import ComparisonTable from './ComparisonTable'
import './styles/FeaturedVehicles.css'

const FeaturedVehicles = () => {
  // const [compareList, setCompareList] = useState([])

  // const handleCompare = (vehicle) => {
  //   const exists = compareList.find(v => v.title === vehicle.title)
  //   if (exists) {
  //     // Remove from compare
  //     setCompareList(compareList.filter(v => v.title !== vehicle.title))
  //   } else {
  //     // Add to compare (limit 3)
  //     if (compareList.length < 3) {
  //       setCompareList([...compareList, vehicle])
  //     }
  //   }
  // }

  const vehicles = [
    {
      img: "https://images.tractorjunction.com/1_YZF_R1_M_75f660d0cf.png?format=webp&quality=40",
      title: "Yamaha R1M",
      company: "YAMAHA",
      price: "$30L - 40L",
      cc: "998cc",
      mileage: "20kmpl",
      type: "PETROL"
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp2vbBRaN-Eq4LTj9YZMiQruvMl52w3X0Eng&s",
      title: "KTM SUPER DUKE",
      company: "KTM",
      price: "$20L - 24L",
      cc: "1200cc",
      mileage: "10kmpl",
      type: "PETROL"
    },
    {
      img: "https://media.newindianexpress.com/newindianexpress%2F2024-10-17%2Fqglos9rl%2FE-haw.jpg?w=640&auto=format%2Ccompress",
      title: "ULTRAVIOLET F77",
      company: "ULTRAVIOLET",
      price: "$3L - 4L",
      mileage: "100km",
      type: "EV"
    }
  ]

  return (
    <div className="vehicleContainer">
      <h1>Featured Vehicles</h1>
      <div className="featured-container">
        {vehicles.map(v => (
          <VehicleCard 
            key={v.title} 
            {...v} 
            
          />
        ))}
      </div>

      {/* {compareList.length > 0 && (
        <ComparisonTable vehicles={compareList} />
      )} */}
    </div>
  )
}

export default FeaturedVehicles
