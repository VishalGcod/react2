import React, { useState } from "react";

export const Fill = () => {
  const [form, getform] = useState([]);
  const [name, getname] = useState("");
  const [pass, getpass] = useState(null);

  const formsub = (e) => {
    e.preventDefault();
    const newformval = [...form, { name, pass }];
    getform(newformval);
    getname("");
    getpass("");
  };

  const Imput = () => {
    return (
      <div>
        <input type="text" placeholder="name" onChange={nameimput}></input>
      </div>
    );
  };
  const nameimput = (e) => {
    getname(e.target.value);
  };

  const Password = () => {
    return (
      <div>
        <input
          type="password"
          placeholder="Password"
          onChange={passwordimput}
        ></input>
      </div>
    );
  };
  const passwordimput = (e) => {
    getpass(e.target.value);
  };

  const deleted=(ind)=>{
    const del=form.filter((i)=>i==ind)
    getform(del)
  }

  const btnhide = name!== "";

  return (
    <div>
      <form onSubmit={formsub}>
        <h1>data</h1>
        {Imput()}
        {Password()}
        {btnhide && <button type="submit">sub</button>}
      </form>
      <div>
        {form.map((f, index) => (
          <div key={index}>
            <h1>{f.name}</h1>
            <h1>{f.pass}</h1>
            <button onClick={()=>deleted(index)}>del</button>
          </div>
        ))}
      </div>
    </div>
  );
};
