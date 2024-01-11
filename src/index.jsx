import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ThreadList from './routes/threadList.jsx'
import ThreadNew from './routes/threadNew.jsx'
import ThreadPostList, { loader as postsLoader, action as postsAction } from './routes/threadPostList.jsx'
import ErrorPage from './components/error-page.jsx'
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
      },
      {
        path: "/thread/:thredId/posts",
        element: <ThreadPostList />,
        loader: postsLoader,
        action: postsAction
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