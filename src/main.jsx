import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Details from "./components/Details";
import Login from "./components/Login.jsx";
import Signin from "./components/Signin.jsx";
import OrderInfo from "./components/Orderinfo.jsx";
const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/details/:title" element={<Details />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="/orderinfo" element={<OrderInfo />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
