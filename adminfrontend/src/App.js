import "./App.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Resetpassword from "./pages/Resetpassword";
import Forgotpassword from "./pages/Forgotpassword";
import MainLayout from "./components/MainLayout";
import Customers from "./pages/Customers";
import Providers from "./pages/Providers";
import Addprovider from "./pages/Addprovider";
import ProviderProduct from "./pages/providerProduct";
import ProductDetails from "./pages/ProductDetails";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/reset-password" element={<Resetpassword />} />
        <Route path="/forgot-password" element={<Forgotpassword />} />
        <Route path="/admin" element={<MainLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="customers" element={<Customers />} />
          <Route path="providers" element={<Providers />} />
          <Route path="add-provider" element={<Addprovider/>}/>
          <Route path="provider-list" element={<Providers/>}/>
          <Route path="provider-products/:id" element={<ProviderProduct/>}/>
          <Route path="product-details/:id" element= {<ProductDetails/>}/>
        
        </Route>
      </Routes>
    </Router>
  );
}

export default App;