import React, {useState} from 'react';
import { emailValidator, passwordValidator } from './valid';
import { useNavigate } from 'react-router-dom';
function Login() {
  
  const [details, setDetails] = useState({email:"", password:""});
  const [error, setError] = useState("");
  const [success, setSuccess] =useState("");
  const history=useNavigate();
  const handleChange = (e) =>{
      setDetails({...details,[e.target.name]: e.target.value})
  }
  React.useEffect(()=>{
    if(localStorage.getItem('user1')) history("/details")
},[])

  const submitHandler = (e) =>{
      e.preventDefault();
      console.log(details);
      setError("");
      setSuccess("");
      if(!emailValidator(details.email)) return setError("Invalid Email");
      if(!passwordValidator(details.password)) return setError("Invalid Password");

      setSuccess("Sucessfully logged in");
      localStorage.setItem("user1", true)
      history('/detail');
  };


  return (
  <>
    <div className="div">
        <form className="form" onSubmit={submitHandler}>
        {error.length > 0 && (<div className='errorMessage'>{error}</div>) }
        {success.length > 0 && (<div className='success'>{success}</div>) }
          <h1 id="a">Login</h1>
          <table>
            <tbody>
            <tr><td><label ><b>E-mail</b></label></td>
            <td><input type="email" name="email" placeholder='email' id="email" required onChange={handleChange}/></td></tr>
            <tr><td><label ><b>Password</b></label></td>
            <td><input  type="password" name="password" placeholder='Password'id="password" required onChange={handleChange}/></td></tr>
            </tbody>
            </table>
            <button id='loginbtn'>Login</button>
        </form>
    </div>
    </>
  )
}
export default Login