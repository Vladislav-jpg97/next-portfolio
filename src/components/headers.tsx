"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils"; // Утилита для объединения классов

/* ================= COMPONENT ================= */

const headingVariants = cva(
    "text-black relative z-0", // Основные стили
    {
        variants: {
            // Варианты для разных размеров текста
            size: {
                78: "text-[78px] font-bold leading-none",
                58: "text-[58px] font-bold leading-none",
                54: "text-[54px] font-bold leading-none",
                42: "text-[42px] font-bold leading-none",
                32: "text-[32px] font-bold leading-none",
                30: "text-[30px] font-semibold leading-none",
                24: "text-[24px] font-bold leading-[1.3]",
                20: "text-[20px] font-bold leading-[1.3]",
                18: "text-[18px] font-semibold leading-[1.3]",
            },
            // Варианты для адаптивных размеров
            md: {
                78: "md:text-[78px]",
                58: "md:text-[58px]",
                54: "md:text-[54px]",
                42: "md:text-[42px]",
                32: "md:text-[32px]",
                30: "md:text-[30px]",
                24: "md:text-[24px]",
                20: "md:text-[20px]",
                18: "md:text-[18px]",
            },
            lg: {
                78: "lg:text-[78px]",
                58: "lg:text-[58px]",
                54: "lg:text-[54px]",
                42: "lg:text-[42px]",
                32: "lg:text-[32px]",
                30: "lg:text-[30px]",
                24: "lg:text-[24px]",
                20: "lg:text-[20px]",
                18: "lg:text-[18px]",
            },
            xl: {
                78: "xl:text-[78px]",
                58: "xl:text-[58px]",
                54: "xl:text-[54px]",
                42: "xl:text-[42px]",
                32: "xl:text-[32px]",
                30: "xl:text-[30px]",
                24: "xl:text-[24px]",
                20: "xl:text-[20px]",
                18: "xl:text-[18px]",
            },
            // Вариант для добавления линии под заголовок
            hasLine: {
                true: "relative px-0.65 after:content-[''] after:absolute after:bottom-0.5 after:left-0 after:right-0 after:block after:h-1 after:rounded-full after:bg-[#FBDC4D] after:-z-1",
                false: "",
            },
        },
        // Значения по умолчанию
        defaultVariants: {
            size: 42,
            hasLine: false,
        },
    }
);

/* ================= COMPONENT ================= */

export const Heading = ({
    as = "h1",
    size = 42,
    md,
    lg,
    xl,
    hasLine = false,
    className,
    children,
    ...props
}: HeadingProps) => {
    const Component = as; // Используем переданный тег

    return (
        <Component
            className={cn(
                headingVariants({ size, md, lg, xl, hasLine }), // Применяем классы с вариантами
                className // Дополнительные классы, переданные через prop
            )}
            {...props}
        >
            {children}
        </Component>
    );
};

/* ================= TYPES ================= */

type HeadingSize = 78 | 58 | 54 | 42 | 32 | 30 | 24 | 20 | 18;

type HeadingProps = {
    /** HTML-тег (семантика) */
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

    /** Размер по умолчанию */
    size?: HeadingSize;

    /** Адаптивные размеры */
    md?: HeadingSize;
    lg?: HeadingSize;
    xl?: HeadingSize;

    /** Жёлтая линия */
    hasLine?: boolean;

    /** Дополнительные классы */
    className?: string;

    /** Дочерние элементы */
    children?: React.ReactNode;
} & VariantProps<typeof headingVariants>;

/* ================= SIZE MAP ================= */

const sizeClasses: Record<HeadingSize, string> = {
    78: "text-[78px] font-bold leading-none",
    58: "text-[58px] font-bold leading-none",
    54: "text-[54px] font-bold leading-none",
    42: "text-[42px] font-bold leading-none",
    32: "text-[32px] font-bold leading-none",
    30: "text-[30px] font-semibold leading-none",
    24: "text-[24px] font-bold leading-[1.3]",
    20: "text-[20px] font-bold leading-[1.3]",
    18: "text-[18px] font-semibold leading-[1.3]",
};

{/* <Heading
    as="h2"
    size={24}     // mobile
    md={32}       // tablet
    lg={42}       // desktop
    xl={58}       // large screens
    hasLine
>
    Портфолио
</Heading> */}





