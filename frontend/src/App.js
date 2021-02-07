import { Container } from 'react-bootstrap'

import Header from './components/Header'
import Footer from './components/Footer'

import Home from './pages/Home'

function App() {
  return (
    <div>
      <Header />
      <main className="py-6">
        <Container>
          <Home />
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
