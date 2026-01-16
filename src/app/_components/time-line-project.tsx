import { Heading } from "@/components/headers"
import { Paragraph } from "@/components/paragraph"
import type { timeLineProjectMockType } from "@/mocks/time-line.mock"

export const TimeLineProject = ({ timeLineData, index }: Props) => {
    const isOdd = index % 2 === 0; // первый слева, второй справа

    return (
        <li
            data-aos="fade-up" data-aos-duration="2000"
            className={`
                relative w-full md:w-1/2 pl-12
                ${isOdd ? "md:pr-12 md:text-right" : "md:pl-12 md:ml-auto"}
            `}
        >
            <span
                data-aos="fade-up" data-aos-duration="2000"
                className={`
                    absolute top-0
                    w-7 h-7 rounded-full bg-white
                    border-2 border-[#cfe9f7] z-10

                    left-1
                    ${isOdd
                        ? "md:left-auto md:right-0 md:translate-x-1/2"
                        : "md:left-0 md:-translate-x-1/2"}
                `}
            />

            <Heading data-aos="fade-up" data-aos-duration="2000" as="h3" size={20} hasLine className="mb-2 inline-block">
                {timeLineData.title}
            </Heading>
						<br />
            {timeLineData.title2 && (
                <Heading data-aos="fade-up" data-aos-duration="2000" as="h3" size={20} hasLine className="mb-2 inline-block">
                    {timeLineData.title2}
                </Heading>
            )}

            <Paragraph data-aos="fade-up" data-aos-duration="2000" className="text-[14px] pb-2.5">
                {timeLineData.description}
            </Paragraph>

            {timeLineData.time && (
                <strong data-aos="fade-up" data-aos-duration="2000" className="text-[14px] font-extrabold tracking-[1.5px]">
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

