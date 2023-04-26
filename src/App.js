import './App.css';
import Header from './components/Header/Header';
import HomePage from './components/HomePage/HomePage';
import ContactUs from './components/ContactUs/ContactUs';
import Locations from './components/Locations/Locations';
import Menu from './components/Menu/Menu';
import Footer from './components/Footer/Footer';
import { Route, Routes} from "react-router-dom";


function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={ <HomePage />} />
        <Route path="/contact-us" element={ <ContactUs />} />
        <Route path="/locations" element={ <Locations />} />
        <Route path="/menu" element={ <Menu />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
