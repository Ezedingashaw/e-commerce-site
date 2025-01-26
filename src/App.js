import './App.css';
import Home from './pages/home';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { io } from 'socket.io-client'
import WishList from './pages/wishList';
import Cart from './pages/cart';
import SignUp from './pages/signUp';
import Login from './pages/login';
import CheckOut from './pages/checkOut';
import MyAccount from './pages/myAccount';
import Contact from './pages/contact.jsx';
import Error from './pages/notFound.jsx';
import ViewProduct from './component/common/viewProduct.jsx';
import SellerRegister from './component/sellerRegister.jsx';
import RatingForm from './component/ratingForm.jsx';
import RatingFormWrapper from './component/common/ratingFormWrapper.jsx';
import { useEffect, useState } from 'react';
import Rate from './component/common/rate.jsx';
import Products from './pages/products.jsx';
import ProductsSelect from './pages/productsSelect.jsx';
import ServerError from './pages/serverError.jsx';
import Invoice from './component/common/invoice.jsx';

function App() {


  const [category, setCategory] = useState();
  const [error, setError] = useState(false);
  const [user, setUser] = useState(null);
  const [cartItemsCount, setCartItemsCount] = useState(sessionStorage.getItem('cartItemsCount'));
  const [wishedItemsCount, setWishedItemsCount] = useState(sessionStorage.getItem('wishedItemsCount'));
  const [productInPendingId, setProductInPendingId] = useState(null);
  const [newProduct, setNewProduct] = useState(null);
  const [is_cart_updated, setIs_cart_updated] = useState(0);
  const [is_wishlist_updated, setIs_wishlist_updated] = useState(0);

  const changeCategory = (category) => {
    setCategory(category);
    console.log(category);
  }

  useEffect(() => {

    const socket = io("http://localhost:3009/user")

    const initializeSocket = (user) => {

      socket.on("connect", () => {
        console.log("Connected")
  
        socket.on("statusPending", (response) => {
          const id = response._id;
          console.log("Status pending", id);
          setProductInPendingId(id);
        })

        socket.on("statusApproved", (response) => {
          setNewProduct(response)
        })

        if (user) {
          socket.emit("login", user.id)
        }
  
      })

    }
       
    try {
      const user = localStorage.getItem('user');
      if (user) {
        var decoded = jwtDecode(user);
        setUser(decoded);
        initializeSocket(decoded)
      } else {
        setUser(null);
        initializeSocket(null);
      }

    } catch (error) { 
      setError(true);
      }
        
  }, []);

  const CartUpdated = () => {
    let is_cart_update = is_cart_updated;
    is_cart_update += 1;

    setIs_cart_updated(is_cart_update);
  }

  function wishedUpdated (){
    let is_wishlist_update = is_wishlist_updated;
    is_wishlist_update += 1;

    setIs_wishlist_updated(is_wishlist_update);
  }
  
  if (error) {
    return <ServerError />
  }
   
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home wishes={is_wishlist_updated} wishedUpdated={wishedUpdated} CartUpdated={CartUpdated} newProduct={newProduct} pendinProduct={productInPendingId} user={user} />} />
        {user && <Route path="/wishList" element={<WishList wishes={is_wishlist_updated} user={user} />} />}
        {user && <Route path="/cart" element={<Cart CartUpdated={CartUpdated} user={user} />} />}
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/rating/:id" element={<RatingFormWrapper />} />
        <Route path="/checkOut" element={<CheckOut user={user} />} />
        <Route path="/myAccount" element={<MyAccount />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:id" element={<ViewProduct CartUpdated={CartUpdated} user={ user } />} />
        <Route path="/products/*" element={<Products />}/>
        <Route path="/products/select/*" element={<ProductsSelect />}/>
        <Route path="/*" element={<Error />} />
        <Route path="/register" element={<SellerRegister />} />
        <Route path="/serverError" element={<ServerError />} />
        <Route path="/setting" element={<MyAccount user={user} />} />
        <Route path="/invoice/:id" element={ <Invoice /> } />
      </Routes>
    </div>
  );
}

export default App;
