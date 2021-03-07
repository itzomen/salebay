import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route } from "react-router-dom";

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
          <Route path='/payment'component={Payment}  />
          <Route path='/product/:id'component={ProductDetails}  />
          <Route path='/cart/:id?'component={Cart}  />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
