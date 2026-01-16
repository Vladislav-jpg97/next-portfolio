"use client";

import Image from "next/image";
import { CustomLink } from "@/components/link";

import Telegram from "@public/svg/telegram-svgrepo-com.svg";
import Instagram from "@public/svg/instagram-svgrepo-com.svg";
import VK from "@public/svg/vk-v2-svgrepo-com.svg";
import FaceBook from "@public/svg/facebook-1-svgrepo-com.svg";
import Whatsapp from "@public/svg/whatsapp-whats-app-svgrepo-com.svg";
import { NavigationLink } from "./NavLink";


export const MobileMenu = ({ open, onClose }: Props) => {
    return (
        <>
            {/* BACKDROP */}
            <div
                onClick={onClose}
                className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300
                ${open ? "opacity-100 visible" : "opacity-0 invisible"} md:hidden
        `}
            />

            {/* MENU */}
            <aside
                className={`
                fixed top-0 right-0 h-full z-50 bg-white
                transition-transform duration-300 ease-in-out
                ${open ? "translate-x-0" : "translate-x-full"}
                w-full sm:w-1/2 md:hidden
        `}
            >
                <div className="flex flex-col h-full px-6 pt-6 pb-8">
                    {/* HEADER */}
                    <div className="flex justify-between items-center">
                        <span className="text-lg font-bold">Навигация</span>
                        <button onClick={onClose} aria-label="Close menu">
                            <span className="
                block w-10 h-1 bg-transparent relative
                before:content-[''] before:absolute before:left-0 before:top-0 before:w-full before:h-1 before:bg-black before:rotate-45
                after:content-[''] after:absolute after:left-0 after:top-0 after:w-full after:h-1 after:bg-black after:-rotate-45
                "/>
                        </button>
                    </div>

                    {/* LINKS */}
                    <nav className="mt-10 flex flex-col gap-6">
                        <NavigationLink
                            size={18}
                            color="BlackAndOrange"
                            href="#skills"
                            className="font-bold"
                            onClick={onClose}>
                            Навыки
                        </NavigationLink>
                        <NavigationLink
                            size={18}
                            color="BlackAndOrange"
                            href="#portfolio"
                            className="font-bold"
                            onClick={onClose}>
                            Портфолио
                        </NavigationLink>
                        <NavigationLink
                            size={18}
                            color="BlackAndOrange"
                            href="#HowIwork"
                            className="font-bold"
                            onClick={onClose}>
                            Как я работаю
                        </NavigationLink>
                        <NavigationLink
                            size={18}
                            color="BlackAndOrange"
                            href="#contact"
                            className="font-bold"
                            onClick={onClose}>
                            Контакты
                        </NavigationLink>
                    </nav>

                    {/* FOOTER */}
                    <div className="mt-auto space-y-6">
                        {/* SOCIAL */}
                        <div className="flex justify-between">
                            <SocialIcon src={Telegram} alt="Telegram" />
                            <SocialIcon src={VK} alt="VK" />
                            <SocialIcon src={Instagram} alt="Instagram" />
                            <SocialIcon src={FaceBook} alt="Facebook" />
                            <SocialIcon src={Whatsapp} alt="Whatsapp" />
                        </div>

                        {/* EMAIL */}
                        <CustomLink
                            color="blue"
                            href="mailto:vlad@mail.ru"
                            className="block text-center text-base"
                        >
                            vlad@mail.ru
                        </CustomLink>
                    </div>
                </div>
            </aside>
        </>
    );
};

interface Props {
    open: boolean;
    onClose: () => void;
}


const SocialIcon = ({ src, alt }: { src: any; alt: string }) => (
    <CustomLink opacity="75" href="#!">
        <Image src={src} alt={alt} width={35} height={35} />
    </CustomLink>
);
