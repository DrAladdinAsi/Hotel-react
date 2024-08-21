
import './App.css';

import './layout.scss';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './pages/layout/Layout';
import ListPage from './pages/listPage/ListPage';
import SinglePage from './pages/singlePage/SinglePage';




function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
          path: "/",
          element: <ListPage/>,
        }
        ,{
          path: "hotel/:id",
          element: <SinglePage/>,
        }
      ]
    },
  ]);
  return (
    <RouterProvider router={router} />
  );
}

export default App;
