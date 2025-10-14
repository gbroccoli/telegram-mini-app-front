import {Coins, Wifi} from "lucide-react";
import {Badge} from "@/components/ui/badge.tsx";

interface HistoryItem {
    id: number
    date: string
    time: string
    category: "vpn" | "payment"
    // VPN fields
    duration?: string
    traffic?: string
    vpnStatus?: "active" | "completed"
    // Payment fields
    amount?: number
    paymentType?: "debit" | "credit"
    description?: string
    refundStatus?: "none" | "pending" | "approved" | "rejected"
}

const HistoryPage = () => {

    const history: HistoryItem[] = [
        {
            id: 1,
            date: "Сегодня",
            time: "14:30",
            category: "vpn",
            duration: "2ч 15м",
            traffic: "1.2 ГБ",
            vpnStatus: "active",
        },
        {
            id: 2,
            date: "Сегодня",
            time: "12:00",
            category: "payment",
            amount: 1000,
            paymentType: "credit",
            description: "Пополнение баланса",
            refundStatus: "none",
        },
        {
            id: 3,
            date: "Сегодня",
            time: "09:15",
            category: "vpn",
            duration: "3ч 45м",
            traffic: "2.8 ГБ",
            vpnStatus: "completed",
        },
        {
            id: 4,
            date: "Вчера",
            time: "16:20",
            category: "vpn",
            duration: "1ч 30м",
            traffic: "850 МБ",
            vpnStatus: "completed",
        },
        {
            id: 5,
            date: "Вчера",
            time: "10:00",
            category: "vpn",
            duration: "4ч 20м",
            traffic: "3.5 ГБ",
            vpnStatus: "completed",
        },
        {
            id: 6,
            date: "13 января",
            time: "15:45",
            category: "vpn",
            duration: "2ч 10м",
            traffic: "1.5 ГБ",
            vpnStatus: "completed",
        },
        {
            id: 7,
            date: "13 января",
            time: "12:30",
            category: "vpn",
            duration: "5ч 00м",
            traffic: "4.2 ГБ",
            vpnStatus: "completed",
        },
        {
            id: 8,
            date: "12 января",
            time: "18:15",
            category: "vpn",
            duration: "1ч 45м",
            traffic: "920 МБ",
            vpnStatus: "completed",
        },
        {
            id: 9,
            date: "1 января",
            time: "00:00",
            category: "payment",
            amount: 500,
            paymentType: "debit",
            description: "Списание за подписку",
            refundStatus: "none",
        },
    ]

    const groupedHistory = history.reduce(
        (acc, item) => {
            if (!acc[item.date]) {
                acc[item.date] = []
            }
            acc[item.date].push(item)
            return acc
        },
        {} as Record<string, HistoryItem[]>,
    )

    return (
        <>
            {Object.entries(groupedHistory).map(([date, items]) => (
                <div key={date} className={"mb-6"}>
                    <div className={"px-4 py-2 bg-gray-50 border-b border-gray-200"}>
                        <h2 className={"text-sm font-semibold text-gray-700"}>{date}</h2>
                    </div>
                    <div className={"bg-white"}>
                        {items.map((item, index) => (
                            <div key={index}>
                                <div className={"px-4 py-3 flex items-center gap-3 active:bg-gray-50 transition-colors cursor-pointer"}>
                                    {item.category === "vpn" ? (
                                        <>
                                            <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${item.vpnStatus === "active" ? "bg-green-100" : "bg-blue-100"}`}>
                                                <Wifi className={`w-5 h-5 ${item.vpnStatus === "active" ? "text-green-600" : "text-blue-600"}`} />
                                            </div>
                                            <div className={"flex-1 min-w-0"}>
                                                <div className={"flex items-center gap-2"}>
                                                    <p className={"font-medium text-gray-600"}>
                                                        {item.vpnStatus === "active" ? "Активное подключение" : "VPN подключение"}
                                                    </p>
                                                    {item.vpnStatus === "active" && (
                                                        <Badge className="bg-green-500 text-white text-xs px-1.5 py-0">Сейчас</Badge>
                                                    )}
                                                </div>
                                                <p className="text-sm text-gray-500 mt-0.5">
                                                    {item.duration} • {item.traffic} • {item.time}
                                                </p>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            {/* Payment Icon */}
                                            <div
                                                className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                                                    item.paymentType === "credit" ? "bg-green-100" : "bg-red-100"
                                                }`}
                                            >
                                                <Coins
                                                    className={`w-5 h-5 ${item.paymentType === "credit" ? "text-green-600" : "text-red-600"}`}
                                                />
                                            </div>

                                            {/* Payment Details */}
                                            <div className="flex-1 min-w-0">
                                                <p className="font-medium text-gray-900">{item.description}</p>
                                                <p className="text-sm text-gray-500 mt-0.5">{item.time}</p>
                                            </div>

                                            {/* Payment Amount */}
                                            <div className="text-right flex-shrink-0">
                                                <p
                                                    className={`text-base font-semibold ${
                                                        item.paymentType === "credit" ? "text-green-600" : "text-red-600"
                                                    }`}
                                                >
                                                    {item.paymentType === "credit" ? "+" : "-"}
                                                    {item.amount}
                                                </p>
                                                <p className="text-xs text-gray-500 mt-0.5">токенов</p>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </>
    )
}

export default HistoryPage;