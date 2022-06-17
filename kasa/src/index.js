import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { createGlobalStyle } from 'styled-components'
import Home from './pages/Home'
import Apropos from './pages/Apropos';
import Header from './components/Header'
import Footer from './components/Footer'
import Error from './components/Error'

const GlobalStyle = createGlobalStyle`
    * {
      font-family: 'Montserrat', Helvetica, sans-serif;
    }
    body {
      width: 100%;
      margin: auto;
    }
    h1 {
      margin: 0;
    }
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <GlobalStyle />
    <Header />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/apropos" element={<Apropos />} />
      <Route path="*" element={<Error />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);