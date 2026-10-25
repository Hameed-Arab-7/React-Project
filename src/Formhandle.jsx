import React, { useState } from 'react'

const Formhandle = () => {
  const [text , setText]=useState("");

    const handle=(e)=>{
     e.preventDefault();
     console.log("page is submitted",text)
     setText('');
    }
    const changeevent=(evt)=>{
      setText(evt.target.value)
    }
  return (
    <div>
      <form onSubmit={(e)=>(handle(e))} className='flex justify-center m-4'>
        <input type="text" value={text} onChange={changeevent} placeholder='Enter your Name ' className='p-5 border border-white m-4'/>
        <button className='px-6 py-0 m-4 border border-white'>submit page</button>
      </form>
    </div>
  )
}

export default Formhandle
