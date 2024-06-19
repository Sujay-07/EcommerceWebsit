import React from 'react'
import { useState,useEffect } from "react";
import axios from "axios";
const uid=localStorage.getItem('user')
let OrderAmount=0
const Mycart = () => {
    //const status="pending";
    const [MycartList, setMycartList] = useState([])
    useEffect(() => { 
        getMycart();   
      }, []);
  
      const getMycart = async() => {
        const result = await axios.get(`http://localhost:3001/mycart/${uid}`);
        setMycartList(result.data);
        console.log(result.data);
      };

       const removeorder = id => {
        axios.delete(`http://localhost:3001/deleteorder/${id}`)
        .then(response => {
          alert("Removed Successfully")
        getMycart();
        
        });
      }
  return (
    <div>

        <div className='container mt-2 '>
            <div className='row'>
                <h1 className='mt-3'> My Order Details</h1>
                <table className='table table-bordered table-striped table-hover mt-3'>
                    <thead className='table-success'>
                        <tr>
                            <th>Sl.No</th>
                            <th> Product Name </th>
                            <th> User Id</th>
                            <th> Price </th>
                            <th> Qty </th>
                            <th> Total </th>
                            <th> Order Date </th>
                            <th> Order Time </th>
                            <th> Order Status </th>
                            <th> Payment Status </th>
                            <th colSpan={2} align='center' className='text-white bg-danger'> Action </th>
                        </tr>
                    </thead>

                    <tbody> 
                    {
                      MycartList.map((mo,index) => {

                        
                        
                        // let message
                       
                        //   if(mo.order_status==='pending')
                        //   {
                        //     message = <div className='text-primary fs-4 fw-bold'> Pending  </div>
 
                        //   }
                        //   else
                        //   {
                        //     message = <div className='text-primary fs-4 fw-bold'> <a href={/paybill/${mo.id}/${mo.total}} 
                        //     style={{textDecoration:"none"}}> Pay Now </a> </div>
                        //   }
                       
                      
            return( 
                   
           <tr key={index}>
              <td>{index+1}</td>
              <td>{mo.product_name}</td>
              <td>{mo.user_id}</td>
              <td>{mo.qty}</td>
              <td>{mo.price}</td>
              <td>{mo.total}</td>
              <td>{mo.order_date}</td>
              <td className='text-success fs-4 fw-bold'>{mo.order_time}</td>
              <td className='text-danger fs-4 fw-bold'>{mo.order_status}</td>
              <td className='text-primary fs-4 fw-bold'>{mo.payment_status}</td>
             
              <td> <i className='fa fa-trash text-primary fs-5' title='Remove Order' onClick={() => removeorder(mo.id)}> </i> </td>
              {/* <button type='submit' className='btn btn-primary'> Submit </button> */}
  
            </tr>
        
            )
            }
              )}

              <tr className='bg-success text-white'>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td className='text-black fs-3'>
                ₹ {OrderAmount =MycartList.reduce((total, item)=>total+
                  (item.total),0)}</td>
                <td></td>
                <td></td>
                <td></td>
                
                <td></td>
                <td></td>
                
              </tr>    
             </tbody>

                </table>
                <p> <button className='btn btn-warning fs-5 fw-bold'>
                <a href={`paybill_next/${OrderAmount}`} 
                style={{textDecoration:"none",color:"white"}}> 
                Place Order </a></button></p>
            </div>
        </div>
      
    </div>
  )
}

export default Mycart