import React from 'react'
import { C2 } from './c2'

export const C1 = () => {
    var msg = "hello from component 1";
    console.log(msg);
  return (
    <div>
        <h1>This is component 1
        </h1>
        <h1>{msg}</h1>
        <C2 name="c2"/>
    </div>
  )
}