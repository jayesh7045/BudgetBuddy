import React from 'react'

function input({label, state, setState}) {
  return (
    <div>
      <h5 className='custom-label'>{label}</h5>
      <input onChange={(e)=>setState(e.target.value)} value = {state} className='custom-input'></input>
    </div>
  )
}

export default input
