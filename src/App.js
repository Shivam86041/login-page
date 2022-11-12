import BasicForm from "./Components/BasicForm"
import Admin from "./Components/Admin"
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Routes>
        <Route index path="/"  element={<BasicForm />}/>
        <Route  path="/login" element={<BasicForm />} />  
        <Route path="/admin" element={<Admin />} />        
      </Routes>
    </Router>
  );
}

export default App;
