import "@/css/globals.css"

import { LayoutProps } from "@/types/globals.type"
import { Header } from "@/layouts/header"
import { Footer } from "@/layouts/footer"
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils"
import { AosProvider } from "@/components/AosProvider";



export const montserrat = Montserrat({
    subsets: ["latin", "cyrillic"],
    weight: ["400", "600", "700"],
    display: "swap"
});


const AppLayout: LayoutProps = ({ children }) => {
    return <html lang="ru" className={cn(montserrat.className, "scroll-smooth")}>
        <body className="flex flex-col min-h-screen justify-between bg-white text-black">
            <AosProvider />

            <Header />

            <main className="flex-1">

                {children}


            </main>

            <Footer className="shrink-0" />

        </body>
    </html>
};
export default AppLayout