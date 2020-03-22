import React from "react";
import "./App.css";
// import MasonaryGridProjects from "./Components/MasonaryGridProjects";
// import SlidePagination from "./Components/SlidePagination";
// import ProjectList from "./Components/ProjectList";
import MostlySane from "./Components/MostlySaneAnime";
function App() {
  return (
    <div className="App">
      {/* <SlidePagination width="100%" components={ProjectList} />
      <MasonaryGridProjects /> */}
      <MostlySane />
    </div>
  );
}

export default App;
