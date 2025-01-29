import React, { useState } from 'react'

export const Grandparent = (props,datafromgrandmother) => {
    const [gm_msg,setgmmsg]=useState("hi i am grandmother");
    const sendmsgtoparent1 =()=>
    {
        props.datafromgrandparent(gm_msg,"hi i am gm")
    }
  return (
    <div>
        <h1>grandparent component</h1>
        <h1>Data from parent:{props.msg}</h1>
        <button onClick={sendmsgtoparent1}>send to parent and child</button>
    </div>
  )
}