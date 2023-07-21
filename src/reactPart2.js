import { useEffect, useState } from "react";

export const Apis = () => {
  const [items, setitem] = useState([]);
  const [pending, setpending] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      fetch("https://fakestoreapi.com/products")
      .then(res=>res.json())
        .then((data) => setitem(data))
        .catch((err) => console.log(err.message));
    }, 2000);
  }, []);

  return (
    <div>
      {pending && <h2>loading...</h2>}
      {items.map((item) => (
        <div>
        <h1>{item.title}</h1>
        <p>{item.description}</p>
        <image src={item.image} ></image>
        </div>
      ))}
    </div>
  );
};
