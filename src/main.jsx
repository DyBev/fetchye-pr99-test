import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import AppWithForceFetch from './AppWithForceFetch'
import Edit from './Edit'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { FetchyeProvider } from 'fetchye'
import IdContextProvider from './IdContext.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/force-fetch',
    element: <AppWithForceFetch />,
  },
  {
    path: '/edit',
    element: <Edit />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FetchyeProvider>
      <IdContextProvider>
        <RouterProvider router={router} />
      </IdContextProvider>
    </FetchyeProvider>
  </StrictMode>,
)
