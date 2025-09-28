import React from 'react'
import './styles/ComparisionTable.css'
const ComparisionTable = ({ vehicles }) => {
  return (
    <div className="comparison-container">
      <h2>Comparison Table</h2>
      <table>
        <thead>
          <tr>
            <th>Feature</th>
            {vehicles.map(v => (
              <th key={v.title}>{v.title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Company</td>
            {vehicles.map(v => <td key={v.title}>{v.company}</td>)}
          </tr>
          <tr>
            <td>Price</td>
            {vehicles.map(v => <td key={v.title}>{v.price}</td>)}
          </tr>
          <tr>
            <td>CC</td>
            {vehicles.map(v => <td key={v.title}>{v.cc || 'N/A'}</td>)}
          </tr>
          <tr>
            <td>Mileage</td>
            {vehicles.map(v => <td key={v.title}>{v.mileage}</td>)}
          </tr>
          <tr>
            <td>Fuel/Type</td>
            {vehicles.map(v => <td key={v.title}>{v.type}</td>)}
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ComparisionTable
