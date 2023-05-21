import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Sidebar from './components/Sidebar';
import New from './pages/New';
import Gallery from './pages/Gallery';
import Todo from './pages/Todo';
import Signout from './components/Signout';


function App() {
  return (
  <>
  <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/profile/:id" element={<Profile/>}></Route>
    <Route path="/sidebar" element={<Sidebar/>}></Route>
    <Route path='/new' element={<New/>}></Route>
    <Route path='/gallery' element={<Gallery/>}></Route>
    <Route path='/todo' element={<Todo/>}></Route>
    <Route path='/signout' element={<Signout/>}></Route>
  </Routes>
  </>
  );
}

export default App;
