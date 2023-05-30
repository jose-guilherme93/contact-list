import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import ErrorPage from './components/ErrorPage.tsx'

import {
  RouterProvider, createBrowserRouter
} from 'react-router-dom'

import Root, {loader as rootLoader, action as rootAction} from './routes/root.tsx'
import Contact, {loader as contactLoader} from './routes/contact.tsx'
import EditContact, {
  action as editAction,
} from './routes/edit.tsx'
import { action as destroyAction } from "./routes/destroy";
import Index from './routes/index.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage/>,
    loader: rootLoader,
    action: rootAction,
    children: [
      {index: true, element: <Index/>},
      {
        
        path: "contacts/:contactId",
        element: <Contact />,
        loader: contactLoader,
      
      },
      {
        path: "contacts/:contactId/edit",
        element: <EditContact />,
        loader: contactLoader,
        action: editAction,
      },
      {
        path: "contacts/:contactId/destroy",
        action: destroyAction,
        errorElement: <div>Oops! There was an error.</div>,
      },
    ]
  }
])



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    
  </React.StrictMode>,
)
