# namasste-react

import React from "react";
import ReactDOM from "react-dom/client";

\* for assignment #3

const HeadingComponent = () => (

  <div id="container">
    <h1 className="headind">Namasate React functional component</h1>
   </div>
);
  
 
const title = <div clssName="title">
   <h1>This is for assignment</h1>
   <h2>This is for assignment</h2>
   <h3>This is for assignment</h3>
</div>

const TitleComponent = () => (

<div clssName="title">
{HeadingComponent()}
<HeadingComponent />
<HeadingComponent></HeadingComponent>
<h1>This is for assignment</h1>
<h2>This is for assignment</h2>
<h3>This is for assignment</h3>
</div>
);

const HeaderComponent = () => (

   <div className="container">
      <input placeHolder="Search"></input>
   </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(<HeadingComponent />);

root.render(<HeaderComponent />);

\*/
