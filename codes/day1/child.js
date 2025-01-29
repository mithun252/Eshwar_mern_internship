import React from 'react'

const Child = (props) => {
  return (
    <div>
        <h1>this is child component</h1>
        <p>{props.message}</p>
    </div>
  )
}

export default Child