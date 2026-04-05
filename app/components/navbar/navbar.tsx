"use client"

import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Navbar = () => {
    return (
        <div className="h-[11vh] flex flex-col w-full">
            <div className="topbar__full">
                        <a
                            href="https://wa.me/5527999999999"
                            className="topbar__item group"
                        >
                            <FaWhatsapp className="topbar__icon " />
                            <span>(27) 99999-9999</span>
                        </a>

                        <span className="w-px h-3 bg-white/20" />

                        <a
                            href="mailto:contato@sos.com"
                            className="topbar__item group"
                        >
                            <MdEmail className="topbar__icon" />
                            <span>contato@sos.com</span>
                        </a>
            </div>
            <nav className="navbar__full">
                <div className="flex flex-row items-center gap-3 font-logo group cursor-pointer m-auto lg:m-0">
                    <div className="relative w-14 h-14 overflow-hidden rounded-lg transition-transform duration-500 group-hover:scale-115">
                        <Image
                            src="/soslogo.jpg"
                            alt="Logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <p className="flex flex-col leading-tight">
                        <span className="block text-[var(--brand-red)] text-[17px] sm:text-lg md:text-xl lg:text-lg font-bold">SOS</span>
                        <span className="block bg-gradient-to-r from-[var(--brand-blue)] to-[var(--color-green-dark)]
                        bg-clip-text text-transparent uppercase font-sans text-[10px] sm:text-xs lg:text-xs tracking-[0.2em] " >Manutenção Predial</span>
                    </p>
                </div>


                <div className="links__full font-sans">
                    <Link href="#" className="link__each">Sobre nós</Link>
                    <Link href="#" className="link__each">Nosso Serviços</Link>
                    <Link href="#" className="link__each">Nossa equipe</Link>
                    <Link href="#" className="link__each">NOs Contate</Link>
                </div>

                <div>
                    <Link href="" className="button__full">Faça um orçamento</Link>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;