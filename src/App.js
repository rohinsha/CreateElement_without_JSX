import "./styles.css";
import { createElement, useState } from "react";
export default function App() {
  const [t, setT] = useState("");
  const [tArr, setTArr] = useState(["lime", "pine", "apple"]);
  const add = () => {
    setTArr([...tArr]);
    console.log(tArr);
    setT("");
  };
  const gt = (e) => {
    console.log(e.target.value);
    setT(e.target.value);
  };
  var tt = createElement("h1", { className: "alignCenter" }, "helloo");
  var divT = createElement(
    "div",
    { className: "nah" },
    createElement("h1", { className: "h1cust" }, "heading1"),
    createElement("h2", { className: "h2cust" }, "heading2"),
    createElement("input", {
      className: "h3cust",
      placeholder: "enter here sometihng"
    }),

    createElement(
      "div",
      { className: "firstDiv" },
      createElement("div", { className: "secondDiv" }, "hi i am inside 2 divs")
    )
  );
  var custE = createElement(Custcomp, { name: "rohu", age: 24 });
  return (
    <div className="App">
      {/* <div className="nah">
        <h1 className="h1cust">
          heading1
          </h1>
          <h2 className="h2cust">heading2 </h2>
        
      </div> */}
      {divT}
      {custE}
      <input value={t} onChange={gt} placeholder="enter value" />
      <button onClick={add}>add me</button>

      <ol>
        {tArr.map((x) => {
          return <li key={x}>{x}</li>;
        })}
      </ol>
      {tt}
    </div>
  );
}

export function Custcomp(props) {
  return (
    <>
      <h1>{props.name}</h1>
      <h1>{props.age}</h1>
    </>
  );
}
