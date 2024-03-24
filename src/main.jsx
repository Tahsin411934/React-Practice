import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './assets/Components/Root';
import ErrorPage from './assets/Components/ErrorPage/ErrorPage';
import Home from './assets/Components/Home/Home';
import ShowDetails from './assets/Components/ShowDetails/ShowDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element:<Home></Home>
      },
      {
        path: "/job/:id",
        loader: ()=> fetch('../Data.json'),
        element: <ShowDetails></ShowDetails>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
