import React from 'react'

const Email = () => {
  return (
    <div>
       <div className='container mt-3 p-3'>
        <div className='row'>
            <h1 className='text-success'> Email </h1>
            <div className='mt-3 mb-3'>
                <label> Username </label>
                <input type='text' className='border border-1 border-success form-control w-50'/>
            </div>
            
            {/* <div className='mt-3 mb-3'>
                <label>password </label>
                <input type='password' name='password' className='border border-1 border-success form-control w-50'/>
            </div> */}

            <div className='mt-3 mb-3'>
                <a href='http://localhost:3000/otp'>
                <button type='submit' className='btn btn-success'> Submit </button>
                </a>
            </div> 

        </div>
      </div>
    </div>
  )
}

export default Email
