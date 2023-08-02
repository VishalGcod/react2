import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addInput, addToArr } from "../redux/inputAction";


function InputComponent() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.obj.arr);
  console.log(data);

  const submittedform = (e) => {
    e.preventDefault();
    dispatch(addToArr(formData));
  };

  const [formData, setFormData] = useState({
    firstname: "",
    age: "",
  });

  const textchange1 = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
      <form onSubmit={submittedform}>
        <input
          name="firstname"
          value={formData.firstname}
          type="text"
          placeholder="enter name"
          onChange={textchange1}
        ></input>
        <input
          name="age"
          value={formData.age}
          type="number"
          placeholder="enter age"
          onChange={textchange1}
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default InputComponent;
