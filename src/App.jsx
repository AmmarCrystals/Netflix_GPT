import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="bg-green-500 h-screen flex items-center justify-center">
        <h1 className="text-red-500 text-4xl font-bold">
          Tailwind is Working!
        </h1>
      </div>
    </>
  );
}

export default App;
