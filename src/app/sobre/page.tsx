import Image from "next/image";
import gymIcon from "@/assets/gym-icon.png"
import necessidade from "@/assets/necessidade.svg"
import sonho from "@/assets/sonho.svg"
import nome from "@/assets/nome-ux-multifit.svg"

export default function Sobre() {
    return (
        <div className="w-full bg-zinc-950 border-b border-t-2 border-primary">
            <div className="flex flex-col container mx-auto px-4 py-14 items-center justify-center">
                <div className="flex bg-primary w-20 p-6 rounded-full mx-auto xl:mx-0 lg:mx-0 mb-6">
                    <Image src={gymIcon} alt="gym-icon" width={0} height={30} className="w-auto h-[30px]" />
                </div>
                <span className="text-xl font-bold text-zinc-100 text-center">seja único e multi</span>
                <span className="font-bold lg:text-6xl text-2xl uppercase text-zinc-100 text-center">seja <br /> multi<strong className="text-primary">fit</strong></span>
                <div className="lg:grid lg:grid-cols-3 lg:gap-x-2 flex flex-col justify-items-center mt-14 gap-y-4">
                    <div className="bg-zinc-800 rounded-xl p-6 ">
                        <Image src={necessidade} alt="personal trainer" width={0} height={0} className="w-auto h-auto rounded-t-xl mb-4" />
                        <span className="lg:pl-0 lg:justify-start flex font-bold text-2xl uppercase justify-center italic text-primary">a necessidade</span>
                        <span className="lg:text-start flex text-base font-medium mt-10 text-center text-zinc-100">
                            Após mais de uma década como Personal Trainer, atendendo a necessidade individualizada de cada cliente,
                            percebi as limitações dos espaços convencionais. <br /><br />A maioria dos frequentadores busca cuidar da saúde,
                            seja por orientação médica ou por desejo próprio, mas muitos desistem devido à falta de cuidado e
                            atenção personalizada.<br /><br /> Foi a experiência com um cliente que havia desistido de várias academias,
                            enfrentando sérios problemas de saúde, que consolidou a necessidade de uma abordagem mais centrada
                            no cuidado e orientação. <br /><br />Ao receber orientação personalizada e acompanhamento constante,
                            esse cliente reverteu e controlou condições médicas graves, destacando a importância do cuidado individualizado.
                        </span>
                    </div>
                    <div className="bg-zinc-800 rounded-xl p-6">
                        <Image src={sonho} alt="personal trainer" width={0} height={0} className="w-w-auto h-auto rounded-t-xl mb-4" />
                        <span className="lg:pl-0 lg:justify-start flex font-bold text-2xl uppercase justify-center italic text-primary">O Sonho</span>
                        <span className="lg:text-start flex text-base font-medium mt-10 text-center text-zinc-100">
                            A concepção da UX MULTIFIT foi impulsionada pelo sonho de criar uma academia verdadeiramente inclusiva,
                            capaz de atender a uma ampla variedade de públicos e atividades. <br /><br />Não queríamos ser apenas mais um espaço
                            de musculação ou dança, mas sim um centro abrangente de treinamento e orientação, focado no aluno e
                            dedicado a melhorar sua qualidade de vida. <br /><br />Percebemos que muitas academias se tornaram simples locadoras
                            de espaço e equipamentos, perdendo o foco essencial de cuidar, orientar e planejar processos de saúde
                            e bem-estar para cada pessoa. <br /><br />Como educador físico, comprometido com os princípios morais e éticos da profissão,
                            surgiu a visão de uma academia que priorizasse a singularidade e particularidade de cada aluno, atendendo às
                            necessidades específicas de cada indivíduo.
                        </span>
                    </div>
                    <div className="bg-zinc-800 rounded-xl p-6">
                        <Image src={nome} alt="personal trainer" width={0} height={0} className="w-w-auto h-auto rounded-t-xl mb-4" />
                        <span className="lg:pl-0 lg:justify-start flex font-bold text-2xl uppercase justify-center italic text-primary">O Nome UX MULTIFIT</span>
                        <span className="lg:text-start flex text-base font-medium mt-10 text-center text-zinc-100">
                            A escolha do nome reflete a proposta de um universo multiplicador. <br /><br />A UX MULTIFIT busca não apenas somar,
                            mas multiplicar experiências. <br /><br />O termo "Multi" representa a diversidade de atividades, culturas,
                            pessoas e gerações que a academia abraça. <br /><br />Trabalhamos para multiplicar a ideia de viver bem,
                            reconhecendo a singularidade de cada indivíduo no universo multifacetado da UX MULTIFIT.
                        </span>
                    </div>
                </div>
                <div className="flex flex-col mt-14 mb-14">
                    <span className="font-bold lg:text-4xl text-xl uppercase text-zinc-100 text-center">Ser Único e Multi na UX MULTIFIT</span>
                    <span className=" flex text-base font-medium mt-10 text-center text-zinc-100">
                        A UX MULTIFIT é única na união de pessoas e ideias, mas multiplica experiências em atividades, culturas,
                        preferências e biótipos. <br />Queremos que cada indivíduo seja único em suas necessidades, preferências e atividades,
                        mas ao mesmo tempo, faça parte de um universo multifit. <br />Seja único e multi. Seja UX MULTIFIT
                    </span>
                </div>
            </div>
        </div>
    )
}