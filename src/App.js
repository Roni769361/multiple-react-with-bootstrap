import logo from './logo.svg';
import './App.css';

import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Catagory from './component/Catagory/Catagory';
import Shimpements from './component/Shimpement/Shimpement';
import { useState } from 'react';
 

function App() {
  const [count, setCount] = useState(10);
  return (
    <div>
      <h5>Header NO: {count}</h5>
      <Header count={count} setCount={setCount}></Header>
      <Home count={count}></Home>
      <Shimpements></Shimpements>
    </div>
  );
}


export default App;
