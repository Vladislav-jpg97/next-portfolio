import { ComponentProps } from "react";

type ParagraphProps = ComponentProps<"p">;

const Paragraph = ({ className, children, ...props }: ParagraphProps) => {
    return (
        <p
            className={`text-[16px] font-normal  text-black ${className ?? ""}`} 
            data-slot="paragraph"
            {...props}
        >
            {children}
        </p>
    );
};

export { Paragraph };
