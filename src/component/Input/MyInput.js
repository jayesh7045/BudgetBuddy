import React from 'react'

function MyInput({label, state, setState, placeholder}) {
  return (
    <div className='text-wrapper'>
      <h5 className='custom-label'>{label}</h5>
      <input onChange={(e)=>setState(e.target.value)} placeholder = {placeholder} value = {state} className='custom-input'></input>
    </div>
  )
}

export default MyInput
