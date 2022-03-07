import React from 'react'

const ProductList = ({props}) => {
  return (
    <div>
        {
          React.Children.toArray( props.data.map(hasoub=> <OrdTable basa{hasoub}/>))
        }
 </div>
  )
}

export default ProductList