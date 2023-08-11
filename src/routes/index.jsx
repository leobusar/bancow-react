import {Route, Routes, BrowserRouter as Router, createBrowserRouter} from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import NotFound from '../pages/NotFound';
import Persons from '../pages/Persons';

const rutas =  (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} errorElement ={<NotFound />} />
            <Route path="/about" element={<About />} />
            <Route path='/persons' element={<Persons />} />
        </Routes>
    </Router>
)



export default rutas