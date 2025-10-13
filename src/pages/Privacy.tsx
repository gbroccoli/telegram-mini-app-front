type PrivacyProps = {
    effectiveDate?: string;   // например: "13.10.2025"
    contactEmail?: string;    // например: "admin@your-domain.ru"
};

const Privacy: React.FC<PrivacyProps> = ({
                                             effectiveDate = "",
                                             contactEmail = "",
                                         }) => {
    return (
        <>
            <h2 className="font-bold text-4xl">Политика конфиденциальности</h2>
            {effectiveDate ? (
                <p className="mt-1 text-sm text-neutral-500">
                    Дата вступления в силу: {effectiveDate}
                </p>
            ) : null}

            <p className="mt-4 text-md">
                Этот сервис частный: доступ только для ограниченного круга
                пользователей. Мы бережно относимся к конфиденциальности и соблюдаем
                требования применимого законодательства.
            </p>

            <ul className="mt-4 text-md space-y-4">
                <li className="space-y-1.5 pl-3">
                    <h3 className="font-bold italic">1. Обработка данных и цели</h3>
                    <p>
                        Обрабатываем только то, что нужно для работы сервиса: идентификатор
                        Telegram, имя пользователя и сообщения в рамках функционала.
                        Используем это, чтобы отправлять уведомления и нормально общаться с
                        авторизованными пользователями.
                    </p>
                </li>

                <li className="space-y-1.5 pl-3">
                    <h3 className="font-bold italic">2. Передача и доступ</h3>
                    <p>
                        Данные не передаем третьим лицам, кроме случаев, когда этого требует
                        работа сервиса (например, хостинг и техподдержка) и только с
                        обязательствами по защите данных.
                    </p>
                </li>

                <li className="space-y-1.5 pl-3">
                    <h3 className="font-bold italic">3. Хранение</h3>
                    <p>
                        Храним столько, сколько нужно для корректной работы и связанных
                        операций. Потом удаляем или анонимизируем по внутренним правилам и
                        требованиям закона.
                    </p>
                </li>

                <li className="space-y-1.5 pl-3">
                    <h3 className="font-bold italic">4. Безопасность</h3>
                    <p>
                        Применяем технические и организационные меры защиты. Обмен данными
                        идет через защищенные каналы Telegram.
                    </p>
                </li>

                <li className="space-y-1.5 pl-3">
                    <h3 className="font-bold italic">5. Права пользователя</h3>
                    <p>
                        Можно запросить свои данные, уточнить или удалить их в пределах,
                        установленных законом. Пиши администратору сервиса.
                    </p>
                </li>

                <li className="space-y-1.5 pl-3">
                    <h3 className="font-bold italic">6. Законность</h3>
                    <p>
                        Сервис частный и работает в рамках применимого законодательства.
                    </p>
                </li>

                <li className="space-y-1.5 pl-3">
                    <h3 className="font-bold italic">7. Контакты</h3>
                    <p>
                        Вопросы по данным и обращения принимаем у администратора
                        {contactEmail ? (
                            <>
                                {" "}
                                по адресу{" "}
                                <a
                                    href={`mailto:${contactEmail}`}
                                    className="underline underline-offset-2"
                                >
                                    {contactEmail}
                                </a>
                                .
                            </>
                        ) : (
                            "."
                        )}
                    </p>
                </li>

                <li className="space-y-1.5 pl-3">
                    <h3 className="font-bold italic">8. Изменения политики</h3>
                    <p>Если что-то поменяется, обновим текст и сообщим доступным способом.</p>
                </li>
            </ul>
        </>
    );
};

export default Privacy;
