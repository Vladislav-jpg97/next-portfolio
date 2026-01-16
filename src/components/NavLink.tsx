import { cva, type VariantProps } from "class-variance-authority"
import { ComponentProps } from "react"
import { cn } from "@/lib/utils"

const linkVariants = cva(
    "font-semibold inline-block transition-colors",
    {
        variants: {
            size: {
                18: "text-[15px] md:text-[18px] lg:text-[20px]",
                24: "text-[18px] md:text-[20px] lg:text-[24px]",
            },
            color: {
                BlackAndOrange:
                    "text-black hover:text-orange-01 focus:text-orange-01 active:text-orange-01",
            },
        },
        defaultVariants: {
            size: 18,
            color: "BlackAndOrange",
        },
    }
)

type Props =
    ComponentProps<"a"> &
    VariantProps<typeof linkVariants>

export const NavigationLink = ({
    className,
    size,
    color,
    ...props
}: Props) => {
    return (
        <a
            className={cn(
                linkVariants({ size, color }),
                className
            )}
            {...props}
        />
    )
}
