import RequestResponse from 'contexts/RequestResponse';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

export default function App() {
  return (
    <RequestResponse>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </RequestResponse>
  );
}
