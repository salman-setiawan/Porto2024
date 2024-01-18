import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import IntroPages from './pages/intro';
import CollectionPages from './pages/collection';
import Profile from './pages/profile';
import AnotherIslandArticle from './pages/content/anotherislandarticle';
import AnotherIslandGallery from './pages/content/anotherislandgallery';
import NotFound from './pages/notfound';
import MobtoonArticle from './pages/content/mobtoonarticle';
import MobtoonGallery from './pages/content/mobtoongallery';
import NoContent from './pages/nocontent';

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
    path: "/content/mobtoon/articleview",
    element: <MobtoonArticle />,
  },
  {
    path: "/content/mobtoon/galleryview",
    element: <MobtoonGallery />,
  },
  {
    path: "/content/anotherisland/articleview",
    element: <AnotherIslandArticle />,
  },
  {
    path: "/content/anotherisland/galleryview",
    element: <AnotherIslandGallery />,
  },
  {
    path: "*",
    element: <Navigate to="404" />,
  },
  {
    path: "/404",
    element: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </React.StrictMode>,
)
