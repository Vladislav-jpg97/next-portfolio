"use client";

import { Heading } from "@/components/headers";
import { Paragraph } from "@/components/paragraph";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils"; // твой helper для объединения классов
import type { timeLineProjectMockType } from "@/mocks/time-line.mock";

// CVA для li
const liStyles = cva(
	"relative w-full md:w-1/2 pl-12",
	{
		variants: {
			odd: {
				true: "md:pr-12 md:text-right",
				false: "md:pl-12 md:ml-auto",
			},
		},
		defaultVariants: {
			odd: false,
		},
	}
);

// CVA для точки на линии
const dotStyles = cva(
	"absolute top-0 w-7 h-7 rounded-full bg-white border-2 border-[#cfe9f7] z-10 left-1",
	{
		variants: {
			odd: {
				true: "md:left-auto md:right-0 md:translate-x-1/2",
				false: "md:left-0 md:-translate-x-1/2",
			},
		},
		defaultVariants: {
			odd: false,
		},
	}
);

export const TimeLineProject = ({ timeLineData, index }: Props) => {
	const isOdd = index % 2 === 0; // первый слева, второй справа

	return (
		<li
			data-aos="fade-up"
			data-aos-duration="2000"
			className={liStyles({ odd: isOdd })}
		>
			<span
				data-aos="fade-up"
				data-aos-duration="2000"
				className={dotStyles({ odd: isOdd })}
			/>

			<Heading
				data-aos="fade-up"
				data-aos-duration="2000"
				as="h3"
				size={20}
				hasLine
				className="mb-2 inline-block"
			>
				{timeLineData.title}
			</Heading>

			{timeLineData.title2 && (
				<Heading
					data-aos="fade-up"
					data-aos-duration="2000"
					as="h3"
					size={20}
					hasLine
					className="mb-2 inline-block"
				>
					{timeLineData.title2}
				</Heading>
			)}

			<Paragraph
				data-aos="fade-up"
				data-aos-duration="2000"
				className="text-[14px] pb-2.5"
			>
				{timeLineData.description}
			</Paragraph>

			{timeLineData.time && (
				<strong
					data-aos="fade-up"
					data-aos-duration="2000"
					className="text-[14px] font-extrabold tracking-[1.5px]"
				>
					{timeLineData.time}
				</strong>
			)}
		</li>
	);
};

interface Props {
	timeLineData: timeLineProjectMockType;
	index: number;
}
