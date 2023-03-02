import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/pages/login/login";
import Register from "./components/pages/register/register";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
