import { useState } from "react"
import axios from "axios"
// import "./login.css"
import { useNavigate } from "react-router-dom"
function Loginn() {
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault()

    const res = await axios.post("http://localhost:3000/login", {
      email,
      password: pass
    })

if(res.data === "Login Success"){
  navigate("/dashboard")
}else{
  alert("invalid")
}
  }

  return (
    <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <h2>Login</h2>

        <input
          type="email"
          placeholder="Enter Email"
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
          onChange={(e)=>setPass(e.target.value)}
        />

        <button>Login</button>
      </form>
    </div>
  )
}

export default Loginn