export const timeLineProject = [
    {
        title: "Оцениваю макет",
        title2: "",
        description: "Оцениваю объем работы, сложность, нюансы. Задаю вопросы",
        time: "Время: 2 часа"
    },
    {
        title: "ТЗ, смета и ",
        title2: "график работ",
        description: "Согласовываем техническое задание и график работ по проекту.",
        time: "Время: 2–4 часа"
    },
    {
        title: "Вы держите руку на ",
        title2: "пульсе",
        description: "Выдаю доступ к GitHub и Trello. Вы видите прогресс проекта.",
        time: ""
    },
    {
        title: "Выполняю каждый ",
        title2: "этап",
        description: "Работаю поэтапно, передаю результат и принимаю оплату.",
        time: ""
    },
    {
        title: "Финальное ревью",
        title2: "проекта",
        description: "Финальная проверка, передача файлов и публикация сайта.",
        time: "Время: 2–4 часа"
    },
] as const

export type timeLineProjectMockType = typeof timeLineProject[number]