import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from '@/App.tsx'
import {init, backButton} from "@telegram-apps/sdk-react"
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Layout from "@/pages/Layout.tsx";
import Profile from "@/pages/Profile.tsx";

init()

backButton.mount()

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "",
                element: <App />
            },
            {
                path: "/profile",
                element: <Profile />
            }
        ]
    },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
