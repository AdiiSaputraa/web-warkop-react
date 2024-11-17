import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import './styles/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx'
import ScrollToTop from './components/ScrollToTop.jsx';
import 'animate.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>

    <ScrollToTop/>
      <App/>
    </BrowserRouter>
  </StrictMode>,
)
