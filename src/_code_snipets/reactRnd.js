import * as React from "react";
import { render } from "react-dom";
import { Rnd } from "react-rnd";

const style = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "solid 1px #ddd",
  background: "#f0f0f0"
};

const App = () => (
  <div style={{'width':'500px','height': '200px','border':'1px solid red'}}>
    <Rnd
      style={style}
      bounds='parent'
      dragAxis='x'
      default={{
        x: 0,
        y: 10,
        width: 200,
        height: 200,
      }}
    >
      Rnd
    </Rnd>
  </div>

);

render(<App />, document.getElementById("root"));
