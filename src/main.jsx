import React from 'react'
import ReactDOM from 'react-dom/client'
// import FeedLayout from "./Layouts/FeedLayout";
import FeedProvider from './Contexts/FeedContext';
import ProfileLayout from './Layouts/ProfileLayout';
import LoginPage from './Pages/LoginPage';
import SignUpPage from './Pages/SignUpPage';

import { createBrowserRouter,RouterProvider } from "react-router-dom";
import './index.scss';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage/>,
  },
  {
    path: "/sign-up",
    element: <SignUpPage/>,
  },
  {
    path: "/profile",
    element: <ProfileLayout/>,
  }
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> 
    <FeedProvider>
    <RouterProvider router={router} />
    </FeedProvider>
  </React.StrictMode>,
)


