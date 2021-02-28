import { useState, useContext } from "react";
import Form from "./Form";
import CountField from "./CountField";
import InputContext from "../contexts/InputContext";

export default function InputField() {
  const [num, setNum] = useState(0);
  return (
    <>
      <InputContext.Provider value={[num, setNum]}>
        <Form />
        <CountField />
      </InputContext.Provider>
    </>
  );
}
