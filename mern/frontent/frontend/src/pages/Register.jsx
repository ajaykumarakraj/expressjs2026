import { useState } from "react"
import axios from "axios"


function Register() {

 const [email,setEmail]=useState("")
  const [pass,setPass]=useState("")
  const handleSubmit = async (e) => {

    e.preventDefault()
    const form={
        email:email,
        password:pass
    }
    console.log(form)
    await axios.post("http://localhost:3000/registerrrr", form)
  }
// const handleChange=(e)=>{
//   console.log(e.target.value)
  
 
// }
  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <h2>Register</h2>

        <input
          type="text"
          name="email"
          value={email}
          placeholder="Enter Email"
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          type="text"
          name="password"
          value={pass}
          placeholder="Enter Password"
          onChange={ (e)=>setPass(e.target.value)}
        />

        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default Register