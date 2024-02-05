import MovieList from "./components/MovieList.jsx";
import { useState } from "react";
import logo from "./assets/logo.png";
// import Navbar from "./Navbar";

function App() {
  const [search, setSearch] = useState("");
  return (
    <div>
      {/* <Navbar /> */}
      <header className="bg-[#282736] flex justify-between items-center px-[50px] py-[25px]">
        <a href="/">
          <img src={logo} alt="logo" className="h-[30px]" />
        </a>
        <input
          onChange={(e) => setSearch(e.target.value)}
          type="search"
          placeholder="Search here!"
          className="bg-[#525073] px-[15px] py-[10px] rounded-md w-[350px]"
        />
      </header>
      <MovieList searchValue={search.toLowerCase()}/>
    </div>
  );
}

export default App;
