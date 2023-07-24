import axios from "axios";
import { useEffect, useState } from "react";

export const Posting = () => {
  const [data, setdata] = useState([]);
  const [dta2, setdta] = useState([]);
  const [val, setval] = useState("");

  const dta = { title: val, description: "leather", price: 70.3 };

  const add = () => {
    axios.post("http://localhost:8000/blogs", dta).then((res) => {
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

  const fetching=()=>{
    axios.get("http://localhost:8000/blogs").then(res=>{
      if(res.status==200){
      setdta(res.data);
      console.log(res.data);
      }
    }).catch(err=>alert(err))
  }

  return (
    <div>
      <h1>Post</h1>
      <button onClick={() => add()}>Add</button>
      <input onChange={inputing}></input>
      <button onClick={fetching}>fetch data</button>
      {dta2.map((dta)=>(
        <div>
          <h1>{dta.title}</h1>
        </div>
      ))}
    </div>
  );
};
