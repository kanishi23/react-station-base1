import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Index from './routes/index.jsx'
import About from './routes/about.jsx'
import ThreadList from './routes/threadList.jsx'
import ThreadNew, { loader as threadsLoader , action as threadsAction } from './routes/threadNew.jsx'
import ThreadPostList, { loader as postsLoader } from './routes/threadPostList.jsx'
import ErrorPage from './error-page.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <ThreadList />,
      },
      {
        path: "/thread/new",
        element: <ThreadNew />,
        loader: threadsLoader,
        action: threadsAction
      },
      {
        path: "/thread/:id/posts",
        element: <ThreadPostList />,
        loader: postsLoader
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    // <App />
    <RouterProvider router={router} />
  // </React.StrictMode>,
)
