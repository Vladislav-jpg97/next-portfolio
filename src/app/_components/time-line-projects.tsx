"use client";

import { Container } from "@/components/container";
import { Heading } from "@/components/headers";
import { TimeLineProject } from "./time-line-project";
import { timeLineProject } from "@/mocks/time-line.mock";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

// CVA для ul линии времени
const timelineList = cva(
	"relative flex flex-col gap-14 before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-4 before:w-0.5 before:bg-[#cfe9f7] md:before:left-1/2 md:before:-translate-x-1/2"
);

export const TimeLineProjects = () => {
	return (
		<section id="HowIwork" className="py-10">
			<Container>
				<div className="text-center mb-10">
					<Heading data-aos="fade-up" data-aos-duration="2000" as="h3" hasLine className="inline-block">
						Как я
					</Heading>
					<Heading data-aos="fade-up" data-aos-duration="2000" as="h3" hasLine className="inline-block">
						работаю
					</Heading>
				</div>

				<ul data-aos="fade-up" data-aos-duration="2000" className={timelineList()}>
					{timeLineProject.map((item, index) => (
						<TimeLineProject key={index} timeLineData={item} index={index} />
					))}
				</ul>
			</Container>
		</section>
	);
};
