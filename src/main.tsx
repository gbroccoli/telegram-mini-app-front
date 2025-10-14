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
import { isTMA } from '@telegram-apps/bridge';
import ConfigItemPage from "@/pages/ConfigItemPage.tsx";
import Privacy from "@/pages/Privacy.tsx";
import HistoryPage from "@/pages/HistoryPage";
import HistoryItemPage from "@/pages/HistoryItemPage";

if (isTMA()) {
    init()
    backButton.mount()
}

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
                path: "history",
                element: <HistoryPage />,
                children: [
                    {
                        path: "item/:id",
                        element: <HistoryItemPage />
                    }
                ]
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
                path: "/privacy",
                element: <Privacy />
            },
            {
                path: "*",
                element: <div>Такой страницы более нет!</div>
            }
        ]
    }
]);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router={router}/>
    </StrictMode>,
)
