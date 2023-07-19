import react, { useState } from "react";

export const Disp = () => {
  const [data, setdata] = useState("");

  const getimput = (e) => {
    console.log(e.target.value);
  };

  const submit = () => {
    console.log("submitted");
  };

  const Imp = () => {
    return (
      <div>
        <input type="submit" value={"Submit"} />
      </div>
    );
  };

  return (
    <div>
      <input type="text" onChange={(e) => getimput(e)}></input>
      {/* <Imp /> */}
      {Imp()}
      <p></p>
    </div>
  );
};
