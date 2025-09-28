import React, { useState } from 'react';
import './styles/SidebarFilters.css';

const SideBarFilters = ({ search, setSearch, typeFilter, setTypeFilter, ccFilter, setCcFilter }) => {
  const [open, setOpen] = useState(true);

  return (
    <div className={`sidebar-filters ${open ? 'open' : 'closed'}`}>
      <button className="toggle-sidebar" onClick={() => setOpen(!open)}>
        {open ? 'Hide Filters' : 'Show Filters'}
      </button>

      {open && (
        <>
          <h2>Filters</h2>
          <div className="filter-group">
            <label>Search</label>
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search vehicles..."
            />
          </div>
          <div className="filter-group">
            <label>Type</label>
            <select value={typeFilter} onChange={e => setTypeFilter(e.target.value)}>
              <option value="All">All Types</option>
              <option value="PETROL">Petrol</option>
              <option value="EV">EV</option>
            </select>
          </div>
          <div className="filter-group">
            <label>Max CC</label>
            <input
              type="number"
              value={ccFilter}
              onChange={e => setCcFilter(e.target.value)}
              placeholder="Enter max CC"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default SideBarFilters;
