import React from 'react'
import Child from './child'

const Parent = () => {
    const message= "vanakam"
  return (
    <div>
        <h1>this is parent component</h1>
        <Child message = {message}/>
    </div>
  )
}

export default Parent