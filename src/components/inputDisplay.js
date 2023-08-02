import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { editToArr, addToArr, updateData } from "../redux/inputAction";
import { useState } from "react";

export function InputDisplay() {
  const data = useSelector((state) => state.obj.arr);
  const dispatch = useDispatch();

  function clickToDelete(index) {
    console.log(index);
    const delitedData = data.filter((_, i) => i !== index);
    console.log(delitedData);
    dispatch(editToArr(delitedData));
  }

  const [formUpData, setFormUpData] = useState({
    firstname: "",
    age: "",
  });

  const textUpdatechange = (e) => {
    const { name, value } = e.target;
    setFormUpData({ ...formUpData, [name]: value });
  };

  const clickEdit = (index) => {
    console.log(updateData);
    const newData = [...data];
    newData[index] = formUpData;
    dispatch(updateData(newData));
    // console.log(newData[index]);
    const dataEmpty = { firstname: "", age: "" };
    setFormUpData(dataEmpty);
  };

  return (
    <div>
      {data.map((e, index) => (
        <div key={index}>
          <h1>{e.firstname}</h1>
          <h1>{e.age}</h1>
          <button onClick={() => clickToDelete(index)}>Delete</button>
          <div>
            <input
              name="firstname"
              // value={formUpData.firstname}
              type="text"
              placeholder="enter name"
              value={formUpData.firstname}
              onChange={textUpdatechange}
            ></input>
            <input
              name="age"
              // value={formUpData.age}
              type="number"
              placeholder="enter age"
              value={formUpData.age}
              onChange={textUpdatechange}
            ></input>
          </div>
          <button onClick={() => clickEdit(index)}>Update</button>
        </div>
      ))}
    </div>
  );
}

export default InputDisplay;
