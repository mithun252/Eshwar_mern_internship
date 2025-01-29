import React, { useState } from 'react';
import {Child1} from './child1';
import { Grandparent } from './grandparent';

export const Parent1= () => {
    const [msg,setmsg]=useState("Hi from parent")
    const[childmsg,setchildmsg]=useState('')
    const[grandparentmsg,setgrandparentmsg]=useState('')
    const onchange=(message,message2)=>
    {
        setchildmsg(message)
        setgrandparentmsg(message2)
    }
  return (
    <div>
        <h1>Parent Component</h1>
        <h1>{msg}</h1>
        <h2>{childmsg}</h2>
        <h2>{grandparentmsg}</h2>
        <Child1 msg={msg} datafromchild={onchange}/>
    </div>
  )
}
