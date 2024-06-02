import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Header from './components/Header';
import "./App.css";
import Home from './components/Home';
import Detail from "./components/Detail";
import Search from "./components/Search";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Login/>}>
          </Route>

          <Route path = '/home' element={<Home/>}>
          </Route>

          <Route path='/detail/:id' element={<Detail/>}>
          </Route>

          <Route path = '/search' element={<Search/>}>
          </Route>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
