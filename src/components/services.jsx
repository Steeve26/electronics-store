import React from 'react'

export default function services({img, alt, title, description }) {
  return (
    <div className="service">
      <div className="icon">
        <img width="50px" height="50px" src={img} alt={alt} />
      </div>
      <div className="text">
        <div className="title">{title}</div>
        <p className="description">{description}</p>
      </div>
    </div>
  )
}
