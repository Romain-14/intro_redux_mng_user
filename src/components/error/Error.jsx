import React from 'react'

function Error({msg}) {
  return (
    <>{msg !== null ? <p className='alert'>{msg}</p>: null}</>
  )
}

export default Error