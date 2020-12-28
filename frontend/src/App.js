import React from 'react';
import { Container } from 'react-bootstrap'
import Header from './components/Header';
import Footer from './components/Footer';
import context from 'react-bootstrap/esm/AccordionContext';

const App = () => {
  return (
    <>
    <Header />
    <main>
      <Container className = 'py-3'>
      <h1>hello everyone</h1>
      </Container>
    </main>
    <Footer />
    </>
  );
}

export default App;
