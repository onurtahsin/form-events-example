import { useState } from "react";

const Form = () => {

  const [username,setUsername] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const handleUsername = (e) =>{
    console.log(e.target.value);
    setUsername(e.target.value)
  }
  const handleSubmid = (e)=>{
    // e.preventDefault();
    alert(`
    username:${username}
    email:${email}
    password:${password}
    `);
    // setEmail('');
    // setUsername('');
    // setPassword('');
  }
  return (
    <div>
      <form style={{ margin: '5rem' }} onSubmit = {handleSubmid}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            User <span className="text-danger">{username}</span>
          </label>
          <input type="text" className="form-control" id="username" onChange={handleUsername} value ={username}/>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address <span className="text-danger">{email}</span>
          </label>
          <input type="email" className="form-control" id="email" onChange={(e)=> setEmail(e.target.value)}
          value = {email}/>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input type="password" className="form-control" id="password" onChange={(e)=>setPassword(e.target.value)} value = {password}/>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;