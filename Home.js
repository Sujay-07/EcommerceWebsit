import React from 'react'
import axios from "axios";
import { useState,useEffect } from "react";
import img1 from "../Images/img1.jpeg"
import img2 from "../Images/img2.jpeg"
import img3 from "../Images/img3.jpeg"
import img4 from "../Images/img4.jpeg"



const Home = () => {
  const uid=localStorage.getItem('user')

  const [ProductList, setProductList] = useState([])
  useEffect(() => { 
      getProducts();   
    }, []);

    const getProducts = async() => {
      const result = await axios.get("http://localhost:3001/viewproduct");
      setProductList(result.data);
      console.log(result.data);
    };

    // const AddCart= id =>{
    //   //e.preventDefault();
    //   //alert(id)
    //   axios.post(`http://localhost:3001/addcart/${id}/${uid}`,{
    //   }).then((response)=>{
    //     console.log(response);
    //     alert("Add to Cart Successfully")
    //     window.location="http://localhost:3000/user"
    //   })
    //   .catch(error => {
    //       console.log(error)
    //   })
    // }

  return (
    <><div id="slider" class="carousel slide" data-bs-ride="carousel">
      {/* <!-- Indicators/dots --> */}
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#slider" data-bs-slide-to="0" class="active"></button>
        <button type="button" data-bs-target="#slider" data-bs-slide-to="1"></button>
        <button type="button" data-bs-target="#slider" data-bs-slide-to="2"></button>
        <button type="button" data-bs-target="#slider" data-bs-slide-to="3"></button>
      </div>

      {/* <!-- The slideshow/carousel --> */}
      <div class="carousel-inner">

        <div class="carousel-item active">
          <img src={img1} alt="slide0" className="d-block w-100" />
        </div>

        <div class="carousel-item">
          <img src={img2} alt="slide1" className="d-block w-100" />
        </div>

        <div class="carousel-item">
          <img src={img3} alt="slide2" className="d-block w-100" />
        </div>

        <div class="carousel-item">
          <img src={img4} alt="slide3" className="d-block w-100" />
        </div>
      </div>

      {/* <!-- Left and right controls/icons --> */}
      <button class="carousel-control-prev" type="button" data-bs-target="#slider" data-bs-slide="prev">
        <span class="carousel-control-prev-icon"></span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#slider" data-bs-slide="next">
        <span class="carousel-control-next-icon"></span>
      </button>

      <div>
      <div className='container-fluid bg-dark mt-3 p-3'>
        <div className='row'>
           
            <p><button className='btn btn-success text-white'> Welcome: {uid} </button></p>
        </div>
     </div>

     <div className='container-fluid bg-light mt-3 p-3'>
        <div className='row'>
            <h3 className='text-danger mb-3'>Hurry Up..! Buy Products..</h3>
            <div className="divider py-1 bg-success"></div>

                {
                 ProductList.map((data,index) => {
                  return(
                    <div className='col-lg-3 mt-2' key={data.id}>
                        <h5> {data.product_name}</h5>
                        <p> <img src={`../upload/${data.image}`} alt='not found' width={200} height={200}></img></p>
                        <p> ₹ {data.price}/-</p>
                        <a href='/login/' style={{textDecoration:"none",color:"white"}}><button className='btn btn-warning 
                        fw-bold text-dark' style={{width:"80px",fontSize:"11px"}}>AddCart </button></a>
                        <p>
                        <a href='/login/' style={{textDecoration:"none",color:"white"}}><button className='btn btn-danger 
                        fw-bold text-dark' style={{width:"80px",fontSize:"12px",marginLeft:"10px"}}>
        
                          <a href={`/buyorder/${data.id}`} 
                          style={{textDecoration:"none",color:"white"}}>
                          Buy </a> </button></a></p>
                    </div>)
            }                 )}

            
        </div>
     </div>
    </div>
  
      </div></>


  
    
  )
}

export default Home