import { useState } from 'react';
import './App.css';
import Result from './components/APIResult/Result';
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav';
import context from './context';

function App() {
  const [selectedOption, setSelectedOption] = useState(context.fetchTrending)
  return (
    <div className="app">
     <Header/>
     <Nav setSelectedOption = {setSelectedOption} />
     <Result selectedOption = {selectedOption} />
    </div>
  );
}

export default App;
