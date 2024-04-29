import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, } from "react-router-dom";
import router from './Router/Router.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import { ToastContainer, } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SpinerFallbackElement from './Shared/SpinerFallbackElement.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <Suspense fallback={<SpinerFallbackElement></SpinerFallbackElement>}>
        <RouterProvider router={router} />
      </Suspense>
    </AuthProvider>
    <ToastContainer />
  </React.StrictMode>,
)
