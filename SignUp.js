import axios from 'axios'
 import React, {useState} from 'react'


const SignUp = () => {
    const initialValues = {fname:"",lname:"",gender:"",address:"",pincode:"",email:"",mobile:"",password:""}
  const [formValues,setFormvalues] = useState(initialValues)

  const handleChange = (e) =>{
    const {name,value}=e.target
    setFormvalues({...formValues,[name]:value});
    console.log(formValues.fname)
  }

  const FormSignUp=(e)=>{
    e.preventDefault();
    axios.post("http://localhost:3001/signup",{
      feeddata:formValues
      // uid:uid
    }).then((response)=>{
      console.log(response);
      alert("Signup Successfully")
      //window.location="http://localhost:3000/login"
    })
    .catch(error => {
      console.log(error)
    })
  }
  return (
    <div>
      <div className='container mt-3 p-3'>
        <div className='row'>
            <h1 className='text-primary'> Create an Account </h1>
            <form onSubmit={FormSignUp}>
            <div className='mt-3 mb-3'>
                <label> First Name </label>
                <input type='text' value={formValues.fname} name='fname' 
                 className='border border-1 border-primary form-control w-50'onChange={handleChange} required/>
            </div>
            <div className='mt-3 mb-3'>
                <label> Last Name </label>
                <input type='text' value={formValues.lname} name='lname' 
                 className='border border-1 border-primary form-control w-50'onChange={handleChange} required/>
            </div>

            <div className='mt-3 mb-3'>
                <label>Gender</label>
                <br></br>
                Male<input type='radio' name='gender' className='form-check-input ms-3' value='male' checked={formValues === 'male'} onChange={handleChange}/>
                Female<input type='radio' name='gender' className='form-check-input ms-3' value='female'  checked={formValues === 'female'} onChange={handleChange} />
            </div>



            <div className='mt-3 mb-3'>
                <label> Address</label>
                <input type='text' value={formValues.address} name='address' 
                 className='border border-1 border-primary form-control w-50'onChange={handleChange} required/>
            </div>

            <div className='mt-3 mb-3'>
                <label>Pincode </label>
                <input type='text' value={formValues.pincode} name='pincode' 
                 className='border border-1 border-primary form-control w-50' onChange={handleChange} required/>
            </div>

            <div className='mt-3 mb-3'>
                <label>Email </label>
                <input type='text' value={formValues.email} name='email' 
                 className='border border-1 border-primary form-control w-50' onChange={handleChange} required/>
            </div>

            <div className='mt-3 mb-3'>
                <label>Password </label>
                <input type='password' value={formValues.password} onChange={handleChange} name='password' 
                className='border border-1 border-primary form-control w-50' required/>
            </div>

            <div className='mt-3 mb-3'>
                <label> Mobile No </label>
                <input type='text' value={formValues.mobile} name='mobile' 
                 className='border border-1 border-primary form-control w-50'onChange={handleChange} required/>
            </div>

            <div className='mt-3 mb-3'>
                <button type='submit' className='btn btn-primary'> Create An Account </button>
            </div>
            </form>
            

        </div>
      </div>
    </div>
  )
}

export default SignUp