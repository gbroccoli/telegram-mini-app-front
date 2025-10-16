import {Card} from "@/components/ui/card.tsx";
import {Calendar, Coins, Server} from "lucide-react";
import {Link} from "react-router";
import {Button} from "@/components/ui/button.tsx";
import {Badge} from "@/components/ui/badge.tsx";


const Main = () => {
    return (
        <>
            <Card className={"p-5 border-0 shadow-md"}>
                <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[hsl(197_100%_94%)] to-[hsl(206_83%_68%)] dark:from-[hsl(212_64%_40%)] dark:t0-[hsl(200_100%_40%)] flex items-center justify-center">
                            <Coins className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <p className="text-sm text-muted-foreground">Баланс токенов</p>
                            <p className="text-2xl font-bold">1,250</p>
                        </div>
                    </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-muted-foreground dark:text-white bg-white/60 dark:bg-neutral-600 rounded-lg p-3">
                    <Calendar className="w-4 h-4" />
                    <span>Следующее списание: 1 февраля 2025</span>
                </div>

                <p className="text-xs text-muted-foreground mt-2 text-center">
                    Токены списываются автоматически в конце каждого месяца
                </p>
            </Card>
            <div className={"mt-3"}>
                <div className={"flex items-center justify-between gap-3"}>
                    <h2 className={"text-lg font-semibold"}>Мои конфигурации</h2>
                    <Button variant={"ghost"} size={"sm"}>
                        <Link to={"#"}>
                            Все
                        </Link>
                    </Button>
                </div>
                <div className={"space-y-3 mt-3"}>
                    <Card className={"p-4 border-0 shadow-md"}>
                        <div className={"flex items-center gap-3"}>
                            <div className={"w-12 h-12 rounded-full flex items-center justify-center bg-green-100"}>
                                <Server className={"w-6 h-6 text-green-600"} />
                            </div>
                            <div className={"flex-1 min-w-0"}>
                                <div className={"flex items-center gap-2"}>
                                    <p className={"font-semibold"}>
                                        Конфигурация #1
                                    </p>
                                    <Badge className={"bg-green-500 text-white text-xs px-2 py-0"}>Активна</Badge>
                                </div>
                            </div>
                        </div>
                    </Card>
                    <Card className={"p-4 border-0 shadow-md"}>
                        <div className={"flex items-center gap-3"}>
                            <div className={"w-12 h-12 rounded-full flex items-center justify-center bg-green-100"}>
                                <Server className={"w-6 h-6 text-green-600"} />
                            </div>
                            <div className={"flex-1 min-w-0"}>
                                <div className={"flex items-center gap-2"}>
                                    <p className={"font-semibold"}>
                                        Конфигурация #2
                                    </p>
                                    <Badge className={"bg-green-500 text-white text-xs px-2 py-0"}>Активна</Badge>
                                </div>
                            </div>
                        </div>
                    </Card>
                    <Card className={"p-4 border-0 shadow-md"}>
                        <div className={"flex items-center gap-3"}>
                            <div className={"w-12 h-12 rounded-full flex items-center justify-center bg-green-100"}>
                                <Server className={"w-6 h-6 text-green-600"} />
                            </div>
                            <div className={"flex-1 min-w-0"}>
                                <div className={"flex items-center gap-2"}>
                                    <p className={"font-semibold"}>
                                        <Link to={`/config/3`}>
                                            Конфигурация #3
                                        </Link>
                                    </p>
                                    <Badge className={"bg-green-500 text-white text-xs px-2 py-0"}>Активна</Badge>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </>
    )
}

export default Main