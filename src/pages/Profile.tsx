import {Card} from "@/components/ui/card.tsx";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar.tsx";
import {useLaunchParams} from "@telegram-apps/sdk-react";
import {isTMA} from "@telegram-apps/bridge";
import {AtSignIcon, Crown, Shield, User} from "lucide-react";
import {
    Drawer,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger
} from "@/components/ui/drawer.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Badge} from "@/components/ui/badge.tsx";


const Profile = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const tg = isTMA() ? useLaunchParams() : null;

    return (
        <>
            <div className={"space-y-3"}>
                <Card className={"p-5 border-0 bg-linear-[180deg,hsl(197_100%_94%),hsl(202_84%__81%),hsl(206_83%_68%)] dark:bg-linear-[180deg,hsl(202_61%_26%),hsl(212_64%_40%),hsl(200_100%_40%)]"}>
                    <div className={"flex items-center gap-2"}>
                        <Avatar className={"w-15 h-15"}>
                            <AvatarImage src={tg?.tgWebAppData?.user?.photo_url} />
                            <AvatarFallback>{tg?.tgWebAppData?.user?.first_name}</AvatarFallback>
                        </Avatar>
                        <div>
                            <h2 className={"font-bold text-xl text-white"}>{tg?.tgWebAppData?.user?.first_name}</h2>
                            <span className={"text-xs inline-flex items-center gap-1 text-white"}><AtSignIcon className={"w-3 h-3"} /> {tg?.tgWebAppData?.user?.username}</span>
                        </div>
                    </div>
                </Card>
                <Card className="p-5 border-0 shadow-md">
                    <h3 className="font-semibold mb-4 text-lg">Информация об аккаунте</h3>
                    <div className="space-y-4">
                        <div className="flex items-center gap-3 pb-4 border-b">
                            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                                <User className="w-5 h-5 text-blue-600" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-xs text-muted-foreground">Имя пользователя</p>
                                <p className="text-sm font-medium">{tg?.tgWebAppData?.user?.first_name}</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                                <Shield className="w-5 h-5 text-orange-600" />
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-xs text-muted-foreground">Telegram premium</p>
                                <p className="text-sm font-medium">{tg?.tgWebAppData?.user?.is_premium ? "Есть" : "Отсутвует"}</p>
                            </div>
                        </div>
                    </div>
                </Card>
                <div className="space-y-3 w-full">
                    <Drawer>
                        <DrawerTrigger className={"w-full"}>
                            <Button variant={"outline"} size={"sm"} className={"w-full"}>Управление подпиской</Button>
                        </DrawerTrigger>
                        <DrawerContent>
                            <DrawerHeader>
                                <DrawerTitle>Управление подпиской</DrawerTitle>
                                <DrawerDescription>Информация о вашей подписке и балансе токенов</DrawerDescription>
                            </DrawerHeader>
                            <div className={"px-4 space-y-4"}>
                                <Card className={"p-3 border-0"}>
                                    <div className={"flex justify-between"}>
                                        <div className={"flex items-center gap-2"}>
                                            <Crown  className={"w-5 h-5 text-yellow-500"} />
                                            <h3 className={"font-semibold text-lg"}>Базовый план</h3>
                                        </div>
                                        <Badge className={"text-xs bg-green-500 text-white border-0 rounded-2xl"}>Активна</Badge>
                                    </div>
                                    <div className={"space-y-3  text-sm"}>
                                        <div className="flex justify-between">
                                            <span className="text-muted-foreground">Стоимость:</span>
                                            <span className="font-medium">250 токенов/месяц</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-muted-foreground">Следующее списание:</span>
                                            <span className="font-medium">15 декабря 2024</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-muted-foreground">Активна до:</span>
                                            <span className="font-medium">15 декабря 2025</span>
                                        </div>
                                    </div>
                                </Card>
                            </div>
                            <div>
                            </div>
                            <DrawerFooter>
                                <Button variant={"outline"}>Отменить подписку</Button>
                            </DrawerFooter>
                        </DrawerContent>
                    </Drawer>
                </div>
            </div>
        </>
    )
}

export default Profile