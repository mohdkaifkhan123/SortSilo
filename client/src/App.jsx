import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './page/Login';
import Register from './page/Register';
import LandingPage from './page/Landing'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
