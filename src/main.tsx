import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import ErrorPage from './components/ErrorPage.tsx'

import {
  RouterProvider, createBrowserRouter
} from 'react-router-dom'

import Root from './routes/root.tsx'
import Contact from './routes/contact.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
      }
    ]
  }
])



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    
  </React.StrictMode>,
)
