import { VariantProps } from "class-variance-authority";
import { ComponentProps } from "react";
import { inputVariant } from "./input";
import { cn } from "@/lib/utils";

export const Textarea = ({ className, border, inputSize, ...props }: ComponentProps<"textarea"> & VariantProps<typeof inputVariant>) => {
    return <textarea className={cn(inputVariant({border,inputSize}),"min-h-40.5",className)}{...props}/>
}