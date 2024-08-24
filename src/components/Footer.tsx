import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/ux-multifit.svg"
import android from "@/assets/android.png"
import apple from "@/assets/apple.png"
import { FaFacebook, FaInstagram } from "react-icons/fa6";

export function Footer() {
    return (
        <div className="flex flex-col items-center w-full bg-zinc-950 text-zinc-200 ">
            <div className="xl:grid lg:grid md:grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 flex flex-col container justify-between mt-14 pb-14 px-4">
                <div className="flex flex-col justify-center ">
                    <Image src={Logo} width={0} height={100} alt="ux multifit" className="w-auto xl:h-[100px] lg:h-[100px] md:h-[80px] h-[70px]" />
                    <div className="flex justify-center gap-8 mt-6">
                        <Link href="https://www.instagram.com/uxmultifit/" target="_blank">
                            <FaInstagram className="h-6 w-6 hover:text-primary hover:opacity-90 transition duration-300" />
                        </Link>
                        <Link href="https://www.facebook.com/profile.php?id=61551244251055" target="_blank">
                            <FaFacebook className="h-6 w-6 hover:text-primary hover:opacity-90 transition duration-300" />
                        </Link>

                    </div>
                </div>
                <div className="flex flex-col items-center xl:mt-0 lg:mt-0 md:mt-0 mt-6">
                    <span className="text-primary font-bold uppercase mb-10">menu</span>
                    <Link href="/" target="_blank" className="text-base font-medium hover:text-zinc-400 transition duration-200 uppercase">home</Link>
                    <Link href="/sobre" target="_blank" className="text-base font-medium hover:text-zinc-400 transition duration-200 uppercase">sobre a ux multifit</Link>
                    <Link href="/aulas-coletivas" target="_blank" className="text-base font-medium hover:text-zinc-400 transition duration-200 uppercase">aulas coletivas</Link>
                    <Link href="/contato" target="_blank" className="text-base font-medium hover:text-zinc-400 transition duration-200 uppercase">contato</Link>
                    <span className="text-primary font-semibold pt-2 uppercase">dúvidas e informações</span>
                    <span className="pb-2 text-base font-medium">47 98448-6434</span>
                </div>
                <div className="flex flex-col items-center xl:mt-0 lg:mt-0 md:mt-0 mt-6">
                    <span className="text-primary font-bold uppercase mb-10">baixe o nosso app</span>
                    <div className="flex flex-col gap-2">
                        <Image src={android} width={0} height={60} alt="android" />
                        <Image src={apple} width={0} height={60} alt="apple" />
                    </div>
                </div>
                <div className="flex flex-col items-center xl:mt-0 lg:mt-0 md:mt-0 mt-6">
                    <span className="text-primary font-semibold uppercase">segunda à sexta</span>
                    <span className="pb-2 text-base font-medium">das 5:00h às 23:00h</span>
                    <span className="text-primary font-semibold uppercase">sábados e feriados</span>
                    <span className="pb-2 text-base font-medium">das 8:00h às 17:00h</span>
                    <span className="text-primary font-semibold uppercase">domingos</span>
                    <span className="pb-2 text-base font-medium">das 8:00h às 14:00h</span>
                </div>
            </div>
            <div className="pt-2 pb-2 px-4 text-center border-t border-dotted border-px lg:w-[70%] w-full border-zinc-800">
                <span>© Copyright 2024 – Todos os direitos reservados – UX MULTIFIT</span>
            </div>
        </div>
    )
}