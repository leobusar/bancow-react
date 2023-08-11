import {Route, Routes, BrowserRouter as Router, createBrowserRouter} from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import NotFound from '../pages/NotFound';

const rutas =  (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} errorElement ={<NotFound />} />
            <Route path="/about" element={<About />} />
        </Routes>
    </Router>
)



export default rutas