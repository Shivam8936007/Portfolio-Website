import logo from './logo.svg';
import './App.css';
import {Browserrouter, Route,Routes} from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';

function App() {
  return (
    <>
    <Browserrouter>
    <Routes>
    <Route path="/Home" element={<Home/>} />
    <Route path="/" element={<Header/>} />

    </Routes>
    </Browserrouter>
    <Header/>
    <home/>
    </>

  );
}



export default App;
