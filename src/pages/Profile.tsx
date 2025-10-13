import {Card} from "@/components/ui/card.tsx";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar.tsx";
import {useLaunchParams} from "@telegram-apps/sdk-react";
import {isTMA} from "@telegram-apps/bridge";
import {AtSignIcon, UserIcon} from "lucide-react";


const Profile = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const tg = isTMA() ? useLaunchParams() : null;

    return (
        <>
            <div className={"space-y-3"}>
                <Card className={"p-5 border-0 bg-linear-[90deg,hsl(197_100%_94%),hsl(202_84%__81%),hsl(206_83%_68%)]"}>
                    <div className={"flex items-center gap-2"}>
                        <Avatar className={"w-15 h-15"}>
                            <AvatarImage src={tg?.tgWebAppData?.user?.photo_url} />
                            <AvatarFallback>{tg?.tgWebAppData?.user?.first_name}</AvatarFallback>
                        </Avatar>
                        <div>
                            <h2>{tg?.tgWebAppData?.user?.first_name}</h2>
                            <span className={"text-xs inline-flex items-center gap-1"}><AtSignIcon className={"w-3 h-3"} /> {tg?.tgWebAppData?.user?.username}</span>
                        </div>
                    </div>
                </Card>
                <Card className={"p-5 border-0"}>
                    <div className={"flex flex-col gap-2"}>
                        <h2>Информация об аккаунте</h2>

                        <div className={"flex flex-col gap-2"}>
                            <div className={"border-b px-2 py-3 flex items-center gap-2"}>
                                <div className={"icons w-10 h-10 bg-blue-700/50 flex items-center justify-center rounded-full"}>
                                    <UserIcon className={"w-5 h-5 text-white"} />
                                </div>
                                <div className={"flex flex-col gap-1"}>
                                    <span>Имя пользователя</span>
                                    <h3>{tg?.tgWebAppData?.user?.first_name}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </>
    )
}

export default Profile