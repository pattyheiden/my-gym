'use client'
import Image from "next/image";
import Logo from '@/assets/ux-multifit.svg'
import { useState } from "react";
import Link from "next/link";
import { PiListBold } from "react-icons/pi";
import { SettingsTabs } from "./SettingTabs";

export function Header() {
    const [isOpen, setOpen] = useState(false);
    return (

        <div className="container flex h-32 items-center mx-auto justify-between px-4">
            <Image src={Logo} width={140} height={0} alt="ux multifit" className="lg:w-[140px] h-auto w-[110px]" />
            <div className="lg:flex gap-4 font-medium uppercase hidden">
                <SettingsTabs />
            </div>
            <PiListBold className="lg:hidden w-9 h-9 text-secondary mr-1 active:opacity-60" onClick={() => setOpen(!isOpen)} />
            {isOpen && (
                <div className="md:hidden absolute top-[130px] left-0 right-0 bg-secondary text-white z-10 uppercase">
                    <Link href="/" target="_blank" className="block p-4 border-b border-zinc-100">Home</Link>
                    <Link href="/aulas-coletivas" target="_blank" className="block p-4 border-b border-zinc-100">aulas coletivas</Link>
                    <Link href="/sobre" target="_blank" className="block p-4 border-b border-zinc-100">sobre a ux multifit</Link>
                    <Link href="/contato" target="_blank" className="block p-4">contato</Link>
                </div>
            )}
        </div>
    )
}