"use client";
import { ComponentProps } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";


const buttonVariants = cva(
    "transition-all duration-500 py-4 px-6.5 font-bold text-[20px] leading-4 rounded-full xl:py-4.75 xl:px-10",
    {
        variants: {
            bg: {
                yellow: "bg-[#FBDC4D] hover:bg-[#FFEB8D] active:bg-[#F5D22D]",
                sky: "bg-[#EFF7FC] hover:bg-[#D1EDFF] active:bg-[#B0DCF8]",
            },
        },
        defaultVariants: {
            bg: "yellow",
        },
    }
);


export const Button = ({
    bg,
    children,
    className,
    ...props
}: ButtonProps) => {
    return (
        <button
            className={cn(buttonVariants({ bg }), className)} 
            {...props}
        >
            {children}
        </button>
    );
};

// Типы пропсов для кнопки
type ButtonProps = {
    bg?: "yellow" | "sky"; // Пропс bg теперь необязательный
} & ComponentProps<"button"> & VariantProps<typeof buttonVariants>;
