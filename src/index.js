// src/index.js - tawa bech nzidou comments
import React from 'react';
import ReactDOM from 'react-dom/client';

// tawa bech nzidou import router functions
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';

// lehner 9a3din nzidou components li yelzemou lil routes
import App from './App'; // tawa bech nzidou layout principal
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import ErrorPage from './pages/ErrorPage'; // tawa bech nzidou page erreur

// tawa bech ncreate router w-config
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // lehner element parent app
    errorElement: <ErrorPage />, // tawa bech ythaher page erreur ki fama problem
    children: [
      // lehner 9a3din nzidou routes enfants fi outlet
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "about", // tawa note: mouch darouri / fil debut lel enfants
        element: <AboutPage />,
      },
      {
        path: "gallery",
        element: <GalleryPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
    ],
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* tawa bech nprovide router lel app mouch browserrouter */}
    <RouterProvider router={router} />
  </React.StrictMode>
);