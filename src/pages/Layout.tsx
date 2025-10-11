import {useLaunchParams, backButton} from '@telegram-apps/sdk-react';
import '@/App.css'
import {CircleUser, Coins, Home} from "lucide-react";
import {Link, Outlet, useLocation, useNavigate} from "react-router";
import {useEffect} from "react";

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
                <div className={"flex items-center justify-between"}>
                    <div className={"flex items-center gap-2"}>
                        <Link to={"/profile"} className={"flex items-center gap-2"}>
                            <img width={"50"} className={"rounded-full pointer-events-none"}
                                 src={tg?.tgWebAppData?.user?.photo_url} alt={tg?.tgWebAppData?.user?.first_name}
                                 title={tg?.tgWebAppData?.user?.first_name}/>
                            <span className={"text-lg font-bold text-white"}>
                                {tg?.tgWebAppData?.user?.first_name}
                            </span>
                        </Link>
                    </div>

                    <div className={"header-coins *:text-white flex items-center gap-2"}>
                        <Coins className={"text-white"}/>
                        <span className={"font-bold"}>997</span>
                    </div>
                </div>
            </header>
            <main className={"px-3 py-2"}>
                <Outlet/>
            </main>
            <footer className={"shadow-lg bg-green-700 *:text-white"}>
                <ul className={"flex items-center justify-between"}>
                    <li className={"px-3 py-3"}>
                        <Link to={"/"} className={"flex items-center gap-2"}>
                            <Home />
                        </Link>
                    </li>
                    <li className={"px-3 py-3"}>
                        <Link to={"/profile"} className={"flex items-center gap-2"}>
                            <CircleUser />
                        </Link>
                    </li>
                </ul>
            </footer>
        </>
    )
}

export default Layout