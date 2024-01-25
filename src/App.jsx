// import Hello from "./components/Hello";
// import makersLogo from "./assets/Makers-Logo.png";
import React from "react";
import Gig from "./gig";
import "./App.css";

// function App() {
//   return (
//     <>
//       <Hello name="World" />
//       <img className="logo" src={makersLogo}></img>
//     </>
//   );
// }

const App = () => {
  return (
    <div>
      <Gig
      header = "THE SAD PROGRAMMERS"
      description = "We will play the songs of our people"
      timeDate = "29/02/2023"
      location = "a village hall near you"
      />
    </div>
  )
}



export default App;
