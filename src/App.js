import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Artist from './pages/Artist'
import FAQ from './pages/Faq'
import { Col, Container, Row } from 'react-bootstrap';
function App() {
  return (
    <div className="App">
      <Header />
      <div className='bg-container'>
        <Container className='main-container'>
          <Row className='main-row'>
            <Col xl={5} lg={6}>
              <img className='main-img' src='https://lordsocietynft.com/static/media/c1.dd772cc4294a24aa0fbc.png' alt='nft' />
            </Col>
            <Col xl={5} lg={6}>
              <p className='main-text'>Collection Is SOLD OUT, but you can buy your Lords on Opensea</p>
              <a href='https://opensea.io/collection/lordsocietynft-v2' target="_blank" className='buy-btn'>BUY ON OPENSEA</a>
            </Col>
          </Row>
        </Container>
      </div>
      <Home  />
      <About />
      <Artist />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
