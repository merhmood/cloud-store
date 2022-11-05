/**
 * node_modules packages should always be addded to the section
 * denoted as node modules, while other imports should be added to
 * the section denoted as app created, this helps in organization
 * of import statements <3
 */

//node_modules
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from "react-router-dom"

//app created
import routes from './pages/routes';
import './index.css'

const appPagesRoutes = createBrowserRouter(routes)

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <RouterProvider router={appPagesRoutes}/>
);

