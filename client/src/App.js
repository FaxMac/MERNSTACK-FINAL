import './App.css';
import IndexPage from './Pages/IndexPages/IndexPages';
import ProductsPage from './Pages/ProductsPages/ProductsPages';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import RegisterPage from './Pages/RegisterPage/RegisterPage';
import AboutPage from './Pages/AboutPage/AboutPage';
import AdminProductsView from './Pages/AdminView/AdminProductsView';
import AdminLandingPage from './Pages/AdminView/AdminLandingPage';
import { LoginButton } from './Pages/Auth0/login';
import { LogoutButton } from './Pages/Auth0/logout';
import {Profile} from './Pages/Auth0/profile';
import {useAuth0} from '@auth0/auth0-react'
import {Route, Routes} from 'react-router-dom';
import React from 'react';
import { CartProvider } from './Pages/Carrito/Carrito';
import Cart from './Pages/Cart';
import VerCarrito from './Pages/verCarrito/verCarrito';
import ShopPage from './Pages/Pagos/Pagos';
import AdminClientsView from './Pages/AdminView/AdminClientsView';
import ViewPdf from './Pages/Pagos/Pdf';
import CancelPage from './Pages/Pagos/Cancelar';

function App() {
  const {isAuthenticated} = useAuth0();

  return (
    <CartProvider>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <a className="navbar-brand" href="/">Fukusuke Sushi-Delivery</a>
            <ul className="navbar-nav me-auto">
              <li className="nav-item" role="presentation">
                <a className="nav-link" href="/productos">Productos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/acerca">Sobre Nosotros</a>
              </li>
              { isAuthenticated ? (
                <>
                <Profile></Profile>
                <LogoutButton></LogoutButton>
                </>
              ) : (
                <LoginButton></LoginButton>
              )}
            </ul>
            <Cart></Cart>
          </div>
        </nav>
        
        <Routes>
          <Route path="/" element={<IndexPage/>} />
          <Route path="/productos" element={<ProductsPage/>} />
          <Route path="/detalles/:_product_id" element={<ProductDetails/>} />
          <Route path="/acerca" element={<AboutPage/>} />
          <Route path="/admin/productos" element={<AdminProductsView/>} />
          <Route path="/admin/clientes" element={<AdminClientsView/>} />
          <Route path="/admin" element={<AdminLandingPage/>} />
          <Route path="/registro" element={<RegisterPage/>} />
          <Route path="/verCarrito" element={<VerCarrito/>} />
          <Route path="/pagos" element={<ShopPage/>} />
          <Route path="/viewpdf" element={<ViewPdf/>} />
          <Route path="/cancelar" element={<CancelPage/>} />
        </Routes>

      </div>
    </CartProvider>
  )
}

export default App;
