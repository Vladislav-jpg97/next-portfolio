import { cn } from "@/lib/utils"
import { cva, VariantProps } from "class-variance-authority"
import { ComponentProps } from "react"

export const inputVariant = cva("inline-block pb-[15px] outline-none", {
    variants: {
        border: {
            bottom: "border-b border-b-[#E5E5E5] focus:border-b-[#FF543E] active:border-b-[#FF543E]"
        },
        inputSize: {
            22: "text-[22px] font-normal text-[#9D9D9D] focus:font-bold focus:text-black"
        }
    },
    defaultVariants: {
        border: "bottom",
        inputSize: 22
    }
})

export const Input = ({ className, border, inputSize, ...props }: ComponentProps<"input"> & VariantProps<typeof inputVariant>) => {
    return <input className={cn(inputVariant({ border, inputSize }), className)} {...props} />
}