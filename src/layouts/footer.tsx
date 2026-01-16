import type { ComponentProps, FC } from "react";
import { Container } from "@/components/container";
import Link from "next/link";

export const Footer: FC<Omit<ComponentProps<"footer">, "children">> = ({ className, ...props }) => {
    return <footer className={`  ${className}`} data-slot="footer" {...props}>

        
        <div className="bg-[#333333] py-5 gap-2.5">
            <Container>
                <p className="text-[#FFFFFF] text-xl"> &copy; - Тё Владислав</p>
                <p className="text-white/30">Веб-разработчик из Ташкента, занимаюсь версткой и созданием сайтов.</p>
                <p className="text-white/30">Этот сайт сделал в рамках прохождения обучения по верстке на курсах от <Link href={"#!"} className="text-white underline">(Курсы)</Link>
                </p>
            </Container>

        </div>

    </footer >
}