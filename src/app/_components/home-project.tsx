import { Heading } from "@/components/headers";
import { CustomLink } from "@/components/link";
import { Paragraph } from "@/components/paragraph";
import type { ProjectMockType } from "@/mocks/projects.mock"
import Image from "next/image";

export const HomeProject = ({ projectData }: Props) => {
    return <CustomLink href={"/#!"} scroll={false} className="relative group ">
        <div className="h-55 overflow-hidden relative mb-4 ">
            <Image
                src={projectData.image}
                alt={projectData.name}
                className="w-full h-full object-cover group-hover:blur-sm group-hover:scale-110 transition-all duration-300"
                priority
            />
            <div className="absolute bg-[#FFDD55BF]/75 flex justify-center items-center top-full left-0 right-0 -bottom-full transition-all duration-500 ease-in-out group-hover:top-0 group-hover:bottom-0">
                <button type="button"
                    className="px-5 py-3.5 bg-[#EF6857] inline-block text-white font-bold text-lg rounded-full"
                    onClick={() => window.open(projectData.url, "_blank")}>
                    Смотреть проект
                </button>
            </div>
        </div>

        <Heading as="h4" size={18} lg={24} xl={30} className="mb-1 group-hover:text-orange-01">
            {projectData.name}
        </Heading>

        <Paragraph className="text-lg">
            {projectData.shortDescription}
        </Paragraph>
    </CustomLink>
}

interface Props {
    projectData: ProjectMockType;
}