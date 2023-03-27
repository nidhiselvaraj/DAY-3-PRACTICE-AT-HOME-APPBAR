import React, { Component } from 'react'

class Car extends Component {
  render() {
    return (
      <div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxa3c8w1QUUHzdacm9ZkqCyiodKTTOUcymJAoRWnWI&s"alt=""></img>
      </div>
    )
  }
}

function Location(props) {
  return (
    <div>
      <p>{props.CompanyName} and the city name is {props.CityName}</p>
    </div>
  )
}

export {Car,Location}