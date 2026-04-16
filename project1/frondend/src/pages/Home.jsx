import { useEffect, useState } from "react";
import axios from "axios";


function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/products")
      .then(res => setProducts(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="container">
      <h2 className="title">🛒 Product List</h2>

      <div className="grid">
        {products.map((item) => (
          <div className="card" key={item._id}>
            <h3>{item.name}</h3>
            <p className="price">₹{item.price}</p>

            {item.image && (
              <img src={item.image} alt={item.name} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;