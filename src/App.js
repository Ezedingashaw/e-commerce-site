import './App.css';
import Home from './pages/home';
import { Routes, Route } from 'react-router-dom';
import WishList from './pages/wishList';
import Cart from './pages/cart';
import SignUp from './pages/signUp';
import Login from './pages/login';
import CheckOut from './pages/checkOut';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wishList" element={<WishList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/checkOut" element={<CheckOut />} />
      </Routes>
    </div>
  );
}

export default App;
