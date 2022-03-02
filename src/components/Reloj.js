import React, { useState } from 'react'
import "../App.css"

export default function Reloj() {
    const [state, setstate] = useState(null)
 
setInterval(() => {
    setstate({
        state : new Date().toLocaleTimeString()
    })
}, 1000);
   
  return (
 <div className='border border-primary'>
<h1 className='reloj'>{state}</h1>
    </div>
  )
}
