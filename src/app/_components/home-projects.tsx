"use client"
import { useEffect, useState } from "react"
import { Container } from "@/components/container"
import { Group } from "@/components/group"
import { Heading } from "@/components/headers"
import { CustomLink } from "@/components/link"
import { projectMock } from "@/mocks/projects.mock"
import { useSearchParams } from "next/navigation"
import { HomeProject } from "./home-project"

export const HomeProjects = () => {
	const search = useSearchParams() // хук всегда вызываем первым
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
	}, [])

	// Берём параметры
	const filterByStack = search.get("project") ?? "all"
	const filteredProject = filterByStack === "all" ? projectMock : projectMock.filter(item => item.project === filterByStack)
	const hasProjects = filteredProject.length > 0

	// Если не смонтирован — рендерим пустой блок, но хуки уже вызваны
	if (!mounted) return <div style={{ height: "200px" }} />

	return (
		<section data-aos="fade-up" data-aos-duration="2000" id="portfolio" className="bg-body z-1">
			<Container>
				<div data-aos="fade-up" data-aos-duration="2000" className="space-y-[31.5px] py-7.5">
					<Heading data-aos="fade-up" data-aos-duration="2000" as={"h1"} size={24} lg={32} md={42} xl={54} hasLine className="inline-block">
						Портфолио
					</Heading>

					<Group data-aos="fade-up" data-aos-duration="2000" direction="row" items="center" className="gap-7">
						<CustomLink className="z-1" href={{ pathname: "/", query: { project: "all" } }} size="20" color={filterByStack === "all" ? "defaut" : "sky"}>Все работы</CustomLink>

						<CustomLink className="z-1" href={{ pathname: "/", query: { project: "html" } }} size="20" color={filterByStack === "html" ? "defaut" : "sky"}>HTML верстка</CustomLink>

						<CustomLink className="z-1" href={{ pathname: "/", query: { project: "wp" } }} size="20" color={filterByStack === "wp" ? "defaut" : "sky"}>WordPress</CustomLink>
					</Group>

					<div data-aos="fade-up" data-aos-duration="2000" className="grid grid-cols-1 gap-y-12.5 gap-x-7.5 sm:grid-cols-2 lg:grid-cols-2">
						{hasProjects ? filteredProject.map(item => <HomeProject key={item.id} projectData={item} />) : <p>Информация не найдена</p>}
					</div>
				</div>
			</Container>
		</section>
	)
}
