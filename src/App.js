import Footer from './components/Footer';
import Header from './components/Header';
import { Container } from 'react-bootstrap';
import HomePage from './pages/HomePage';
function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        <Container>
          <HomePage/>
        </Container>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
