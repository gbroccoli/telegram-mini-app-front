import {useLaunchParams, backButton} from '@telegram-apps/sdk-react';
import '@/App.css'
import {CircleUser, Settings, Home, type LucideIcon, History} from "lucide-react";
import {Link, Outlet, useLocation, useNavigate} from "react-router";
import {useEffect} from "react";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar.tsx";
import {isTMA} from "@telegram-apps/bridge";

interface MenuObjItem {
    name: string;
    path: string;
    icon: LucideIcon;
}

const MenuObj: MenuObjItem[] = [
    {
        path: "/",
        name: "Главная",
        icon: Home,
    },
    {
        path: "/history",
        name: "История",
        icon: History
    },
    {
        path: "/setting",
        name: "Настройки",
        icon: Settings
    },
    {
        path: "/profile",
        name: "Профиль",
        icon: CircleUser
    }
]

function Layout() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const tg = isTMA() ? useLaunchParams() : null;

    const navigate = useNavigate()
    const location = useLocation();

    if (isTMA()) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => {
            if (location.pathname !== "/") {
                backButton.show()
                backButton.onClick(() => {
                    navigate(1)
                })
            } else {
                backButton.hide()
            }
        }, [location, navigate]);
    }

    let content = null;

    if (isTMA()) {
        content = (
            <>
                <header className={"px-3 py-2"}>
                    <div className={"flex items-center justify-end"}>
                        <div className={"flex items-center gap-2"}>
                            <h1 className={"text-black font-bold text-lg"}>Просто vpn</h1>
                            <Link to={"/profile"} className={"flex items-center gap-2"}>
                                <Avatar>
                                    <AvatarImage src={tg?.tgWebAppData?.user?.photo_url}/>
                                    <AvatarFallback>{tg?.tgWebAppData?.user?.first_name}</AvatarFallback>
                                </Avatar>
                            </Link>
                        </div>
                    </div>
                </header>
                <main className={"px-3 py-2"}>
                    <Outlet/>
                </main>
                <footer className={"bg-white shadow-lg *:text-white fixed bottom-0 left-0 right-0 z-10"}>
                    <ul className={"flex items-center justify-around px-2 py-2"}>
                        {MenuObj.map((item, i) => (
                            <li key={i}>
                                <Link to={item.path}
                                      className={`flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-colors ${location.pathname === item.path ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-foreground"}`}>
                                    <item.icon className={"w-5 h-5 text-[hsl(204_5%_39%)]"}/>
                                    <span className={"text-xs font-medium"}>{item.name}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </footer>
            </>
        )
    } else if (location.pathname === "/privacy") {
        content = (
            <>
                <main className={"px-3 py-2"}>
                    <Outlet/>
                </main>
            </>
        )
    } else {
        content = (
            <main className={"px-3 py-2"}>
                <h1>Для работы данным приложением воскользутесь телеграммом 💕</h1>
            </main>
        )
    }

    return (
        <>
            {content}
        </>
    )
}

export default Layout