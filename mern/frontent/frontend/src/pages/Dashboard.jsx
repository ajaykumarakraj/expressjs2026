import { useEffect, useState } from "react"
import axios from "axios"

function Dashboard() {
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3000")
      .then((res) => setData(res.data))
  }, [])

  return (
    <div>
      <h2>Task List</h2>

      {data.map((item) => (
        <div key={item._id}>
          <b>{item.title}</b> - {item.description}
        </div>
      ))}
    </div>
  )
}

export default Dashboard
