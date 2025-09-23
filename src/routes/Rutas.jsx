import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../containers/Home";
import Nabvar from "../components/Nabvar";
import Animales from "../containers/Animals";
import Login from "../containers/Login";
import Registro from "../containers/Registro";

// HOC para agregar Navbar
const withNavbar = (element) => (
  <div>
    <Nabvar />
    {element}
  </div>
);

// Protege rutas privadas (ej: Home, Animales)
const PrivateRoute = ({ element }) => {
  const user = JSON.parse(localStorage.getItem("loggedInUser"));
  return user ? element : <Navigate to="/login" replace />;
};

const router = createBrowserRouter([
  { path: "/Registro", element: <Registro /> }, // Registro como página inicial
  { path: "/login", element: <Login /> },
  {
    path: "/",
    element: <PrivateRoute element={withNavbar(<Home />)} />,
  },
  {
    path: "/animales",
    element: <PrivateRoute element={withNavbar(<Animales />)} />,
  },
]);

export default router;
