import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import DrupalFormWidget from './components/DrupalFormWidget';
import AdminSubmissions from './components/AdminSubmissions';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/drupal-form" element={<DrupalFormWidget />} />
        <Route path="/admin-submissions" element={<AdminSubmissions />} />
      </Routes>
    </Router>
  );
}

export default App;