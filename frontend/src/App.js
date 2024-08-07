import Home from "./pages/home";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Login from "./pages/login";
import Requireauth from "./components/RequireAuth/Requireauth";
import Signup from "./pages/signup";

function App() {
    return (
          <BrowserRouter>
          <Routes>
            <Route index element={<Requireauth><Home /></Requireauth>} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
          </BrowserRouter>
    );
}

export default App;
