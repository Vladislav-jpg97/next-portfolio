"use client";

import Image from "next/image";
import { CustomLink } from "@/components/link";
import { NavigationLink } from "@/components/nav-link";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

import Telegram from "@public/svg/telegram-svgrepo-com.svg";
import Instagram from "@public/svg/instagram-svgrepo-com.svg";
import VK from "@public/svg/vk-v2-svgrepo-com.svg";
import FaceBook from "@public/svg/facebook-1-svgrepo-com.svg";
import Whatsapp from "@public/svg/whatsapp-whats-app-svgrepo-com.svg";

// ===== CVA для Backdrop =====
const backdropStyles = cva(
	"fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 md:hidden",
	{
		variants: {
			open: {
				true: "opacity-100 visible",
				false: "opacity-0 invisible",
			},
		},
		defaultVariants: {
			open: false,
		},
	}
);

// ===== CVA для меню (aside) =====
const menuStyles = cva(
	"fixed top-0 right-0 h-full z-50 bg-white transition-transform duration-300 ease-in-out w-full sm:w-1/2 md:hidden",
	{
		variants: {
			open: {
				true: "translate-x-0",
				false: "translate-x-full",
			},
		},
		defaultVariants: {
			open: false,
		},
	}
);

// ===== CVA для крестика закрытия =====
const closeButtonSpan = cva(
	"block w-10 h-1 bg-transparent relative before:content-[''] before:absolute before:left-0 before:top-0 before:w-full before:h-1 before:bg-black before:rotate-45 after:content-[''] after:absolute after:left-0 after:top-0 after:w-full after:h-1 after:bg-black after:-rotate-45"
);

export const MobileMenu = ({ open, onClose }: Props) => {
	return (
		<>
			{/* BACKDROP */}
			<div onClick={onClose} className={backdropStyles({ open })} />

			{/* MENU */}
			<aside className={menuStyles({ open })}>
				<div className="flex flex-col h-full px-6 pt-6 pb-8">
					{/* HEADER */}
					<div className="flex justify-between items-center">
						<span className="text-lg font-bold">Навигация</span>
						<button onClick={onClose} aria-label="Close menu">
							<span className={closeButtonSpan()} />
						</button>
					</div>

					{/* LINKS */}
					<nav className="mt-10 flex flex-col gap-6">
						{["skills", "portfolio", "HowIwork", "contact"].map((href, i) => (
							<NavigationLink
								key={i}
								size={18}
								color="BlackAndOrange"
								href={`#${href}`}
								className="font-bold"
								onClick={onClose}
							>
								{href === "HowIwork" ? "Как я работаю" : href === "portfolio" ? "Портфолио" : href === "skills" ? "Навыки" : "Контакты"}
							</NavigationLink>
						))}
					</nav>

					{/* FOOTER */}
					<div className="mt-auto space-y-6">
						{/* SOCIAL */}
						<div className="flex justify-between">
							{[
								{ src: Telegram, alt: "Telegram" },
								{ src: VK, alt: "VK" },
								{ src: Instagram, alt: "Instagram" },
								{ src: FaceBook, alt: "Facebook" },
								{ src: Whatsapp, alt: "Whatsapp" },
							].map((item, i) => (
								<SocialIcon key={i} src={item.src} alt={item.alt} />
							))}
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
