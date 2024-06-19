import React from 'react'

const Payment = () => {
  return (
    <div>
      <div className='container mt-3 p-3'>
        <div className='row'>
            <h1 className='text-success'> Payment </h1>
            <div className='mt-3 mb-3'>
                <label> id </label>
                <input type='text' name='id' className='border border-1 border-success form-control w-50'/>
            </div>
            
            <div className='mt-3 mb-3'>
                <label>order_id </label>
                <input type='text' name='order_id' className='border border-1 border-success form-control w-50'/>
            </div>

            <div className='mt-3 mb-3'>
                <label>amount </label>
                <input type='text' name='amount' className='border border-1 border-success form-control w-50'/>
            </div>

            <div className='mt-3 mb-3'>
                <label>payment date </label>
                <input type='text' name='payment_date' className='border border-1 border-success form-control w-50'/>
            </div>

            <div className='mt-3 mb-3'>
                <button type='submit' className='btn btn-success'> Done </button>
            </div> 

        </div>
      </div>
    </div>
  )
}

export default Payment
