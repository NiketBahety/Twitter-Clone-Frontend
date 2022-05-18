import './App.css';
import AllRoutes from './AllRoutes';
import { BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './assets/ScrollToTop';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    return (
        <div className="App">
            <Router>
                <ScrollToTop />
                <AllRoutes />
            </Router>
        </div>
    );
}

export default App;
