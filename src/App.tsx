import { useState } from "react";
// import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { Nav } from "./components/Nav";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Header /> */}
      <Nav />
      <Home />
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </>
  );
}

export default App;
