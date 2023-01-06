import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Container from './components/layout/Container';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import NewProject from './components/pages/NewProject';
import Projects from './components/pages/Projects';

function App() {
  return (
    <Router>
      <Navbar />
      <Container customClass='min-height'>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/Contact' exact element={<Contact />} />
          <Route path='/Company' exact element={<Company />} />
          <Route path='/Projects' exact element={<Projects />} />
          <Route path='/NewProject' exact element={<NewProject />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
