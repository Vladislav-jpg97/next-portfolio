"use client";

import { Container } from "@/components/container";
import { Heading } from "@/components/headers";
import { CustomLink } from "@/components/link";
import { Paragraph } from "@/components/paragraph";
import Image from "next/image";
import Telegram from "@public/svg/telegram-svgrepo-com.svg";
import Instagram from "@public/svg/instagram-svgrepo-com.svg";
import VK from "@public/svg/vk-v2-svgrepo-com.svg";
import FaceBook from "@public/svg/facebook-1-svgrepo-com.svg";
import Whatsapp from "@public/svg/whatsapp-whats-app-svgrepo-com.svg";
import { Input } from "@/components/input";
import { Textarea } from "@/components/textarea";
import { Group } from "@/components/group";
import { Button } from "@/components/button";
import { useForm } from "react-hook-form";
import { ContactsType, contactsSchema } from "@/schemas/contacts.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTransition } from "react";
import { contactsAction } from "@/actions/contacts.action";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

// ===== CVA =====

// Соцсети
const socialLink = cva("inline-block transition-all duration-300", {
	variants: {
		size: {
			sm: "w-11 h-11 md:w-12 md:h-12",
			lg: "w-12 h-12 md:w-14 md:h-14",
		},
		opacity: {
			"75": "hover:opacity-75",
		},
	},
	defaultVariants: {
		size: "sm",
		opacity: "75",
	},
});

// Форма
const formWrapper = cva("bg-white rounded-xl space-y-5 shadow-[0_20px_40px_#A0CEEDBF]", {
	variants: {
		padding: {
			sm: "p-6",
			md: "p-12.5",
		},
	},
	defaultVariants: { padding: "md" },
});

// Ошибки
const errorText = cva("text-red-500 text-sm");

// Контейнер соцсетей
const socialGroup = cva("gap-4 items-center");

// ===== COMPONENT =====

export const HomeContact = () => {
	const { register, handleSubmit, formState: { errors } } = useForm<ContactsType>({
		resolver: zodResolver(contactsSchema),
	});

	const [pending, startTransition] = useTransition();

	const onSubmit = (values: ContactsType) => {
		startTransition(async () => {
			const response = await contactsAction(values);
			alert(response.message);
		});
	};

	return (
		<section
			data-aos="fade-up"
			data-aos-duration="2000"
			id="contact"
			className="pt-17.5 pb-22.5"
			style={{ background: "var(--bg-gradient)" }}
		>
			<Container>
				{/* Заголовок */}
				<div data-aos="fade-up" data-aos-duration="2000" className="text-center mb-10 md:mb-13.75">
					<Heading
						as="h1"
						size={24}
						md={42}
						xl={54}
						hasLine
						className="inline-block md:after:bottom-2.5 lg:after:bottom-1.5 xl:after:bottom-3"
					>
						Контакты
					</Heading>
				</div>

				<Group direction="col" className="gap-10 lg:flex-row lg:gap-16">
					{/* Левая колонка */}
					<div className="max-w-full lg:w-134.5">
						<Paragraph
							data-aos="fade-up"
							data-aos-duration="2000"
							className="font-bold text-base md:text-lg leading-[150%]"
						>
							Если вы ищите специалиста по верстке сайтов или frontend разработчика в команду для работы над проектом — напишите мне.
						</Paragraph>

						{/* Контакты */}
						<ul data-aos="fade-up" data-aos-duration="2000" className="py-6 space-y-4">
							{[
								{ label: "Email", value: "vlad@mail.ru" },
								{ label: "Телефон", value: "+99897 0978720" },
							].map((item, i) => (
								<li key={i} className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
									<strong className="text-base md:text-xl leading-[160%]">{item.label}</strong>
									<CustomLink
										color="blue"
										href="#!"
										className="text-xl font-normal leading-[160%] no-underline"
									>
										{item.value}
									</CustomLink>
								</li>
							))}
						</ul>

						{/* Социальные сети */}
						<Group direction="row" className={socialGroup()}>
							{[
								{ src: Telegram, alt: "Telegram" },
								{ src: Instagram, alt: "Instagram" },
								{ src: VK, alt: "VK" },
								{ src: FaceBook, alt: "FaceBook" },
								{ src: Whatsapp, alt: "Whatsapp" },
							].map((icon, i) => (
								<CustomLink
									key={i}
									opacity="75"
									href="#!"
									className={socialLink({ size: "sm" })}
								>
									<Image src={icon.src} alt={icon.alt} className="w-full h-full object-contain" />
								</CustomLink>
							))}
						</Group>
					</div>

					{/* Правая колонка - форма */}
					<div data-aos="fade-up" data-aos-duration="2000" className="flex-1">
						<form
							className={formWrapper({ padding: "md" })}
							onSubmit={handleSubmit(onSubmit)}
						>
							<Input
								{...register("email")}
								placeholder="Email"
								className="w-full"
							/>
							{errors.email && <p className={errorText()}>{errors.email.message}</p>}

							<Textarea
								{...register("message")}
								placeholder="Введите текст"
								className="w-full"
							/>
							{errors.message && <p className={errorText()}>{errors.message.message}</p>}

							<Button>{pending ? "Отправляется" : "Отправка"}</Button>
						</form>
					</div>
				</Group>
			</Container>
		</section>
	);
};
