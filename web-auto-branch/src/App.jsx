import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NotFound from "./pages/404/NotFound";
import "./App.css";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./pages/auth/Login/Login";
import Register from "./pages/auth/Register/Register";
import Branch from "./pages/Branches/Branch";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route element={<PrivateRoute />}>
          <Route path="/branches" element={<Branch />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
