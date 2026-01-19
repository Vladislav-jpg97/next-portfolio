"use client"

import Link from "next/link"
import { ComponentProps } from "react"
import { cva, VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

// Определяем cva для span/link
const linkStyles = cva(
	"font-semibold inline-block transition-all duration-300", // базовые классы
	{
		variants: {
			size: {
				"20": "text-[15px] md:text-[18px] lg:text-[20px]",
				"24": "text-[18px] md:text-[20px] lg:text-[24px]",
			},
			color: {
				defaut: "text-black hover:text-orange-01 focus:text-orange-01 active:text-orange-01",
				orange: "text-orange-01 hover:text-orange-02 focus:text-orange-02 active:text-orange-02",
				sky: "text-sky-01 hover:text-sky-01 focus:text-sky-01 active:text-sky-01",
				blue: "text-blue hover:text-orange-01 focus:text-orange-01 active:text-orange-01",
			},
			opacity: {
				"75": "hover:opacity-75",
			},
		},
		defaultVariants: {
			size: "20",
			color: "defaut",
		},
	}
)

type Props = ComponentProps<typeof Link> & VariantProps<typeof linkStyles>

export const CustomLink = ({ className, children, size, color, opacity, ...props }: Props) => {
	return (
		<Link
			scroll={false}
			className={cn(linkStyles({ size, color, opacity }), className)}
			{...props}
		>
			{children}
		</Link>
	)
}
