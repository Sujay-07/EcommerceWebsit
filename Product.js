import React, {useEffect, useState} from 'react'
import axios from 'axios'



const Product = () => {

  const [Category, setCategory] = useState([])


  useEffect(() => {
    getCategory();
  }, []);

  const getCategory = async() => {
    const result = await axios.get("http://localhost:3001/viewcategory");
    setCategory(result.data);
    console.log(result.data);
  };

    const initialValues = {category_name:"",product_name:"",uom:"",qty:"",price:"",image:"",stock:"",descripition:""}
    const [formValues,setFormvalues] = useState(initialValues)
    const [file,setFile] = useState("")
    
    const handleChange = (e) =>{
      const {name,value}=e.target
      setFormvalues({...formValues,[name]:value});
      console.log(formValues.category_name)
    }

    const setImgFile = (e) =>
    {
      setFile(e.target.files[0]); 
    }
  
    const submitProduct=(e)=>{
      e.preventDefault();
      var formData = new FormData();
      formData.append("file",file)
      formData.append("category_name",formValues.category)
      formData.append("product_name",formValues.category)
      formData.append("uom",formValues.uom)
      formData.append("qty",formValues.qty)
      formData.append("price",formValues.price)
      formData.append("description",formValues.descripition)
      formData.append("stock",formValues.stock)
      console.log(...formData)
      const config = {
      headers:
      {
        "Content-Type":"multipart/form-data"
      }
      }

      axios.post("http://localhost:3001/product",
      formData,config
    ).then((response)=>{
      console.log(response);
      alert("Added Successfully");
      window.location='http://localhost:3000/product/'
    })
    .catch(error => {
      console.log(error)
    })
  }

    // }
    // const FormProduct=(e)=>{
    //   e.preventDefault();
    //   axios.post("http://localhost:3001/product",{
    //     feeddata:formValues
    //     // uid:uid
    //   }).then((response)=>{
    //     console.log(response);
    //     alert("Product Details")
    //     //window.location="http://localhost:3000/login"
    //   })
    //   .catch(error => {
    //     console.log(error)
    //   })
    // }
  
  return (
    <div>
      <div className='container mt-3 mb-3'>
        <div className='row'>
        <h1 className='text-primary'> Product Details </h1>
        <form on onSubmit={submitProduct}>

          <div className='mb-3'>
         <select name='category' className='form-select w-50' defaultValue={formValues.category_name} onChange={handleChange}>
          <option >--select category--</option>
          {
            Category.map((cat,index)=> {
              return(
                <option value={cat.category_name}>{cat.category_name}</option>
              )
            })
          }
         </select>
          </div>
      

        <div className='mt-3 mb-3'>
                <label> Product Name </label>
                <input type='text'value={formValues.product_name} name='product_name' 
                className='border border-1 border-primary form-control w-50' onChange={handleChange} required/> 
                   </div>

            <div className='mt-3 mb-3'>
                <label> UOM </label>
                <input type='text'value={formValues.uom} name='uom' 
                className='border border-1 border-primary form-control w-50' onChange={handleChange} required/>
            </div>
            
            <div className='mt-3 mb-3'>
                <label> Quantity </label>
                <input type='number' min={1}value={formValues.qty} name='qty' 
                className='border border-1 border-primary form-control w-50' onChange={handleChange} required/>
            </div>

            <div className='mt-3 mb-3'>
                <label> Price </label>
                <input type='number' min={1}value={formValues.price} name='price' 
                className='border border-1 border-primary form-control w-50' onChange={handleChange} required/>
            </div>

            <div className='mt-3 mb-3'>
                <label> Image </label>
                <input type='file' name='image' 
                className='border border-1 border-primary form-control w-50' onChange={setImgFile} required/>
                {/* <img src="downloadem.jpg" width="300" height="300" className='mt-3 mb-3 p-3'></img> */}
            </div>

            <div className='mt-3 mb-3'>
                <label> Stock </label>
                <input type='text'value={formValues.stock} name='stock' 
                className='border border-1 border-primary form-control w-50' onChange={handleChange} required/>
            </div>

            <div className='mt-3 mb-3'>
                <label> Description </label>
                <input type='text'value={formValues.descripition} name='descripition' 
                className='border border-1 border-primary form-control w-50' onChange={handleChange} required/>
            </div>

            <div className='mt-3 mb-3'>
                <button type='submit' className='btn btn-primary'> Submit </button>
            </div>
            </form>


      </div>
    </div>
    </div>
  )
}

export default Product