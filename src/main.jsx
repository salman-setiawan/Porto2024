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
import NotFound from './pages/notfound';
import AnotherIslandArticle from './pages/content/anotherislandarticle';
import AnotherIslandGallery from './pages/content/anotherislandgallery';
import MobtoonArticle from './pages/content/mobtoonarticle';
import MobtoonGallery from './pages/content/mobtoongallery';
import EduworkGallery from './pages/content/eduworkgallery';
import EdufamsArticle from './pages/content/edufamsarticle';
import EdufamsGallery from './pages/content/edufamsgallery';
import InstaGallery from './pages/content/instagallery';
import EduworkArticle from './pages/content/eduworkarticle';
import DuaDelapansArticle from './pages/content/duadelapansarticle';

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
    path: "/content/eduwork/articleview",
    element: <EduworkArticle />,
  },
  {
    path: "/content/eduwork/galleryview",
    element: <EduworkGallery />,
  },
  {
    path: "/content/edufams/articleview",
    element: <EdufamsArticle />,
  },
  {
    path: "/content/edufams/galleryview",
    element: <EdufamsGallery />,
  },
  {
    path: "/content/duadelapans/articleview",
    element: <DuaDelapansArticle />,
  },
  {
    path: "/content/uigallery/galleryview",
    element: <InstaGallery />,
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
