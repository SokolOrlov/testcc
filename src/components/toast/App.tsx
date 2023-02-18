import React from "react";
import ReactDOM from "react-dom";
import ToastContainer, { useToast } from "./Toast";
const App = () => {
  console.log("App");

  const toast = useToast();

  const test = (id:number) => {
    toast({ label: `test ${id}`, type: "info" });
  };

  return (
    <div>
      <ToastContainer />
      <button onClick={()=>test(1)}>toast</button>
      <button onClick={()=>test(2)}>toast</button>
      <button onClick={()=>test(3)}>toast</button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("main"));
