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
// import Alert from "./pages/reusableComponents/CustomizedSnackbars";
import PrimarySearchAppBar from "./pages/PrimarySearchAppBar";
import PersistentDrawerLeft from "./pages/PersistentDrawerLeft";
import CustomizedSnackbars from "./pages/reusableComponents/CustomizedSnackbars";
import PermanentDrawerLeft from "./pages/PermanentDrawerLeft";
import ProjectCard from "./pages/reusableComponents/ProjectCard";
import PaperList from "./pages/reusableComponents/Paper";
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
      <Route path="drawer" element={<PermanentDrawerLeft />} />
      <Route path="sidenav" element={<SideNav />} >
      <Route path="alert" element={<CustomizedSnackbars />} />
      <Route path="paper" element={<PaperList />} />
      <Route path="card" element={<ProjectCard />} />
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
