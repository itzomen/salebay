import { Container } from 'react-bootstrap'
import { HashRouter as Router, Route } from "react-router-dom";

import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Shipping from './pages/Shipping';
import Payment from './pages/Payment';
import PlaceOrder from './pages/PlaceOrder'
import OrderDetails from './pages/OrderDetails'
import UserList from './pages/UserList'
import UserEdit from './pages/UserEdit'
import ProductList from './pages/ProductList'
import ProductEdit from './pages/ProductEdit'
import OrderList from './pages/OrderList'


function App() {
  return (
    <Router>
      <Header />
      <main className="py-6">
        <Container>
          {/* -----Using exact because of '/'----- */}
          <Route path='/'component={Home} exact />
          <Route path='/login'component={Login}  />
          <Route path='/register'component={Register}  />
          <Route path='/profile'component={Profile}  />
          <Route path='/shipping'component={Shipping}  />
          <Route path='/placeorder'component={PlaceOrder}  />
          <Route path='/order/:id'component={OrderDetails}  />
          <Route path='/payment'component={Payment}  />
          <Route path='/product/:id'component={ProductDetails}  />
          <Route path='/cart/:id?'component={Cart}  />

          <Route path='/admin/userlist' component={UserList} />
          <Route path='/admin/user/:id/edit' component={UserEdit} />

          <Route path='/admin/productlist' component={ProductList} />
          <Route path='/admin/product/:id/edit' component={ProductEdit} />

          <Route path='/admin/orderlist' component={OrderList} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
