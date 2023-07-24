import axios from "axios";
import { useEffect, useState } from "react";

export const Posting = () => {
  const [data, setdata] = useState([]);
  const [dta2, setdta] = useState("");
  const [val, setval] = useState("");

  const dta = { title: val, description: "leather", price: 70.3 };

  const add = () => {
    axios.post("https://fakestoreapi.com/products", dta).then((res) => {
      setdata(res.data);
      console.log(res);
      console.log(res.data);
    });
    console.log("posted");
  };

  const inputing = (e) => {
    console.log(e.target.value);
    setval(e.target.value);
  };

  return (
    <div>
      <h1>Post</h1>
      <button onClick={() => add()}>Add</button>
      <input onChange={inputing}></input>
      <Meth data={data} />
    </div>
  );
};

export const Meth = ({ title, description, price }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <h3>{price}</h3>
    </div>
  );
};
