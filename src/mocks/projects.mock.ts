import Profolio1 from "@public/img/portfolio-1.png"
import Profolio2 from "@public/img/portfolio-2.png"
import Profolio3 from "@public/img/portfolio-3.png"
import Profolio4 from "@public/img/portfolio-4.png"
import Profolio5 from "@public/img/portfolio-5.png"

export const projectMock =[
    {
        id: 1,
        name: "Верстка “Burger House”",
        shortDescription : "Верстка лендинга",
        project: "html",
        image: Profolio1,
        url: "https://vladislav-jpg97.github.io/Burger-House/"
    },
    {
        id: 2,
        name: "Сайт приложения “FlashLink”",
        shortDescription : "Верстка Визитки",
        project: "html",
        image: Profolio2,
        url: "https://vladislav-jpg97.github.io/FlashLink/"
    },
    {
        id: 3,
        name: "Верстка “Юнит”",
        shortDescription : "Верстка лендинга",
        project: "html",
        image: Profolio3,
        url: "https://vladislav-jpg97.github.io/Junit/"
    },
    {
        id: 4,
        name: "Верстка “Меню Ресторан",
        shortDescription : "Верстка многостраничного сайта",
        project: "wp",
        image: Profolio4,
        url: "https://vladislav-jpg97.github.io/website-of-orders/"
    },
] as const

export type ProjectMockType = typeof projectMock[number]