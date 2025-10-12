import {Card} from "@/components/ui/card.tsx";
import {Zap} from "lucide-react";
import {Label} from "@/components/ui/label.tsx";
import {Switch} from "@/components/ui/switch.tsx";

const Setting = () => {
    return (
        <>
            <div className={"space-y-6"}>
                <Card className={"p-5 border-0 shadow-md"}>
                    <h3 className={"font-semibold mb-4 flex items-center gap-2"}>
                        <Zap className={"w-5 h-5 text-primary"} />
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
                            <Switch id={"notifications"} />
                        </div>
                        <div className={"flex items-center justify-between py-3"}>
                            <div className={"flex-1"}>
                                <Label htmlFor={"dark-mode"} className={"text-sm font-medium cursor-pointer"}>
                                    Темная тема
                                </Label>
                                <p className="text-xs text-muted-foreground mt-1">Использовать темное оформление</p>
                            </div>
                            <Switch id={"dark-mode"} />
                        </div>
                    </div>
                </Card>
            </div>
        </>
    )
}

export default Setting