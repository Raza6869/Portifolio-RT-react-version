import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Color from './pages/Color';
import Sketch from './pages/Sketch';
import Splash from './pages/Splash';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
        {
          path: "/Color",
          element: <Color/>
        },
        {
          path: "Sketch",
          element: <Sketch/>
        },
        {
          path: "/Splash",
          element: <Splash/>
        },
      ],
    },

]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);


