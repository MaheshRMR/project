import "./App.css";
import { Routes, Route, Link, Navigate, useNavigate } from "react-router-dom";
import ProductList from "./components/ProductList";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Home from "./components/Home";
import CreateProduct from "./components/CreateProduct";
import EditProduct from "./components/EditProduct";
function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <AppBar position="static" sx={{ mb: 8 }} color="warning">
        <Toolbar>
          <Button
            sx={{ mr: 2 }}
            variant="filled"
            onClick={() => navigate("/Home")}
            color="inherit"
          >
            Home
          </Button>
          <Button
            sx={{ mr: 2 }}
            variant="filled"
            onClick={() => navigate("/ProductList")}
            color="inherit"
          >
            Product List
          </Button>
          <Button
            sx={{ mr: 2 }}
            variant="filled"
            onClick={() => navigate("/CreateProduct")}
            color="inherit"
          >
            Create Product
          </Button>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/ProductList" element={<ProductList />} />
        <Route path="/CreateProduct" element={<CreateProduct />} />
        <Route path="/ProductList/Edit/:prodid" element={<EditProduct />} />
      </Routes>
    </div>
  );
}

export default App;
