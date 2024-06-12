import React from "react";
import { useRoutes, BrowserRouter } from 'react-router-dom';
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import FavoriteProduct from "../pages/FavoriteProduct";
import SalesShop from "../pages/SalesShop";
import CreateProduct from "../pages/CreateProduct";
import HomePage from "../pages/HomePage";
import Product from "../pages/Product";
import ProductDetail from "../pages/ProductDetail";
import Payment from "../pages/Payment";
import OrderTracking from "../pages/OrderTracking";
import Profile from "../pages/Profile";
import CustomerLayoutOfShop from "../pages/CustomerLayoutOfShop";
import ListOfShop from "../pages/ListOfShop";
import Blog from "../pages/Blog";
import BlogDetail from "../pages/BlogDetail";
import Contact from "../pages/Contact";
import CustomerCare from "../pages/CustomerCare";
import Login from "../pages/Login";
import Mailbox from "../pages/Mailbox";
import Chatbox from "../pages/Chatbox";
import DashboardADMIN from "../pages/DashboardADMIN";
import OrderManagement from "../pages/OrderManagement";
import ClientManagementAdmin from "../pages/ClientManagementAdmin";
import Register from "../pages/Register";
import Order from "../pages/Order";
import ShopLayout from "../pages/ShopLayout";
import Policy from "../pages/Policy";
import CartDetail from "../pages/CartDetail";
import PaymentSuccess from "../pages/PaymentSuccess";
import CompareProducts from "../pages/CompareProducts";
import Dashboard from "../pages/Dashboard";
import SalesManager from "../pages/SalesManagement";
import CategoriesManager from "../pages/CategoriesAdmin";
import AdminProducts from "../pages/ProductsAdmin";
import Test2 from "../pages/Test";
import TestAdmin from "../pages/TestAdmin";


const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <HomePage /> },
    { path: "*", element: <NotFound /> },
    { path: "favorite-product", element: <FavoriteProduct /> },
    { path: "sales-shop/:id", element: <SalesShop /> },
    { path: "createproduct", element: <CreateProduct /> },
    { path: "homepage", element: <HomePage /> },
    { path: "product", element: <Product /> },
    { path: "productdetail/:id", element: <ProductDetail /> },
    { path: "payment", element: <Payment /> },
    { path: "ordertracking", element: <OrderTracking /> },
    { path: "profile", element: <Profile /> },
    { path: "customerlayoutofshop", element: <CustomerLayoutOfShop /> },
    { path: "shops", element: <ListOfShop /> },
    { path: "blog", element: <Blog /> },
    { path: "blogdetail", element: <BlogDetail /> },
    { path: "contact", element: <Contact /> },
    { path: "customercare", element: <CustomerCare /> },
    { path: "login", element: <Login /> },
    { path: "mailbox", element: <Mailbox /> },
    { path: "chatbox", element: <Chatbox /> },
    { path: "register", element: <Register /> },
    { path: "order", element: <Order /> },
    { path: "shoplayout", element: <ShopLayout /> },
    { path: "policy", element: <Policy /> },
    { path: "cartdetail", element: <CartDetail /> },
    { path: "paymentsuccess", element: <PaymentSuccess /> },
    { path: "compareproducts", element: <CompareProducts /> },
    { path: "dashboard", element: <Dashboard /> },
    { path: "test", element: <Test2 /> },
    { path: "admin", element: <TestAdmin /> },
    { path: "admin-dashboard", element: <DashboardADMIN /> },
    { path: "admin-orders", element: <OrderManagement /> },
    { path: "admin-users", element: <ClientManagementAdmin /> },
    { path: "admin-shops", element: <SalesManager /> },
    { path: "admin-categories", element: <CategoriesManager /> },
    { path: "admin-products", element: <AdminProducts /> },
  ]);
  return element;
};

export default ProjectRoutes;
