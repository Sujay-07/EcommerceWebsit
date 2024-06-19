import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';

const ProductView = () => {
    const [ProductData, setProductData] = useState ([])
    useEffect( () => {
        getProduct();
    });

    const getProduct = async() => {
        const result = await axios.get('http://localhost:3001/viewproduct');
        setProductData(result.data);
        console.log(result.data);
    };
    const DeleteProduct = id => {
        axios.delete(`http://localhost:3001/delpro/${id}`)
        .then(response => {
            getProduct();
        });
    }


    return (

    <div>

<div className='container-fluid mt-2'>
        
        <div className='row'>
            <h1> Product Details </h1>
          <table className='table table-bordered table-hover mt-2'>
            <thead className='table-primary'>
                <tr>
                    <th></th>
                    <th> category_name </th>
                    <th> product_name </th>
                    <th> uom </th>
                    <th> qty </th>
                    <th> price </th>
                    <th> image </th>
                    <th> stock </th>
                    <th> description </th>

                    
                </tr>
            </thead>
            <tbody>
                {
                    ProductData.map((data,index)=>{
                    return(<tr key={data.id}>
                    <td>{index+1}</td>
                    <td> {data.category_name} </td>
                    <td> {data.product_name} </td>
                    <td> {data.uom} </td>
                    <td> {data.qty} </td>
                    <td> {data.price} </td>
                    <td> {data.image} </td>
                    <td> {data.stock} </td>
                    <td> {data.description} </td>
                    <td><button className='btn btn-danger' onClick={()=> DeleteProduct (data.id)}>Delete</button></td>
                </tr>)
                })
            }
            </tbody>
          </table>
        </div>

    </div>
      
    </div>
  )
}

export default ProductView