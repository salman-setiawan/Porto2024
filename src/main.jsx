import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import IntroPages from './pages/intro';
import CollectionPages from './pages/collection';
import Profile from './pages/profile';
import Mobtoon from './pages/content/mobtoon';
import AnotherIsland from './pages/content/anotherisland';

const router = createBrowserRouter([
  {
    path: "/",
    element: <IntroPages />,
  },
  {
    path: "/collection",
    element: <CollectionPages />,
  },
  {
    path: "/bio",
    element: <Profile />,
  },
  {
    path: "/content/mobtoon",
    element: <Mobtoon />,
  },
  {
    path: "/content/anotherisland",
    element: <AnotherIsland />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
