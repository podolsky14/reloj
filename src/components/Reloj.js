import React, { useState } from 'react'
import "../App.css"
const data = ""
export default function Reloj() {
    const [state, setstate] = useState(data)
 
setInterval(() => {
    setstate({
        data : new Date().toLocaleTimeString()
    })
}, 1000);
   
  return (
    <div className='border border-primary'>
<h1 className='reloj'>{state.data}</h1>
    </div>
  )
}
