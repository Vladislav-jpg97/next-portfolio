import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

export const Container = ({className, ...props}:ComponentProps<"div">) => {
    return <div className={cn("max-w-285.5 w-full mx-auto px-4",className)} {...props}/>
}