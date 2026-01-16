"use client"
import { Container } from "@/components/container"
import { Heading } from "@/components/headers"
import { CustomLink } from "@/components/link"
import { Paragraph } from "@/components/paragraph"
import Image from "next/image"
import Telegram from "@public/svg/telegram-svgrepo-com.svg"
import Instagram from "@public/svg/instagram-svgrepo-com.svg"
import VK from "@public/svg/vk-v2-svgrepo-com.svg"
import FaceBook from "@public/svg/facebook-1-svgrepo-com.svg"
import Whatsapp from "@public/svg/whatsapp-whats-app-svgrepo-com.svg"
import { Input } from "@/components/input"
import { Textarea } from "@/components/textarea"
import { Group } from "@/components/group"
import { Button } from "@/components/button"
import { useForm } from "react-hook-form"
import { ContactsType, contactsSchema } from "@/schemas/contacts.schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useTransition } from "react"
import { contactsAction } from "@/actions/contacts.action"


export const HomeConact = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<ContactsType>({
        resolver: zodResolver(contactsSchema)
    })
    const [pending, startTransition] = useTransition()
    const onSubmit = (values: ContactsType) => {
        startTransition(async () => {
            const response = await contactsAction(values)
            if (!response.status) {
                alert(response.message)
                return
            }
            alert(response.message)
        })
    }


    return <section data-aos="fade-up" data-aos-duration="2000" id="contact" className="pt-17.5 pb-22.5"
        style={{ background: "var(--bg-gradient)" }}>
        <Container>
            <div>
                {/* Заголовок */}
                <div data-aos="fade-up" data-aos-duration="2000" className="text-center mb-10 md:mb-13.75">
                    <Heading
                        data-aos="fade-up" data-aos-duration="2000"
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
                        <Paragraph data-aos="fade-up" data-aos-duration="2000" className="font-bold text-base md:text-lg leading-[150%]">
                            Если вы ищите специалиста по верстке сайтов
                            или frontend разработчика в команду для работы
                            над проектом — напишите мне.
                        </Paragraph>

                        {/* Контакты */}
                        <ul data-aos="fade-up" data-aos-duration="2000" className="py-6 space-y-4">
                            {/* Email */}
                            <li className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
                                <strong data-aos="fade-up" data-aos-duration="2000" className="text-base md:text-xl leading-[160%]">
                                    Email
                                </strong>

                                <CustomLink
                                    data-aos="fade-up" data-aos-duration="2000"
                                    color="blue"
                                    href="#!"
                                    className="
                                text-xl
                                font-normal
                                leading-[160%]                                
                                no-underline                                
                            "
                                >
                                    vlad@mail.ru
                                </CustomLink>
                            </li>

                            {/* Телефон */}
                            <li data-aos="fade-up" data-aos-duration="2000" className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
                                <strong className="text-base md:text-xl leading-[160%]">
                                    Телефон
                                </strong>

                                <CustomLink
                                    data-aos="fade-up" data-aos-duration="2000"
                                    color="blue"
                                    href="#!"
                                    className="
                                text-xl
                                font-normal
                                leading-[160%]                                
                                no-underline                                
                            "
                                >
                                    +99897 0978720
                                </CustomLink>
                            </li>
                        </ul>

                        {/* Социальные сети */}
                        <Group direction="row" className="gap-4 items-center">
                            <CustomLink data-aos="fade-up" data-aos-duration="2000" opacity="75" href="#!" className="w-11 h-11 md:w-12 md:h-12">
                                <Image src={Telegram} alt="Telegram" className="w-full h-full object-contain" />
                            </CustomLink>

                            <CustomLink data-aos="fade-up" data-aos-duration="2000" opacity="75" href="#!" className="w-11 h-11 md:w-12 md:h-12">
                                <Image src={Instagram} alt="Instagram" className="w-full h-full object-contain" />
                            </CustomLink>

                            <CustomLink data-aos="fade-up" data-aos-duration="2000" opacity="75" href="#!" className="w-11 h-11 md:w-12 md:h-12">
                                <Image src={VK} alt="VK" className="w-full h-full object-contain" />
                            </CustomLink>

                            <CustomLink data-aos="fade-up" data-aos-duration="2000" opacity="75" href="#!" className="w-12 h-12 md:w-14 md:h-14">
                                <Image src={FaceBook} alt="FaceBook" className="w-full h-full object-contain" />
                            </CustomLink>

                            <CustomLink data-aos="fade-up" data-aos-duration="2000" opacity="75" href="#!" className="w-11 h-11 md:w-12 md:h-12">
                                <Image src={Whatsapp} alt="Whatsapp" className="w-full h-full object-contain" />
                            </CustomLink>
                        </Group>
                    </div>

                    {/* Правая колонка */}
                    <div data-aos="fade-up" data-aos-duration="2000" className="flex-1">
                        <form
                            className="bg-white p-6 md:p-12.5 space-y-5 rounded-xl shadow-[0_20px_40px_#A0CEEDBF]"
                            onSubmit={handleSubmit(onSubmit)}
                        >
                            <Input
                                data-aos="fade-up" data-aos-duration="2000"
                                className="w-full"
                                placeholder="Email"
                                {...register("email")}
                            />

                            {errors.email && (
                                <p className="text-red-500 text-sm">
                                    {errors.email.message}
                                </p>
                            )}

                            <Textarea
                                data-aos="fade-up" data-aos-duration="2000"
                                className="w-full"
                                placeholder="Введите текст"
                                {...register("message")}
                            />

                            {errors.message && (
                                <p className="text-red-500 text-sm">
                                    {errors.message.message}
                                </p>
                            )}

                            <Button data-aos="fade-up" data-aos-duration="2000">{
                                pending ? "Отправляется" : "Отправка"
                            }</Button>
                        </form>
                    </div>
                </Group>
            </div>
        </Container>



    </section>
}