import './App.css';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Layout from './compnents/layout';
import Property from './compnents/property';
import Login from './compnents/login';
import About from './compnents/about';
import Contact from './compnents/contact';
import Gallery from './compnents/gallery';
// import ReactDOM from "react-dom/client";

function App() {
  return (
   <>
   <Router>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route index element={<Layout/>} />
        <Route path="property" element={<Property />} />
        <Route path="contact" element={<Contact />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="pages/about" element={<About />} />
        <Route path="*" element={<Layout />} />
      </Routes>
    </Router>
 
   </>
  );
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
export default App;
