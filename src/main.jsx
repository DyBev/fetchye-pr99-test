import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AppWithForceFetch from './AppWithForceFetch'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { FetchyeProvider } from 'fetchye'
import IdContextProvider from './IdContext.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/app-with-force-fetch',
    element: <AppWithForceFetch />,
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
