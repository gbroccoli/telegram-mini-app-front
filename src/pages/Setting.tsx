import {Card} from "@/components/ui/card.tsx";
import {Info, Zap} from "lucide-react";
import {Label} from "@/components/ui/label.tsx";
import {Switch} from "@/components/ui/switch.tsx";
import {useEffect, useState} from "react";
import {useTheme} from "@/components/theme-provider.tsx";
import {cloudStorage} from "@telegram-apps/sdk-react";

const Setting = () => {

    const [themeMain, setThemeMain] = useState<boolean>(false);

    const { setTheme } = useTheme()

    const changeTheme = (next: boolean) => {
        setThemeMain(next)                // мгновенная реакция UI
        setTheme(next ? "dark" : "light") // синхронизация с провайдером

        const sendThemeOnTg = async () => {
            await cloudStorage.setItem("theme", next ? "dark" : "light");
        }

        sendThemeOnTg().then(() => {});
    }

    const writeSendMessage = () => {
        // if (requestWriteAccess.isAvailable()) {
        //     const statusRes = async () => {
        //         const status = await requestWriteAccess()
        //         if (status === "allowed") {
        //             alert("Отлично")
        //         } else {
        //             alert("Плохо")
        //         }
        //     }
        //
        //     statusRes().then(() => {})
        // }
        alert("Что-то будет!")
    }

    useEffect(() => {
        setThemeMain(typeof document !== "undefined" && document.documentElement.classList.contains("dark"))
    }, [])

    return (
        <>
            <div className={"space-y-6"}>
                <Card className={"p-5 border-0 shadow-md"}>
                    <h3 className={"font-semibold mb-4 flex items-center gap-2"}>
                        <Zap className={"w-5 h-5 text-blue-500"} />
                        Настройки приложения
                    </h3>
                    <div className={"space-y-4"}>
                        <div className={"flex items-center justify-between py-3 border-b"}>
                            <div className={"flex-1"}>
                                <Label htmlFor={"notifications"} className={"text-sm font-medium cursor-pointer"}>
                                    Уведомления
                                </Label>
                                <p className="text-xs text-muted-foreground mt-1">Получать уведомления о событиях</p>
                            </div>
                            <Switch id={"notifications"} onCheckedChange={writeSendMessage} />
                        </div>
                        <div className={"flex items-center justify-between py-3"}>
                            <div className={"flex-1"}>
                                <Label htmlFor={"dark-mode"} className={"text-sm font-medium cursor-pointer"}>
                                    Темная тема
                                </Label>
                                <p className="text-xs text-muted-foreground mt-1">Использовать темное оформление</p>
                            </div>
                            <Switch id={"dark-mode"} onCheckedChange={changeTheme} checked={themeMain} />
                        </div>
                    </div>
                </Card>

                <Card className={"p-5 border-0 shadow-md"}>
                    <h3 className={"font-semibold mb-4 flex items-center gap-2"}>
                        <Info className={"w-5 h-5 text-blue-500"} />
                        Информация о приложении
                    </h3>
                    <div className={"space-y-3 text-sm"}>
                        <div className={"flex justify-between py-2 border-b"}>
                            <span className={"text-muted-foreground"}>Версия</span>
                            <span className={"font-medium"}>1.0.0</span>
                        </div>
                        <div className={"flex justify-between py-2"}>
                            <span className={"text-muted-foreground"}>Последнее обновление</span>
                            <span className={"font-medium"}>16.10.2025</span>
                        </div>
                    </div>
                </Card>
            </div>
        </>
    )
}

export default Setting