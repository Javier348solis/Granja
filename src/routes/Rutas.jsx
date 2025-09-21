import { createBrowserRouter } from 'react-router-dom';
import Home from '../containers/Home';
import Nabvar from "../components/Nabvar";
import Animales from "../containers/Animals"

const withNavbar = (element) => ([
  <div>
    <Nabvar/>
    {element}
  </div>
]);

const router = createBrowserRouter([
  { path: '/', element: withNavbar(<Home />), },
  { path: '/Animales', element: withNavbar(<Animales/>)}
   
]);

export default router;