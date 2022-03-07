import React from 'react'

const OrdTable = ({basa}) => {
  return (
    <div>
     <table>
        <tr>
            <td src={basa.imgsrc}>  </td>
            <td> {basa.name} </td>
            <td> {basa.price} </td>
            <td><button variant="primary" onClick={()=>alert(`The price of ${basa.name} is ${basa.price})`)}>info</button></td>
        </tr>
      </table>   
    </div>
  )
}

export default OrdTable