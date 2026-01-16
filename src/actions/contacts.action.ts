"use server";

import { ContactsType } from "@/schemas/contacts.schema";

export const contactsAction = async ({ email, message }: ContactsType) => {
    try {
        const token = process.env.NEXT_TELEGRAM_BOT_TOKEN;
        const chatID = process.env.NEXT_TELEGRAM_BOT_CHATID;

        if (!token || !chatID) {
            throw new Error("Telegram bot token или chatID не заданы в .env");
        }

        const telegramUrl = `https://api.telegram.org/bot${token}/sendMessage`;

        const text = `Новое сообщение от ${email}:\nЭлектронная почта: ${email}\nСообщение: ${message}`;
				
				

        const response = await fetch(telegramUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                chat_id: chatID,
                text,
            }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(`Ошибка Telegram API: ${response.status} ${JSON.stringify(errorData)}`);
        }

        return {
            status: true,
            message: "Успешно отправлено",
        };
    } catch (error: any) {
        console.error("contactsAction error:", error);
        return {
            status: false,
            message: error.message || "Что-то пошло не так",
        };
    }
};
