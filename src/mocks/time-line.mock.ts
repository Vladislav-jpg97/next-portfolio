import { title } from "process"

export const timeLineProject = [
	{
		title: {
			1: "Оцениваю макет",
			2: "",
		},
		description: "Оцениваю объем работы, сложность, нюансы. Задаю вопросы",
		time: "Время: 2 часа"
	},
	{
		title: {
			1: "ТЗ, смета и ",
			2: "график работ",
		},

		description: "Согласовываем техническое задание и график работ по проекту.",
		time: "Время: 2–4 часа"
	},
	{
		title: {
			1: "Вы держите руку на ",
			2: "пульсе",
		},
		description: "Выдаю доступ к GitHub и Trello. Вы видите прогресс проекта.",
		time: ""
	},
	{
		title: {
			1: "Выполняю каждый ",
			2: "этап",
		},

		description: "Работаю поэтапно, передаю результат и принимаю оплату.",
		time: ""
	},
	{
		title: {
			1: "Финальное ревью",
			2: "проекта",
		},
		description: "Финальная проверка, передача файлов и публикация сайта.",
		time: "Время: 2–4 часа"
	},
] as const

export type timeLineProjectMockType = typeof timeLineProject[number]