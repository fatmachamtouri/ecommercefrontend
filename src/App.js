import './App.css';
import NavScroll from './NavScroll';
import Cart from './components/articlesredux/Cart';
import Listarticles from './components/articlesredux/Listarticles';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import StripePayment from './components/articlesredux/StripePayment';
import CheckoutSuccess from './components/articlesredux/CheckoutSuccess';
import PdfCart from './components/articlesredux/PdfCart';
import ProductsAppAdmin from './admin/components/articles/ProductsAppAdmin';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div className="App">
    <ToastContainer/>
    <Router>
      <NavScroll/>
      <Routes>
        <Route path='/articles' element={<Listarticles/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path="/ckeckout" element={<CheckoutSuccess/>}/>
        <Route path='/pay/:total' element={<StripePayment/>}/>
        <Route path="/pdfcart" element={<PdfCart/>}/>
        <Route path="/articlesadmin" element={<ProductsAppAdmin/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
