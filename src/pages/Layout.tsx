import {useLaunchParams, backButton, viewport, useSignal, cloudStorage} from '@telegram-apps/sdk-react';
import '@/App.css'
import {CircleUser, Settings, Home, type LucideIcon, History} from "lucide-react";
import {Link, Outlet, useLocation, useNavigate} from "react-router";
import {useEffect, useMemo, useState} from "react";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar.tsx";
import {isTMA} from "@telegram-apps/bridge";
import {ThemeProvider} from "@/components/theme-provider.tsx";
import type {Theme} from "@/types/theme.ts";

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

    const [defaultTheme, setDefaultTheme] = useState<Theme>('light')

    const [fullScreen, setFullScreen] = useState(false);
    const [width, setWidth] = useState<number>(0)

    const isTWA = isTMA()

    const tg = useLaunchParams();

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

    const isMobileTg = useMemo(() => {
        if (tg) {
            const p = tg?.tgWebAppPlatform;
            return p === "android" || p === "ios"
        }
        return false;
    }, [tg])

    useEffect(() => {
        if (viewport.mount.isAvailable()) viewport.mount()
        if (viewport.bindCssVars.isAvailable()) viewport.bindCssVars()

        if (viewport.expand.isAvailable()) viewport.expand()
    }, [isTWA]);

    useEffect(() => {
        if (!isTMA() || !isMobileTg) return;
        if (viewport?.requestFullscreen?.isAvailable?.()) return;

        let cancelled = false

        const ask = async () => {
            try {
                await viewport.requestFullscreen();
            } catch {
                // небольшой ретрай — помогает на части устройств
                await new Promise(r => setTimeout(r, 250));
                if (!cancelled) {
                    try {
                        await viewport.requestFullscreen();
                    } catch { /* empty */
                    }
                }
            }
        };

        ask().then(() => {
        });

        // дополнительный шанс после возвращения в приложение (iOS)
        const onVis = () => {
            if (document.visibilityState === "visible") {
                viewport.requestFullscreen?.().catch(() => {
                });
            }
        };
        document.addEventListener("visibilitychange", onVis);

        return () => {
            cancelled = true;
            document.removeEventListener("visibilitychange", onVis);
        };

    }, [isTWA, isMobileTg, location.pathname]);

    const isFs = useSignal(viewport.isFullscreen)

    const widthTg = useSignal(viewport.contentSafeAreaInsetTop)

    useEffect(() => {
        if (isFs) {
            setFullScreen(true);
        } else {
            setFullScreen(false);
        }
    }, [isFs]);

    const theme = async () => {
        const themeIsTg = (await cloudStorage.getItem("theme").then((res) => {
            return res.length > 0 ? res as Theme : "light" as Theme
        }))

        await cloudStorage.setItem("theme", themeIsTg);

        return themeIsTg
    }

    useEffect(() => {
        theme().then((res) => setDefaultTheme(() => res))
    }, []);

    useEffect(() => {
        setWidth(widthTg);
    }, [widthTg]);

    return (
        <>
            <ThemeProvider defaultTheme={defaultTheme} storageKey={"tg-app"}>
                <header className={`px-3 ${fullScreen ? `pb-4` : "py-2"}`} style={{"paddingTop": `${fullScreen ? `${width}px` : ""}`}}>
                    <div className={"flex items-center justify-end"}>
                        <div className={"flex items-center gap-2"}>
                            <h1 className={"text-black font-bold text-lg dark:text-white"}>Просто vpn</h1>
                            <Link to={"/profile"} className={"flex items-center gap-2"}>
                                <Avatar>
                                    <AvatarImage src={tg?.tgWebAppData?.user?.photo_url}/>
                                    <AvatarFallback>{tg?.tgWebAppData?.user?.first_name[0]}</AvatarFallback>
                                </Avatar>
                            </Link>
                        </div>
                    </div>
                </header>
                <main className={"px-3 py-2"}>
                    <Outlet/>
                </main>
                <footer className={"bg-white shadow-lg *:text-white fixed bottom-0 left-0 right-0 z-10"}>
                    <ul className={`flex items-center justify-around ${fullScreen ? "px-2 pt-2 pb-4" : "px-2 py-2"}`}>
                        {MenuObj.map((item, i) => (
                            <li key={i}>
                                <Link to={item.path}
                                      className={`flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-colors ${location.pathname === item.path ? "text-primary dark:text-white bg-primary/10 dark:bg-white/20" : "text-muted-foreground hover:text-foreground dark:text-white/70"}`}>
                                    <item.icon className={"w-5 h-5"}/>
                                    <span className={"text-xs font-medium"}>{item.name}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </footer>
            </ThemeProvider>
        </>
    )
}

export default Layout