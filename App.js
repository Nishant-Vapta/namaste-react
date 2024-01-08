/*
<div id="parent">
  <div id="child1">
    <h1>I am h1 tag</h1>
    <h2>I am h2 tag</h2>
  </div>

  <div id="child2">
    <h1>I'm h1 tag</h1>
    <h2>I'm h2 tag</h2>
  </div>
</div>
*/

const parent = React.createElement("div", { id:"parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I am h1 tag"), 
    React.createElement("h2", {}, "I am h2 tag")
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "i'm h1 tag"),
    React.createElement("h2", {}, "i'am h2 tag")
  ])
]);



const heading = React.createElement("h1", {}, "Hello From React");
  
const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(heading);

//console.log(heading);

root.render(parent);
console.log(parent);