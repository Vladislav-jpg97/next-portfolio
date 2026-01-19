"use client"

import type { ComponentProps, FC } from "react"
import { cva, VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Container } from "@/components/container"
import Link from "next/link"

// ===== CVA стили для футера =====
const footerStyles = cva("w-full", {
	variants: {
		bg: {
			dark: "bg-[#333333]",
			light: "bg-white",
		},
		padding: {
			sm: "py-3",
			md: "py-5",
			lg: "py-7",
		},
	},
	defaultVariants: {
		bg: "dark",
		padding: "md",
	},
})

const textStyles = cva("text-white", {
	variants: {
		size: {
			sm: "text-sm",
			md: "text-base",
			lg: "text-xl",
		},
		opacity: {
			"30": "text-white/30",
			"100": "text-white",
		},
	},
	defaultVariants: {
		size: "md",
		opacity: "100",
	},
})

// ===== Типы пропсов =====
type FooterProps = Omit<ComponentProps<"footer">, "children"> &
	VariantProps<typeof footerStyles>

// ===== Компонент Footer =====
export const Footer: FC<FooterProps> = ({ className, ...props }) => {
	return (
		<footer
			className={cn(footerStyles(), className)}
			data-slot="footer"
			{...props}
		>
			<div className="gap-2.5 flex flex-col">
				<Container>
					<p className={textStyles({ size: "lg", opacity: "100" })}>
						&copy; - Тё Владислав
					</p>
					<p className={textStyles({ opacity: "30" })}>
						Веб-разработчик из Ташкента, занимаюсь версткой и созданием сайтов.
					</p>
					<p className={textStyles({ opacity: "30" })}>
						Этот сайт сделал в рамках прохождения обучения по верстке на курсах от{" "}
						<Link href="#!" className="text-white underline">
							(Курсы)
						</Link>
					</p>
				</Container>
			</div>
		</footer>
	)
}
