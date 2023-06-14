import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Modal from 'react-modal';
import Home from './pages/Home'
import Movie from './pages/Movie';

Modal.setAppElement('#root');

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />}  />
                <Route path="/movie" element={<Movie />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
