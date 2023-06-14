import { BrowserRouter, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import Modal from 'react-modal';
import Home from './pages/Home'
import Movie from './pages/Movie';

Modal.setAppElement('#root');

axios.defaults.headers.common['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNjYzZGMzN2JmOTJiNzljOWY1NDNhNTVkNTg4YmRkMSIsInN1YiI6IjY0ODA0ZTI1ZTM3NWMwMDBmZjQ2NzhkOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2L7MDctUtPh96aqHhFIKEPQv6LqHEILb5b8hAwFOyhM';

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
