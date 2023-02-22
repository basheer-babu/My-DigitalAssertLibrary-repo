import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";

import logo from './logo.svg';
import './App.css';
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Products from "./pages/Products";
import Search from "./pages/Search";
import ListProducts from "./pages/ListProducts";
import AddProduct from "./pages/AddProduct";
import ProductDisplay from "./pages/ProductDisplay";
import SideNav from "./pages/reusableComponents/SideNav";
import Alert from "./pages/reusableComponents/Alert";
import PrimarySearchAppBar from "./pages/PrimarySearchAppBar";
import PersistentDrawerLeft from "./pages/PersistentDrawerLeft";
function App() {
  return (
    <Router>
      {/* <PrimarySearchAppBar/> */}
    {/* <nav >
      <Link className="Link" to="/"> Home </Link>
      <Link className="Link"  to="login"> Login </Link>
      <Link className="Link" to="products/search"> Products </Link>
      <Link className="Link" to="sidenav"> Reusable Components </Link>
    </nav>
     */}
     {/* <PersistentDrawerLeft/> */}
    <Routes>
      <Route path="/" element={<PrimarySearchAppBar />} >
      <Route path="sidenav" element={<SideNav />} >
      <Route path="alert" element={<Alert />} />
      </Route>
      
      {/* <Route path="login" element={<Login />} /> */}
      <Route path="products" element={<Products />}>
        <Route path="search" element={<Search />} />
        <Route path="list" element={<ListProducts />} />
        <Route path="add" element={<AddProduct />} />
        <Route path=":id" element={<ProductDisplay />} />
        
      </Route>
      <Route path='*' element={<NotFound />}/>
      </Route>
    </Routes>
  </Router>
  );
}

export default App;
