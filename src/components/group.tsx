"use client"

import { cn } from "@/lib/utils"
import { ComponentProps } from "react"

export const Group = ({ className, direction,items,justify, ...props }: Props) => {
    return <div className={
        cn("flex gap-5", {
            "flex-row": direction === "row",
            "flex-col": direction === "col",
            "items-center": items === "center",
            "justify-between" : justify === "between"
        } , className)
    } {...props} />
}

type Props = ComponentProps<"div"> & {
    direction?: "row" | "col",
    items?: "center",
    justify?: "between"

}