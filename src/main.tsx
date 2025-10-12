import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import {init, backButton} from "@telegram-apps/sdk-react"
import {createBrowserRouter} from "react-router";
import {RouterProvider} from "react-router/dom";
import Layout from "@/pages/Layout.tsx";
import Profile from "@/pages/Profile.tsx";
import Main from "@/pages/Main.tsx";
import Setting from "@/pages/Setting.tsx";
import ConfigItemPage from "@/pages/ConfigItemPage.tsx";

init()

backButton.mount()

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <Main/>
            },
            {
                path: "profile",
                element: <Profile/>
            },
            {
                path: "setting",
                element: <Setting/>
            },
            {
                path: "config",
                children: [
                    {
                        path: ":id",
                        element: <ConfigItemPage />
                    }
                ]
            },
            {
                path: "*",
                element: <div>Такйо страницы более нет!</div>
            }
        ]
    }
]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router}/>
    </StrictMode>,
)
