import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import LoginPage from './Miniproject/LoginPage.jsx';
import SignupPage from './Miniproject/SignupPage.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "signup",
    element: <SignupPage />,
  },
  {
    path: "login",
    element: <LoginPage />,
  },
]);

// import './index.css'
//import './UserCss.css'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
