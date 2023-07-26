import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { styled } from "styled-components";
import { NavTxt } from "./routecomp";

export const Home = () => {
  const [data, setdata] = useState([]);
  const [load, setload] = useState(1);
  const [search, setsearch] = useState("");

  const dataFetching = ()=>{
    axios
  .get("http://localhost:8000/Heros")
  .then((res) => {
    console.log(res);
    setdata(res.data);
  })
  .catch((err) => alert(err));
}
  useEffect(() => {
    dataFetching()

  }, [load]);

  // function Req(){

  const handlepost = (data) => {
    const upload = load + 1;
    setload(upload);
    const newdta = {
      title: data?.title,
      image: data?.image,
      otherName: data?.otherName,
    };
    alert('posting a data')
    axios
      .post("http://localhost:8000/Heros", newdta)
      .then((res) => console.log(res.data))
      .catch((err) => alert(""));
  };

  const handledel = (id) => {
    if((data.length)>=9){
    const upload = load + 1;
    setload(upload);
    console.log(id);
    console.log(data);
    if (id === 1 || id == 4) {  
      alert("cant delete");
    } else {
        alert(" deleted ");
      axios
        .delete("http://localhost:8000/Heros/" + id)
        .then((res) => console.log(res))
        .catch((err) => alert(err));
    }}else{
        alert('cant delete')
    }
  };

  const handleedit = (m) => {
    const upload = load + 1;
    setload(upload);
    console.log(m);
    const newtitle = prompt("add new title");
    const getdata = {
      title: newtitle,
      image: m?.image,
      otherName: m?.otherName,
    };
    alert('editing')
    axios
      .put("http://localhost:8000/Heros/" + m.id, getdata)
      .then((res) => console.log(res))
      .catch((err) => alert(err));
  };

  const [Form, setform] = useState({
    title: "",
    image: "",
    otherName: "",
  });

  const handleimp = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setform((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const submitdata = (e) => {
    e.preventDefault();
    // console.log(Form);
    const newpost = {
      title: Form?.title,
      image: Form?.image,
      otherName: Form?.otherName,
    };
    axios
      .post("http://localhost:8000/Heros", newpost)
      .then((res) => console.log(res.data))
      .catch((err) => alert(""));
    const upload = load + 1;
    setload(upload);
  };
  const [filtered,setfiltered]=useState([])
  const searching = (e) => {
    setsearch(e.target.value);
    setfiltered(data?.filter((x) => x.title.toLowerCase().includes((e.target.value).toLowerCase())))
    // if(search!==''){
    // const filtdta = data.filter((i) =>
    //   i.title.toLowerCase().includes(search.toLowerCase())
    // );
    // setdata(filtdta);
    // }else{
    //     dataFetching()
    //     // setdata(data)
    //     // setload(load+1)
    // }
  };

  return (
    <div style={{ marginTop: "100px" }}>
      <input
        value={search}
        type="search"
        placeholder="search"
        onChange={searching}
        style={{ height: "23px", marginTop: "50px" }}
      ></input>
        {search && filtered?.map((m, index) => (
        <DivImg>
            <h1>{m.title}</h1> 
          <Image src={m.image} alt="heroImg"></Image>
          <h3>{m.otherName}</h3>
          <button onClick={() => handleedit(m)}>Edit</button>
          <button onClick={() => handlepost(m)}>Post</button>
          <button onClick={() => handledel(m.id)}>Delete</button>
        </DivImg>
      ))}
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
      <form onSubmit={submitdata}>
        <input 
          type="text"
          placeholder="add title"
          name="title"
          value={Form.title}
          onChange={handleimp}
          required
        ></input>
        <input
          type="text"
          placeholder="add image url"
          name="image"
          value={Form.image}
          onChange={handleimp}
          required
        ></input>
        <input
          type="text"
          placeholder="add othername"
          name="otherName"
          value={Form.otherName}
          onChange={handleimp}
          required
        ></input>
        <button>Post Data</button>
      </form>
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
