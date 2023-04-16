import React from 'react'

function Loader() {
  return (
    <section className='loader w-100 d-flex justify-content-center'>
    <div className="spinner-border  " role="status">
     <span className="visually-hidden">Loading...</span>
     </div>
    </section>
  )
}

export default Loader