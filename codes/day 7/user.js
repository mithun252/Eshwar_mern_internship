import React from 'react'
import { useContext } from 'react'
import { themeContext } from '../App'



export const User=({theme})=>{
    const contextValue=useContext(themeContext)
    console.log(contextValue)
  return (
    <div><h1>User</h1></div>
  )
}