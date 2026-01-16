"use client";

import { useState } from "react";
import type { ComponentProps } from "react";
import Image from "next/image";

import { Container } from "@/components/container";
import { Group } from "@/components/group";
import { CustomLink } from "@/components/link";

import In from "./../../public/img/in.png";
import GitHub from "./../../public/img/github-icon.png";
import { MobileMenu } from "@/components/MobileMeny";
import { NavigationLink } from "@/components/NavLink";



export const Header = ({
    className,
    ...props
}: Omit<ComponentProps<"header">, "children">) => {
    const [open, setOpen] = useState(false);

    return (
        <header
            className={`py-7 bg-white/60 sticky top-0 z-50 ${className ?? ""} `}
            data-slot="header"
            {...props}
        >
            <Container>
                {/* Mobile */}
                <div className="block md:hidden">
                    <Group direction="row" items="center" justify="between" className="gap-5">
                        <CustomLink href="/" size="20" className="font-bold">
                            HTML Верстальщик
                        </CustomLink>

                        <button
                            type="button"
                            onClick={() => setOpen(prev => !prev)}
                            data-state={open ? "open" : "closed"}
                            className="group relative z-10"
                        >
                            <span className="
                                block w-10 h-1 bg-black mb-2
                                relative
                                before:content-[''] before:absolute before:-top-3 before:left-0 before:w-full before:h-1 before:bg-black
                                after:content-[''] after:absolute after:top-3 after:left-0 after:w-full after:h-1 after:bg-black
                                "/>

                        </button>
                    </Group>
                </div>

                {/* Desktop */}
                <div className="hidden md:block">
                    <div className="flex justify-between items-center xl:justify-center xl:gap-62">
                        <div className="space-x-12.5 xl:space-x-24">
                            <NavigationLink size={18} color="BlackAndOrange" href="#skills" className="font-bold">
                                Навыки
                            </NavigationLink>
                            <NavigationLink size={18} color="BlackAndOrange" href="#portfolio" className="font-bold">
                                Портфолио
                            </NavigationLink>
                            <NavigationLink size={18} color="BlackAndOrange" href="#HowIwork" className="font-bold">
                                Как я работаю
                            </NavigationLink>
                            <NavigationLink size={18} color="BlackAndOrange" href="#contact" className="font-bold">
                                Контакты
                            </NavigationLink>
                        </div>

                        <div className="space-x-7">
                            <button type="button" className="hover:opacity-60 active:opacity-60 focus:opacity-60 " >
                                <Image src={In} alt="LinkedIn" width={32} height={32} />
                            </button>
                            <button type="button" className="hover:opacity-60 active:opacity-60 focus:opacity-60 ">
                                <Image src={GitHub} alt="GitHub" width={36} height={36} />
                            </button>
                        </div>
                    </div>
                </div>
            </Container>
            <MobileMenu open={open} onClose={() => setOpen(false)} />

        </header>
    );
};
