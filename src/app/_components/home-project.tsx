"use client";

import { Heading } from "@/components/headers";
import { CustomLink } from "@/components/link";
import { Paragraph } from "@/components/paragraph";
import type { ProjectMockType } from "@/mocks/projects.mock";
import Image from "next/image";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

// CVA для контейнера картинки с hover эффектами
const projectImageWrapper = cva(
	"h-55 overflow-hidden relative mb-4"
);

const projectImage = cva(
	"w-full h-full object-cover transition-all duration-300",
	{
		variants: {
			hoverEffect: {
				true: "group-hover:blur-sm group-hover:scale-110",
				false: "",
			},
		},
		defaultVariants: {
			hoverEffect: true,
		},
	}
);

const overlayButtonWrapper = cva(
	"absolute bg-[#FFDD55BF]/75 flex justify-center items-center top-full left-0 right-0 -bottom-full transition-all duration-500 ease-in-out",
	{
		variants: {
			hoverEffect: {
				true: "group-hover:top-0 group-hover:bottom-0",
				false: "",
			},
		},
		defaultVariants: {
			hoverEffect: true,
		},
	}
);

const buttonCVA = cva(
	"px-5 py-3.5 bg-[#EF6857] inline-block text-white font-bold text-lg rounded-full"
);

const projectTitle = cva("mb-1", {
	variants: {
		hoverEffect: {
			true: "group-hover:text-orange-01",
			false: "",
		},
	},
	defaultVariants: {
		hoverEffect: true,
	},
});

export const HomeProject = ({ projectData }: Props) => {
	return (
		<CustomLink href={"/#!"} scroll={false} className="relative group">
			<div className={projectImageWrapper()}>
				<Image
					src={projectData.image}
					alt={projectData.name}
					className={projectImage()}
					priority
				/>
				<div className={overlayButtonWrapper()}>
					<button
						type="button"
						className={buttonCVA()}
						onClick={() => window.open(projectData.url, "_blank")}
					>
						Смотреть проект
					</button>
				</div>
			</div>

			<Heading as="h4" size={18} lg={24} xl={30} className={projectTitle()}>
				{projectData.name}
			</Heading>

			<Paragraph className="text-lg">{projectData.shortDescription}</Paragraph>
		</CustomLink>
	);
};

interface Props {
	projectData: ProjectMockType;
}
