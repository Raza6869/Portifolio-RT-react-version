"use client"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from 'next/navigation'

import logoCoco from "@/Images/RafaelThumazaPlusLogo.png"
import Links from "./Links";



export default function Navbar(){
    const activatedLink = "text-red decoration-solid underline underline-offset-4";
    const inactivatedLink = "text-white/40 no-underline hover:text-white"
    const pathname = usePathname();
    

    return(
        <div id="container" className="flex justify-between p-10">
            <div className="flex items-center gap-5">
                <div>
                    <Link href="/"><Image src={logoCoco} alt="Logo da Home"/></Link>
                </div>
                <div className="flex gap-8">
                    <Links
                    custom = {pathname === '/about' ? activatedLink : inactivatedLink}
                    href="/about"
                    name="Sobre Mim"
                    />
                    <Links
                    custom = {pathname === '/projetos' ? activatedLink : inactivatedLink}
                    href="/projetos"
                    name="Projetos"
                    />
                    <Links
                    custom = {pathname === '/Desenhos' ? activatedLink : inactivatedLink}
                    href="/Desenhos"
                    name="Desenhos"
                    />
                    <Links
                    custom = {pathname === '/resume' ? activatedLink : inactivatedLink}
                    href="/resume"
                    name="Resumo"
                    />
                    <Links
                    custom = {pathname === '/contact' ? activatedLink : inactivatedLink}
                    href="/contact"
                    name="Contato"
                    />
                </div>
            </div>
            <div className="flex text-xl gap-2">
                <a href="."><i class="bi bi-instagram hover:text-red"></i></a>
                <a href="."><i class="bi bi-linkedin hover:text-red"></i></a>
                <a href="."><i class="bi bi-github hover:text-red"></i></a>
            </div>
        </div>
    )
}