import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { styled } from "styled-components";

export const Requests = () => {
  const [data, setdata] = useState([]);
  const [load, setload] = useState(1);

  useEffect(() => {
    axios
      .get("http://localhost:8000/Heros")
      .then((res) => {
        console.log(res);
        setdata(res.data);
      })
      .catch((err) => alert(err));
  }, [load]);

  // function Req(){

  const handlepost = (data) => {
    const upload = load + 1;
    setload(upload);
    const newdta = {
      id: data.title,
      image: data.image,
      otherName: data.otherName,
    };
    axios
      .post("http://localhost:8000/Heros", newdta)
      .then((res) => console.log(res.data))
      .catch((err) => alert(""));
  };

  const handledel = (id) => {
    const upload = load + 1;
    setload(upload);
    console.log(id);
    axios
      .delete("http://localhost:8000/Heros/" + id)
      .then((res) => console.log(res))
      .catch((err) => alert(err));
  };

  const handleedit = (m) => {
    const upload = load + 1;
    setload(upload);
    console.log(m);
    const newtitle = prompt("add new title");
    const getdata = {
      title: newtitle,
      image: m.image,
      otherName: m.otherName,
    };
    axios
      .put("http://localhost:8000/Heros/" + m.id, getdata)
      .then((res) => console.log(res))
      .catch((err) => alert(err));
  };
  // }
  return (
    <div>
      {data.map((m, index) => (
        <DivImg>
          <h1>{m.title}</h1>
          <Image src={m.image} alt="heroImg"></Image>
          <h3>{m.otherName}</h3>
          <button onClick={() => handleedit(m)}>Edit</button>
          <button onClick={() => handlepost(m)}>Post</button>
          <button onClick={() => handledel(m.id)}>Delete</button>
        </DivImg>
      ))}
    </div>
  );
};

const Image = styled.img`
  border-radius: 25px;
  height: 400px;
  width: 700px;
`;

const DivImg = styled.div`
  border-radius: 15px;
  border: 2px solid black;
  background-color: orange;
  height: 650px;
  width: 1200px;
  margin: 8%;
`;
