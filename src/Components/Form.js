import React, { useState } from "react";

function Form() {
  const [inputValue, setInputValue] = useState("");
  const handleSubmit = () => {};
  return (
    <Form id="main_form" onSubmit={handleSubmit}>
      <h1>Enter Pincode</h1>
      <input
        type="text"
        name="pincode"
        placeholder="Pincode"
        value={inputValue}
        onClick={(e) => setInputValue(e.target.value)}
      />
      <button>Lookup</button>
    </Form>
  );
}

export default Form;
