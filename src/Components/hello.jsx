import React from 'react'

export default function Welcome(props) {
  return (
    <div>
      <h1> Hello <u><i>{props.name}</i></u> , 
      Welcome to the Class</h1>
    </div>
  )
}




// function Welcome(props) {
//   return <h1>Hello, {props.name}</h1>;
// }