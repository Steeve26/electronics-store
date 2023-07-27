import React from 'react'
import ProductCard from '../components/productCard'

export default function ProductGrid({cards}) {

  const components = [];
  for (let i = 0; i < cards; i++) {
    components.push(<ProductCard key={i} />);
  }

  return <div className="products-container">{components}</div>;
  
}

