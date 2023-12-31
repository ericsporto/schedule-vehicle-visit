import Header from './components/Header';
import History from './pages/History';
import Home from './pages/Home';
import Cars from './pages/Cars';
import CarsPage from './pages/CarsPage';
import { loggedUser } from './mocks/userMock';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header user={loggedUser} />
      <Routes>
        <Route path="/" element={<Home user={loggedUser} />} />
        <Route path="/history" element={<History />} />
        <Route path="/cars" element={<Cars />}/>
        <Route path="/cars/:id" element={<CarsPage user={loggedUser} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
