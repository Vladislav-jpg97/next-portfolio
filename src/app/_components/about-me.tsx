import { Container } from "@/components/container"
import { Heading } from "@/components/headers"

import Image from "next/image"
import MyPhoto from "./../../../public/img/im.jpg"
import DesctopImg from "./../../../public/img/desctop.png"
import { Paragraph } from "@/components/paragraph"
import Telegram from "@public/svg/telegram-svgrepo-com.svg"
import Instagram from "@public/svg/instagram-svgrepo-com.svg"
import VK from "@public/svg/vk-v2-svgrepo-com.svg"
import FaceBook from "@public/svg/facebook-1-svgrepo-com.svg"
import Whatsapp from "@public/svg/whatsapp-whats-app-svgrepo-com.svg"
import { CustomLink } from "@/components/link"
import { Button } from "@/components/button"


export const AboutMe = () => {
    return <>
        <section className=" mb-10">
            <Container>
                {/* Мобильная версия */}
                <div className="block sm:hidden">
                    <Heading data-aos="fade-up" data-aos-duration="2000" as={"h1"} size={32} md={42} lg={58} xl={78} hasLine className="inline-block">
                        Тё
                    </Heading>
                    <br />
                    <Heading data-aos="fade-up" data-aos-duration="2000" as={"h1"} size={32} md={42} lg={58} xl={78} hasLine className="inline-block">
                        Владислав
                    </Heading>

                    <div data-aos="fade-up" data-aos-duration="2000" className="w-72.5 h-62.5 mt-5 mb-2.5">
                        <Image src={MyPhoto} alt="MyPhoto" className="w-full h-full" />
                    </div>

                    <Paragraph data-aos="fade-up" data-aos-duration="2000">
                        Верстальщик сайтов, веб-разработчик. Оперативная верстка. Работаю с соблюдением сроков и выполнением ТЗ.
                    </Paragraph>
                </div>

                {/* Десктопная версия */}
                <div className="hidden sm:block ">
                    <div className="flex justify-between items-center xl:justify-center xl:gap-40">
                        <div className="max-w-88.5 lg:max-w-105 space-y-5 xl:space-y-8">
                            <Heading data-aos="fade-up" data-aos-duration="2000" as={"h1"} hasLine size={32} lg={58} xl={78} className="inline-block">
                                Тё
                            </Heading>
                            <br />
                            <Heading data-aos="fade-up" data-aos-duration="2000" as={"h1"} hasLine size={32} lg={58} xl={78} className="inline-block">
                                Владислав
                            </Heading>

                            <Paragraph data-aos="fade-up" data-aos-duration="2000" className="lg:text-[18px] xl:text-[22px]">
                                Верстальщик сайтов, веб-разработчик. Оперативная верстка. Работаю с соблюдением сроков и выполнением ТЗ.
                            </Paragraph>

                            <div className="hidden lg:block">
                                <div className="flex gap-5">
                                    <Button data-aos="fade-up" data-aos-duration="2000" bg="yellow" className="z-1">
                                        Познакомиться
                                    </Button>

                                    <Button data-aos="fade-up" data-aos-duration="2000" bg="sky" className="z-1">
                                        Контакты
                                    </Button>

                                </div>
                            </div>
                        </div>

                        <div data-aos="fade-up" data-aos-duration="2000" className="w-72.5 h-62.5 lg:w-94 lg:h-81.25 mt-5 mb-2.5 xl:w-118.75 xl:h-102.5">
                            <Image src={MyPhoto} alt="MyPhoto" className="w-full h-full" />
                        </div>
                    </div>
                </div>

                <div>
                    <div data-aos="fade-up" data-aos-duration="2000" id="skills" className="block w-auto min-h-42 mb-2.5">
                        <Image src={DesctopImg} alt="DesctopImg" className="w-full h-full overflow-hidden" />
                    </div>
                    <div className="sm:flex sm:justify-between">
                        <div data-aos="fade-up" data-aos-duration="2000" className="space-y-5">
                            <Heading data-aos="fade-up" data-aos-duration="2000" as={"h3"} size={24} lg={32} xl={42}>
                                Что я умею:
                            </Heading>

                            <Paragraph data-aos="fade-up" data-aos-duration="2000" className="lg:relative lg:pl-4 lg:before:content-['–'] lg:before:absolute lg:before:left-0 lg:before:top-0 lg:text-[18px] xl:text-[22px]">
                                Адаптивная верстка под мобильные устройства
                            </Paragraph>

                            <Paragraph data-aos="fade-up" data-aos-duration="2000" className="lg:relative lg:pl-4 lg:before:content-['–'] lg:before:absolute lg:before:left-0 lg:before:top-0 lg:text-[18px] xl:text-[22px]">
                                Владею базовыми знаниями tailwindcss и без него
                            </Paragraph>
                        </div>
                        <div  className="mt-8 gap-5 flex flex-col sm:mt-0">
                            <Heading data-aos="fade-up" data-aos-duration="2000" as={"h3"} size={24} lg={32} xl={42}>
                                На связи:
                            </Heading>
                            <div className="flex justify-between items-center sm:gap-5 z-1">
                                <CustomLink data-aos="fade-up" data-aos-duration="2000" opacity="75" href={"#!"} className="overflow-hidden w-12 h-12">
                                    <Image
                                        src={Telegram}
                                        alt="Telegram"
                                        className="w-full h-full object-cover "
                                    />
                                </CustomLink>
                                <CustomLink data-aos="fade-up" data-aos-duration="2000" opacity="75" href={"#!"} className="overflow-hidden w-12 h-12">
                                    <Image
                                        src={Instagram}
                                        alt="Instagram"
                                        className="w-full h-full object-cover"
                                    />
                                </CustomLink>
                                <CustomLink data-aos="fade-up" data-aos-duration="2000" opacity="75" href={"#!"} className="overflow-hidden w-12 h-12 ">
                                    <Image
                                        src={VK}
                                        alt="VK"
                                        className="w-full h-full object-cover"
                                    />
                                </CustomLink>
                                <CustomLink data-aos="fade-up" data-aos-duration="2000" opacity="75" href={"#!"} className="overflow-hidden w-14 h-14 ">
                                    <Image
                                        src={FaceBook}
                                        alt="FaceBook"
                                        className="w-full h-full object-cover"
                                    />
                                </CustomLink>
                                <CustomLink data-aos="fade-up" data-aos-duration="2000" opacity="75" href={"#!"} className="overflow-hidden w-12 h-12">
                                    <Image
                                        src={Whatsapp}
                                        alt="Whatsapp"
                                        className="w-full h-full object-cover"
                                    />
                                </CustomLink>
                            </div>

                            <CustomLink data-aos="fade-up" data-aos-duration="2000"
                                color="blue"
                                href={"#!"}
                                className="text-xl font-normal leading-160% lg:text-[18px] xl:text-[22px] block pointer-events-auto z-1 "
                            >
                                vlad@mail.ru
                            </CustomLink>
                        </div>


                    </div>
                </div>
            </Container>

        </section>
    </>
}