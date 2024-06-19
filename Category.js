import axios from 'axios'
 import React, {useState} from 'react'

const Category = () => {
    const initialValues = {category_name:""}
  const [formValues,setFormvalues] = useState(initialValues)

  const handleChange = (e) =>{
    const {name,value}=e.target
    setFormvalues({...formValues,[name]:value});
    console.log(formValues.category_name)
  }

  const FormCategory=(e)=>{
    e.preventDefault();
    axios.post("http://localhost:3001/category",{
      feeddata:formValues
      // uid:uid
    }).then((response)=>{
      console.log(response);
      alert("Category Details")
      //window.location="http://localhost:3000/login"
    })
    .catch(error => {
      console.log(error)
    })
  }
  return (
    <div>
      <div className='container mt-3 mb-3'>
        <div className='row'>
            <h1 className='text-primary'> Category </h1>
            <form onSubmit={FormCategory}>
            <div className='mt-3 mb-3'>
            <label> Category Name </label>
            <input type='text' value={formValues.category_name} name='category_name' 
                 className='border border-1 border-primary form-control w-50'onChange={handleChange} required/>
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

export default Category