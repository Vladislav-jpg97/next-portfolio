"use client"

import { cn } from "@/lib/utils"
import Link from "next/link"
import { ComponentProps } from "react"



export const CustomLink = ({
    className,
    children,
    size = "20",
    color = "defaut",
    opacity,
    ...props
}: Props) => {
    return (
        <Link
            scroll={false}
            className={cn(
                "font-semibold inline-block",
                {
                    // ===== SIZE =====
                    "text-[15px] md:text-[18px] lg:text-[20px]": size === "20",
                    "text-[18px] md:text-[20px] lg:text-[24px]": size === "24",

                    // ===== COLOR =====
                    "text-black hover:text-orange-01 focus:text-orange-01 active:text-orange-01":
                        color === "defaut",
                    "text-sky-01 hover:text-sky-01 focus:text-sky-01 active:text-sky-01":
                        color === "sky",
                        "text-blue hover:text-orange-01 focus:text-orange-01 active:text-orange-01":
                        color === "blue",
                        "hover:opacity-75 transition-all duration-300": opacity === "75"
                },
                className
            )}
            {...props}
        >
            {children}
        </Link>
    )
}

type Props = ComponentProps<typeof Link> & {
    size?: "20" | "24"
    color?: "defaut" | "orange" | "sky" | "blue"
    opacity?: "75"
}
