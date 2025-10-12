import {useLaunchParams, backButton} from '@telegram-apps/sdk-react';
import '@/App.css'
import {CircleUser, Settings, Star, Home, type LucideIcon} from "lucide-react";
import {Link, Outlet, useLocation, useNavigate} from "react-router";
import {useEffect} from "react";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar.tsx";

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
        path: "/ohenca",
        name: "Оценка",
        icon: Star
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

    const tg = useLaunchParams()

    const navigate = useNavigate()
    const location = useLocation();

    useEffect(() => {
        if (location.pathname !== "/") {
            backButton.show()
            backButton.onClick(() => {
                navigate(-1)
            })
        } else {
            backButton.hide()
        }
    }, [location, navigate]);

    return (
        <>
            <header className={"bg-green-700 px-3 py-2"}>
                <div className={"flex items-center justify-end"}>
                    <div className={"flex items-center gap-2"}>
                        <h1 className={"text-black font-bold text-lg"}>Просто vpn</h1>
                        <Link to={"/profile"} className={"flex items-center gap-2"}>
                            <Avatar>
                                <AvatarImage src={tg?.tgWebAppData?.user?.photo_url} />
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
                            <Link to={item.path} className={`flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-colors ${location.pathname === item.path ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-foreground"}`}>
                                <item.icon className={"w-5 h-5 text-[hsl(204_5%_39%)]"} />
                                <span className={"text-xs font-medium"}>{item.name}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </footer>
        </>
    )
}

export default Layout