import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HomPage from "./pages/hom-page";
import CartDetail from "./pages/cart-detail";
import Product from "./pages/product";
import Profile from "./pages/profile";
import Login from "./pages/login";
import Register from "./pages/register";
import ProductDetail from "./pages/product-detail";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/gi-hng":
        title = "";
        metaDescription = "";
        break;
      case "/sn-phm":
        title = "";
        metaDescription = "";
        break;
      case "/profile":
        title = "";
        metaDescription = "";
        break;
      case "/ng-nhp":
        title = "";
        metaDescription = "";
        break;
      case "/register":
        title = "";
        metaDescription = "";
        break;
      case "/productdetail":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomPage />} />
      <Route path="/gi-hng" element={<CartDetail />} />
      <Route path="/sn-phm" element={<Product />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/ng-nhp" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/productdetail" element={<ProductDetail />} />
    </Routes>
  );
}
export default App;
