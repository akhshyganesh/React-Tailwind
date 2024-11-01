import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="m-auto-row min-h-screen items-center content-center ">
      <div className="flex justify-center space-x-8 my-8">
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img
            src={viteLogo}
            alt="Vite logo"
            className="h-44 p-6 transition-transform duration-300 hover:drop-shadow-[0_0_8px_#646cffaa]"
          />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img
            src={reactLogo}
            alt="React logo"
            className="h-44 p-6 transition-transform duration-300 hover:drop-shadow-[0_0_8px_#61dafbaa] animate-spin-slow"
          />
        </a>
      </div>
      <h1 className="text-6xl font-bold text-center my-8">Vite + React</h1>
      <div className="text-white p-8 rounded-lg text-center">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="bg-gray-900 hover:border-[#646cff] border border-transparent rounded-lg py-2 px-4 font-medium transition duration-300"
        >
          count is {count}
        </button>
        <p className="mt-4">
          Edit{" "}
          <code className="bg-gray-700 rounded px-1 py-0.5">src/App.jsx</code>{" "}
          and save to test HMR
        </p>
      </div>
      <p className="text-gray-500 text-center mt-8">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
