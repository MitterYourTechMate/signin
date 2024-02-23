import logo from './logo.svg';
import './App.css';
import Checkout from './components/checkout';
import SignIn from './components/signin';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { auth } from './firebase/config';
import React from 'react';

function App() {
  const [user, setUser] = React.useState(null)
 
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn setUser={setUser}></SignIn>}></Route>
        <Route path="/checkout" element={user?<Checkout ></Checkout>:<SignIn setUser={setUser}></SignIn>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
