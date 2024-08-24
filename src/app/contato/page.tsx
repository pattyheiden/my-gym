import banner from "@/assets/banner-contact.svg"
import Image from "next/image"
import Link from "next/link"

export default function Contato() {
    return (
        <div className="w-full bg-zinc-950 pt-14 pb-14 border-b border-t-2 border-1 border-primary">
            <div className="container flex flex-col mx-auto px-4">
                <span className="font-extrabold xl:text-6xl lg:text-5xl md:text-4xl text-2xl uppercase text-primary text-center">
                    dúvidas, sugestões ou pontos a melhorar
                </span>
                <span className="font-bold lg:text-lg text-base text-zinc-100 text-center mt-6">
                    Entre em contato conosco pelos meios de comunicação disponíveis abaixo <br />
                    e retornaremos o mais breve possível
                </span>
                <div className="flex flex-col p-4 container mx-auto mt-14 mb-14">
                    <form className="flex flex-col gap-4 justify-center">
                        <input name="Nome" placeholder="Nome" className="bg-zinc-800 p-3 rounded-xl" />
                        <input name="Telefone" placeholder="Telefone" className="bg-zinc-800 p-3 rounded-xl" />
                        <input name="E-mail" placeholder="E-mail" className="bg-zinc-800 p-3 rounded-xl" />
                        <input name="Assunto" placeholder="Assunto" className="bg-zinc-800 p-3 rounded-xl" />
                        <textarea name="Mensagem" placeholder="Mensagem" className="bg-zinc-800 p-3 rounded-xl" />
                        <button type="submit" className="font-extrabold p-3 bg-primary text-seconday rounded-xl">Enviar</button>
                    </form>

                </div>
            </div>
        </div>
    )
}