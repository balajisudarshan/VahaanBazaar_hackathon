import React from 'react'

const VehicleCard = ({ img, title, company, price, cc, mileage, type, tags = [] }) => {
  return (
    <div className="vehicle-card">
      <div className="img">
        <img src={img} alt={title} />
        <div className="tags">
          {tags.map((tag, index) => (
            <span key={index} className="tag" data-tag={tag}>{tag}</span>
          ))}
        </div>

      </div>
      <div className="details">
        <div className="company"><span>{company}</span></div>
        <div className="title"><h1>{title}</h1></div>
        <div className="price"><span>{price}</span></div>
        <div className="extra-details">
          {cc && <p>{cc}</p>}
          <p>{mileage}</p>
          <p>{type}</p>
        </div>
        <div className="rating">4.2</div>
        <div className="buttons-extra">
          <button>Test Ride</button>
          <button >Compare</button>
        </div>
      </div>
    </div>
  )
}

export default VehicleCard
