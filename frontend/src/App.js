import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/Home'
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Login from './pages/Login';


function App() {
  return (
    <Router>
      <Header />
      <main className="py-6">
        <Container>
          {/* -----Using exact because of '/'----- */}
          <Route path='/'component={Home} exact />
          <Route path='/login'component={Login}  />
          <Route path='/product/:id'component={ProductDetails}  />
          <Route path='/cart/:id?'component={Cart}  />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
