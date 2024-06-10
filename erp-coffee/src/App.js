import { Route, Routes } from 'react-router-dom';
import './App.css';
import { SignIn } from './pages/user/SignIn';
import SignUp from './pages/user/SignUp';
import Header from './pages/ui/Header';
import SideBar from './pages/ui/SideBar';
import Home from './pages/Home';
import UserModify from './pages/user/UserModify';
import Bom from './pages/production/Bom';
import BomList from './pages/production/BomList';
import Inventory from './pages/production/Inventory';
import InventoryList from './pages/production/InventoryList';
import Product from './pages/production/Product';
import ProductList from './pages/production/ProductList';
import Order from './pages/purchase/Order';
import OrderList from './pages/purchase/OrderList';
import Purchase from './pages/purchase/Purchase';
import PurchaseList from './pages/purchase/PurchaseList';
import Sales from './pages/sales/Sales';
import SalesList from './pages/sales/SalesList';


function App() {
  return (
    <>
      <div className="App">
      <Header className="Header" />
      <div className="Main">
        <SideBar className="SideBar" />
        <div className="Content">
          <Routes>
            {/* user */}
            <Route path="/userModify" element={<UserModify />}></Route>
            <Route path="/" element={<SignIn />}></Route>
            <Route path="/signUp" element={<SignUp />}></Route>

            {/* main */}
            <Route path="/home" element={<Home />}></Route>
            
            {/* Production */}
            <Route path="/bom" element={<Bom />}></Route>
            <Route path="/bomList" element={<BomList />}></Route>
            <Route path="/inventory" element={<Inventory />}></Route>
            <Route path="/inventoryList" element={<InventoryList />}></Route>
            <Route path="/product" element={<Product />}></Route>
            <Route path="/productList" element={<ProductList />}></Route>

            {/* Purchase */}
            <Route path="/order" element={<Order />}></Route>
            <Route path="/orderList" element={<OrderList />}></Route>
            <Route path="/purchase" element={<Purchase />}></Route>
            <Route path="/purchaseList" element={<PurchaseList />}></Route>

            {/* Sales */}
            <Route path="/sales" element={<Sales />}></Route>
            <Route path="/salesList" element={<SalesList />}></Route>

          </Routes>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
