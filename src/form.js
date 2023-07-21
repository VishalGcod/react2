import { useState } from "react";
import { styled } from "styled-components";
import itachi from "./itachi-uchiha-naruto-minimal-art-red-background-5k-2880x1800-7749.jpg";
import StarRating from "./starRat2";

import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

export const Formdta = () => {
  const [formData, setFormData] = useState([]);

  const [fname, setfname] = useState("");

  const [city, setcity] = useState("");

  const [rate, setrate] = useState("");

  const [textar, settextar] = useState("");

  const subform = (e) => {
    e.preventDefault();
    const newFormData = [...formData, { fname, city, rate, textar }];
    setFormData(newFormData);
    console.log(newFormData);
    setfname("");
    setcity("");
    setrate("");
    settextar("");
  };

  const namechange = (e) => {
    setfname(e.target.value);
    console.log(e.target.value);
  };
  const Imp = (props) => {
    return (
      <Fdt>
        <lable>Name</lable>
        <Fdt>
          <input
            style={{ border: "1px solid black", height: "20px" }}
            type="text"
            placeholder="enter name"
            onChange={namechange}
            value={fname}
          />
        </Fdt>
      </Fdt>
    );
  };

  const selectedcity = (e) => {
    console.log(e.target.value);
    setcity(e.target.value);
  };

  const Drop = () => {
    const darr = ["select city", "chennai", "usa", "russia"];
    return (
      <Fdt>
        <lable>select city</lable>
        <Fdt>
          <select onChange={selectedcity} value={city}>
            {darr.map((d) => (
              <option>{d}</option>
            ))}
          </select>
        </Fdt>
      </Fdt>
    );
  };

  const selectedrating = (e) => {
    console.log(e.target.value);
    setrate(e.target.value);
  };

  const Drop2 = () => {
    const rarr = ["select ratings", 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5];
    return (
      <Fdt>
        <span>Give rating</span>
        <Fdt>
          <span>
            <select onChange={selectedrating} value={rate}>
              {rarr.map((d) => (
                <option>{d}</option>
              ))}
            </select>
          </span>
        </Fdt>
      </Fdt>
    );
  };

  const Ta = () => {
    return (
      <Fdt>
        <lable>Review</lable>
        <Fdt>
          <textarea
            rows={2}
            cols={16}
            onChange={txtboxdta}
            value={textar}
          ></textarea>
        </Fdt>
      </Fdt>
    );
  };
  const txtboxdta = (e) => {
    settextar(e.target.value);
  };

  // test
  const [tester, settest] = useState("");
  const [tester2, settest2] = useState("");
  const test = (e) => {
    console.log(e.target.value);
    settest(e.target.value);
  };
  const funon = () => {
    settest2(tester);
  };
  // test

  const deleteDta = (index) => {
    const updatedFormData = formData.filter((_, i) => i !== index);
    setFormData(updatedFormData);
  };

  // const isFormValid = fname !== "" && city !== "" && textar !== "";

  const isFormValid = true;
  return (
    <Body>
      <Frm onSubmit={subform}>
        {Imp()}
        <Drop />
        <Drop2 />
        {Ta()}
        {isFormValid && (
          <button
            style={{ height: "35px", width: "35%", marginLeft: "30%" }}
            type="submit"
          >
            SUBMIT
          </button>
        )}
      </Frm>
      <Divs>
        {formData.map((data, index) => (
          <Items key={index}>
            <div>
              <Idiv src={itachi} height={170} width={170}></Idiv>
            </div>
            <Datacontent>
              Name:{data.fname}
              <br />
              City:{data.city}
              <br />
              Ratings:{data.rate}
              <br />
              <StarRating rate={data.rate}></StarRating>
              <br />
              Description:{data.textar}
              <br />
              <button onClick={() => deleteDta(index)}>DELETE</button>
            </Datacontent>
          </Items>
        ))}
      </Divs>
    </Body>
  );
};

const Datacontent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  height: 100%;
  width: 50%;
`;

const Divs = styled.div`
  display: grid;
  grid-template-columns: 45% 45%;
  gap: 5%;
`;

const Items = styled.div`
  height: 300px;
  width: 100%;
  border: 2px solid #bf4f74;
  box-shadow: 4px 3px 4px grey;
  margin-bottom: 25px;
  list-style-type: upper-roman;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border: 2px solid grey;
`;

const Idiv = styled.img`
  border-radius: 50%;
`;

const Frm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: lightblue;
  margin-left: 25%;
  margin-bottom: 25px;
  padding: 2%;
  border: 2px solid grey;
  box-shadow: 4px 4px 4px grey;
  width: 50dvw;
  height: 40dvh;
`;

const Fdt = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: 25%;
`;

const Body = styled.div`
  background-color: #fff0f5;
`;
