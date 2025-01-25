import React from 'react'

function ErrorInfo({children}) {
  return (
    <div className='text-danger px-1 fs-6 fst-italic'>
        {children}
    </div>
  )
}

export default ErrorInfo