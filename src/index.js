import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import { LoginPage } from './pages/LoginPage';
import { Dashboard } from './pages/dashboard.jsx';
import { Progres } from './pages/Progres.jsx';



const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />
    },
    {
      path: 'loginPage',
      element: <LoginPage />
    },
    {
      path: 'dashboard',
      element: <Dashboard />
    },
    {
      path: 'progress',
      element: <Progres />
    }
  ]
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} >
       {router.element}
    </RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
