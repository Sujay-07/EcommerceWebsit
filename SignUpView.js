import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';

const SignUpView = () => {
    const [SignUpData, setSignUpData] = useState ([])
    useEffect( () => {
        getSignUp();
    });

    const getSignUp = async() => {
        const result = await axios.get('http://localhost:3001/viewsignup');
        setSignUpData(result.data);
        console.log(result.data);
    };

    const DeleteSignUp = id => {
        axios.delete(`http://localhost:3001/delsign/${id}`)
        .then(response => {
            getSignUp();
        });
    }
    return (

    <div>

<div className='container-fluid mt-2'>
        
        <div className='row'>
            <h1> SignUp Details </h1>
          <table className='table table-bordered table-hover mt-2'>
            <thead className='table-primary'>
                <tr>
                    <th></th>
                    <th> fname </th>
                    <th> lname </th>
                    <th> gender </th>
                    <th> address </th>
                    <th> pincode </th>
                    <th> email </th>
                    <th> mobile</th>

                </tr>
            </thead>
            <tbody>
                {
                    SignUpData.map((data,index)=>{
                    return(<tr key={data.id}>
                        <td>{index+1}</td>
                    <td> {data.fname} </td>
                    <td> {data.lname} </td>
                    <td> {data.gender} </td>
                    <td> {data.address} </td>
                    <td> {data.pincode} </td>
                    <td> {data.email} </td>
                    <td> {data.mobile} </td>
                    <td><button className='btn btn-danger' onClick={()=> DeleteSignUp (data.id)}>Delete</button></td>
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

export default SignUpView