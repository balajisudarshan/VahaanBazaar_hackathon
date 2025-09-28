import React, { useState } from 'react';
import bikeData from '../../data/bikeData.json';
import VehicleCard from '../Components/VehicleCard';
import SideBarFilters from '../Components/SideBarFilters';
// import './styles/AllVehicles.css';

const AllVehicles = () => {
  const [search, setSearch] = useState('');
  const [typeFilter, setTypeFilter] = useState('All');
  const [ccFilter, setCcFilter] = useState('');

  const filteredBikes = bikeData.filter(bike => {
    const matchesSearch = bike.title.toLowerCase().includes(search.toLowerCase());
    const matchesType = typeFilter === 'All' || bike.type === typeFilter;
    const matchesCC = !ccFilter || (bike.cc && parseInt(bike.cc) <= parseInt(ccFilter));
    return matchesSearch && matchesType && matchesCC;
  });

  return (
    <div className="vehicles-page">
      <SideBarFilters
        search={search}
        setSearch={setSearch}
        typeFilter={typeFilter}
        setTypeFilter={setTypeFilter}
        ccFilter={ccFilter}
        setCcFilter={setCcFilter}
      />

      <div className="vehicleContainer">
        <h1>All Vehicles</h1>
        <div className="featured-container">
          {filteredBikes.length > 0 ? (
            filteredBikes.map(item => (
              <VehicleCard
                key={item.title}
                img={item.img}
                title={item.title}
                company={item.company}
                price={item.price}
                cc={item.cc}
                mileage={item.mileage}
                type={item.type}
                tags={item.tags || []}
              />
            ))
          ) : (
            <p className="no-vehicles">No vehicles found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllVehicles;
