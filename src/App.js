import logo from './logo.svg';
import './App.css';

import Header from './component/Header/Header';
import Home from './component/Home/Home';
import Catagory from './component/Catagory/Catagory';
import Shimpements from './component/Shimpement/Shimpement';
import { createContext, useState } from 'react';
 
export const CatagoryRoni = createContext();

function App() {
  const [count, setCount] = useState(10);
  return (
    <CatagoryRoni.Provider value={[count, setCount]}>
      <h5>Header NO: {count}</h5>
      <Header></Header>
      <Home></Home>
      <Shimpements></Shimpements>
    </CatagoryRoni.Provider>
  );
}


export default App;
