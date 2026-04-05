"use client"

import {useState} from "react";
import {useKeenSlider} from "keen-slider/react";
import "keen-slider/keen-slider.min.css"
import Image from "next/image";
import Link from "next/link";

const slides = [
    {
        image:"/service4.jpg",
        title: "Soluções Hidráulicas Rápidas e Confiáveis",
        desc: "Conte com especialistas para resolver qualquer problema hidráulico com rapidez e qualidade. Atuamos em manutenção, instalação e reparos, garantindo tranquilidade e eficiência para sua casa."
    },
    {
        image: "/service2.jpg",
        title: "Serviços Elétricos com Segurança e Precisão",
        desc: "Garantimos instalações e manutenções elétricas seguras, eficientes e dentro das normas. Desde pequenos reparos até projetos completos, cuidamos de tudo para que sua casa funcione com total confiança.",
    },
    {
        image: "/service3.jpg",
        title: "Transforme Seu Espaço com Pintura Profissional",
        desc: "Renove ambientes com acabamento impecável e atenção aos detalhes. Trabalhamos com técnicas modernas e materiais de qualidade para entregar um resultado duradouro e sofisticado.",
    },
]

const Slider = () => {

    const [sliderRef] = useKeenSlider<HTMLDivElement>(
        {
            loop: true,
        },
        [
            (slider) => {
                let timeout: ReturnType<typeof setTimeout>
                function clearNextTimeout() {
                    clearTimeout(timeout)
                }
                function nextTimeout() {
                    clearTimeout(timeout)
                    timeout = setTimeout(() => {
                        slider.next()
                    }, 3000)
                }
                slider.on("created", nextTimeout)
                slider.on("dragStarted", clearNextTimeout)
                slider.on("animationEnded", nextTimeout)
                slider.on("updated", nextTimeout)
            },
        ]
    )

    return(
        <>
            <div ref={sliderRef} className="keen-slider w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[90vh] min-h-130 ">

                {slides.map((slides, i) => (
                    <div key={i} className="keen-slider__slide ">
                        <div
                        className="flex w-full h-full items-center justify-center">
                            <img src={slides.image} alt={slides.title} className="m-auto object-cover w-full h-full"/>
                        </div>

                        <div className="bg-black/40 w-full h-full inset-0 absolute"></div>

                        <div className=" absolute flex w-full h-full items-end lg:items-center justify-end px-4 py-5 lg:py-0 md:px-12 inset-0 z-20">
                            <div className="bg-(--color-background)/60 max-w-[99%] w-[99%] lg:max-w-md rounded-3xl overflow-hidden shadow-2xl flex flex-col p-4 sm:p-8 gap-3 lg:gap-5 items-start">

                                <h1 className="text-(--color-primary) text-base md:text-xl lg:text-2xl font-bold uppercase ">{slides.title} </h1>
                                <p className="text-gray-700 text-xs md:text-sm lg:text-base leading-snug">{slides.desc}</p>

                                <Link href="/" className="bg-(--brand-green) text-center text-[11px] sm:text-xs md:text-[13px] lg:text-sm px-3 py-2 sm:px-6 sm:py-3
                                text-white font-bold uppercase rounded-lg shadow-md hover:bg-green-dark hover:-translate-y-0.5 transition-all duration-300
                                ease-in-out active:scale-95">Contact us Now →</Link>
                            </div>
                        </div>
                    </div>


                ))}

            </div>
        </>
    )
}

export default Slider;