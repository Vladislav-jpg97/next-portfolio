import "@/css/globals.css"

import { LayoutProps } from "@/types/globals.type"
import { Header } from "@/layouts/header"
import { Footer } from "@/layouts/footer"
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils"
import { AosProvider } from "@/components/aos-provider";
import { Suspense } from "react";



export const montserrat = Montserrat({
	subsets: ["latin", "cyrillic"],
	weight: ["400", "600", "700"],
	display: "swap"
});


const AppLayout: LayoutProps = ({ children }) => {
	return <html lang="ru" className={cn(montserrat.className, "scroll-smooth")}>
		<body className="flex flex-col min-h-screen justify-between bg-white text-black">
			<Suspense fallback={<p>Loading...</p>}>
				<AosProvider />

				<Header />

				<main className="flex-1">

					{children}


				</main>

				<Footer className="shrink-0" />
			</Suspense>

		</body>
	</html>
};
export default AppLayout