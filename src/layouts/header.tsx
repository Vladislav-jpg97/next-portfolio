"use client";

import { useState, useEffect } from "react";
import { Container } from "@/components/container";
import { Group } from "@/components/group";
import { CustomLink } from "@/components/link";
import { NavigationLink } from "@/components/nav-link";
import Image from "next/image";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

import In from "@public/img/in.png";
import GitHub from "@public/img/github-icon.png";
import { MobileMenu } from "@/layouts/mobile-meny";

// ===== CVA для гамбургера =====
const burgerSpan = cva(
	"block w-10 h-1 mb-2 relative bg-black before:absolute before:left-0 before:w-full before:h-1 before:bg-black after:absolute after:left-0 after:w-full after:h-1 after:bg-black",
	{
		variants: {
			state: {
				closed: "before:-top-3 before:rotate-0 after:top-3 after:rotate-0",
				open: "before:top-0 before:rotate-45 after:top-0 after:-rotate-45",
			},
		},
		defaultVariants: {
			state: "closed",
		},
	}
);

// ===== CVA для Header =====
const headerStyles = cva("sticky top-0 z-50 bg-white/60 py-7", {
	variants: {
		variant: {
			default: "",
			custom: "",
		},
	},
	defaultVariants: {
		variant: "default",
	},
});

export const Header = ({
	className,
	...props
}: Omit<React.ComponentProps<"header">, "children">) => {
	const [open, setOpen] = useState(false);
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	return (
		<header className={cn(headerStyles(), className)} {...props} data-slot="header">
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
							<span className={burgerSpan({ state: open ? "open" : "closed" })} />
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
							<button type="button" className="hover:opacity-60 active:opacity-60 focus:opacity-60">
								<Image src={In} alt="LinkedIn" width={32} height={32} />
							</button>
							<button type="button" className="hover:opacity-60 active:opacity-60 focus:opacity-60">
								<Image src={GitHub} alt="GitHub" width={36} height={36} />
							</button>
						</div>
					</div>
				</div>
			</Container>

			{mounted && <MobileMenu open={open} onClose={() => setOpen(false)} />}
		</header>
	);
};
