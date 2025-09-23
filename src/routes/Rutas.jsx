import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../containers/Home";
import Navbar from "../components/Nabvar/index";
import Animales from "../containers/Animals";
import Login from "../containers/Login";
import Registro from "../containers/Registro";

// HOC para envolver cualquier página con el Navbar
const withNavbar = (element) => (
  <div>
    <Navbar />
    {element}
  </div>
);

// Componente de ruta privada
const PrivateRoute = ({ children }) => {
  // Verifica si hay usuario logueado en localStorage
  const user = JSON.parse(localStorage.getItem("loggedInUser"));
  if (!user) return <Navigate to="/login" replace />;
  return children;
};

// Definición de rutas
const router = createBrowserRouter([
  {
    path: "/registro",
    element: <Registro />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: (
      <PrivateRoute>
        {withNavbar(<Home />)}
      </PrivateRoute>
    ),
  },
  {
    path: "/animales",
    element: (
      <PrivateRoute>
        {withNavbar(<Animales />)}
      </PrivateRoute>
    ),
  },
]);

export default router;
