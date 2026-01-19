"use client"

import { ComponentProps } from "react"
import { cva, VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"


const groupStyles = cva("flex gap-5", {
	variants: {
		direction: {
			row: "flex-row",
			col: "flex-col",
		},
		items: {
			center: "items-center",
		},
		justify: {
			between: "justify-between",
		},
	},
	defaultVariants: {
		direction: "row",
	},
})

type Props = ComponentProps<"div"> & VariantProps<typeof groupStyles>

export const Group = ({ className, direction, items, justify, ...props }: Props) => {
	return (
		<div className={cn(groupStyles({ direction, items, justify }), className)} {...props} />
	)
}
