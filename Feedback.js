import axios from 'axios'
import React, {useState} from 'react'

//const uid=localStorage.getItem('user')

const Feedback = () => {
  const initialValues = {user_id:"",about_services:"",about_product:"",comments:""}
  const [formValues,setFormvalues] = useState(initialValues)
  
  const handleChange = (e) =>{
    const {name,value}=e.target
    setFormvalues({...formValues,[name]:value});
    console.log(formValues.user_id)
  }

  const FormFeedback=(e)=>{
    e.preventDefault();
    axios.post("http://localhost:3001/feedback",{
      feeddata:formValues
      // uid:uid
    }).then((response)=>{
      console.log(response);
      alert("Thank You For Your Feedback")
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
        <h1 className='text-primary'>Send Your Valid Feedback </h1>
        <form onSubmit={FormFeedback}>
            <div className='mt-3 mb-3'>
                <label> User Id </label>
                <input type='text'value={formValues.user_id} name='user_id' 
                className='border border-1 border-primary form-control w-50' onChange={handleChange} required/>
            </div>

            <div className='mt-3 mb-3'>
                <label> About Product </label>
                <input type='text'value={formValues.about_product} name='about_product' 
                className='border border-1 border-primary form-control w-50' onChange={handleChange} required/>
            </div>

            <div className='mt-3 mb-3'>
                <label> About Service </label>
                <input type='text'value={formValues.about_service} name='about_service' 
                className='border border-1 border-primary form-control w-50' onChange={handleChange} required/>
            </div>

            <div className='mt-3 mb-3'>
                <label> Comments </label>
                <input type='text'value={formValues.comments} name='comments' 
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

export default Feedback