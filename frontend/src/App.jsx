import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import AdminHeader from './components/admin/AdminHeader'
import AdminFooter from './components/admin/AdminFooter'
import Home from './pages/Home'
import Admin from './pages/Admin'
import AddProduct from './pages/AddProduct'
import AddCategory from './pages/AddCategory'
import Register from './pages/Register'
import Login from './pages/Login'
import Products from './pages/Products'
import Cart from './pages/Cart'
import Profile from './pages/Profile'
import Orders from './pages/Orders'
import './App.css'
import './styles/profile.css'
import './styles/orders.css'

// Layouts
const MainLayout = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
)

const AdminLayout = () => (
  <>
    <AdminHeader />
    <Outlet />
    <AdminFooter />
  </>
)

function App() {
  return (
    <Router>
      <Routes>
        {/* Main site layout */}
        <Route element={<MainLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/orders" element={<Orders />} />
          {/* Add more main routes here */}
        </Route>
        {/* Admin layout */}
        <Route element={<AdminLayout />}>
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/add-product" element={<AddProduct />} />
          <Route path="/admin/add-category" element={<AddCategory />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  )
}

export default App
