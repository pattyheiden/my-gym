import Image from "next/image";
import treino from "@/assets/treino.svg"
import pilates from "@/assets/pilates.png"
import planos from "@/assets/planos.svg"
import planosMobile from "@/assets/planos-mobile.svg"
import massagem from "@/assets/massagem.jpg"
import gymIcon from "@/assets/gym-icon.png"
import reabilitacao1 from "@/assets/reabilitação-1.svg"
import reabilitacao2 from "@/assets/reabilitação-2.svg"
import aulas from "@/assets/aulas.svg"
import aulasMobile from "@/assets/aulas-mobile.svg"
import park from "@/assets/park1.svg"
import air from "@/assets/air1.svg"
import cabinet from "@/assets/cabinet1.svg"
import shower from "@/assets/shower1.svg"
import wifi from "@/assets/wifi1.svg"
import weighing from "@/assets/weighing1.svg"
import smartphone from "@/assets/smartphone1.svg"
import { Banner } from "@/components/Banner";
import { Carrousel } from "@/components/Modalities/Carrousel";
// import { Banner } from "./Banner";

export default function Homepage() {
    return (
        <div className="flex flex-col">
            <Banner />
            <div className="lg:flex-row lg:h-48 flex flex-col w-full bg-secondary h-auto">
                <div className="lg:flex-row lg:space-y-0 lg:my-0 md:my-0 container flex flex-col mx-auto justify-between items-center space-y-10 my-16 px-4">
                    <div className="flex flex-col items-center gap-3">
                        <Image src={park} alt="park" width={60} height={60} className="h-[60px] w-[60px]" />
                        <span className="text-base font-bold uppercase text-primary">estacionamento</span>
                    </div>
                    <div className="flex flex-col items-center gap-3">
                        <Image src={air} alt="air" width={60} height={60} className="h-[60px] w-[60px]" />
                        <span className="text-base font-bold uppercase text-primary">ar condicionado</span>
                    </div>
                    <div className="flex flex-col items-center gap-3">
                        <Image src={cabinet} alt="cabinet" width={60} height={60} className="h-[60px] w-[60px]" />
                        <span className="text-base font-bold uppercase text-primary">armário rotativo</span>
                    </div>
                    <div className="flex flex-col items-center gap-3">
                        <Image src={shower} alt="shower" width={60} height={60} className="h-[60px] w-[60px]" />
                        <span className="text-base font-bold uppercase text-primary">ducha</span>
                    </div>
                    <div className="flex flex-col items-center gap-3">
                        <Image src={wifi} alt="wifi" width={60} height={60} className="h-[60px] w-[60px]" />
                        <span className="text-base font-bold uppercase text-primary">wifi</span>
                    </div>
                    <div className="flex flex-col items-center gap-3">
                        <Image src={weighing} alt="weighing" width={60} height={60} className="h-[60px] w-[60px]" />
                        <span className="text-base font-bold uppercase text-primary">avaliação física</span>
                    </div>
                    <div className="flex flex-col items-center gap-3">
                        <Image src={smartphone} alt="smartphone" width={60} height={60} className="h-[60px] w-[60px]" />
                        <span className="text-base font-bold uppercase text-primary">app ux multifit</span>
                    </div>
                </div>
            </div>
            <div className=" bg-zinc-200 w-full justify-center xl:items-center lg:items-start px-4">
                <div className="xl:grid lg:grid lg:grid-cols-2 xl:grid-cols-2 flex flex-col container mx-auto">
                    <div className="xl:order-1 lg:order-1 order-2 flex flex-col xl:mt-100 lg:mt-100 pb-14">
                        <h1 className="xl:justify-start lg:justify-start xl:mt-0 lg:mt-0 mt-14 flex text-2xl font-bold uppercase justify-center">musculação</h1>
                        <span className="lg:text-start flex text-base font-medium mt-10 text-center">
                            Descubra um espaço impressionante de mais de 600m² dedicado à musculação e aeróbica! Nossa sala de musculação está equipada com os aparelhos mais modernos e eficientes. Para o cardio, oferecemos o que há de mais avançado em tecnologia: esteiras, simuladores e bikes de última geração. Imagine-se correndo em esteiras com telas de 20 polegadas, que proporcionam circuitos de caminhada simulada em locais icônicos ao redor do mundo. E mais: interaja nas redes sociais ou assista à sua série favorita enquanto se exercita!
                            <br /><br />
                            Para os entusiastas de alta performance, temos esteiras curvas que desafiam sua velocidade e simuladores como escadas e elípticos, ideais para eliminar o estresse do dia e queimar calorias. Nossa área de peso livre é um paraíso para os amantes de musculação, com quase três mil quilos de anilhas e uma vasta gama de halteres, de 1kg a 50kg.
                            <br /><br />
                            Todos os nossos equipamentos são de última geração, com tecnologia de ponta, proporcionando uma experiência de treino que você só viu na internet. Agora, você pode usufruir desses aparelhos inovadores e transformar sua rotina de exercícios em algo extraordinário. Venha conhecer e se surpreender!
                        </span>
                        <h1 className="xl:justify-start lg:justify-start flex text-2xl font-bold uppercase justify-center mt-14">treino</h1>
                        <span className="lg:text-start flex text-base font-medium mt-10 text-center">
                            Após a matrícula, nossos clientes passam por uma avaliação física detalhada com a máquina de bioimpedância de última geração da UX MULTIFIT. Essa avaliação examina a condição física e a composição corporal do cliente. Com base nesses dados e nos objetivos pessoais, elaboramos planilhas de treinamento personalizadas, disponíveis através do nosso app (sistema CLOUD GYM).
                            <br /><br />
                            Além de receber o treinamento diretamente no app, você poderá avaliar cada sessão, assim como a estrutura e os profissionais, garantindo um feedback contínuo. Esse diferencial permite que ofereçamos sempre o melhor para nossos clientes, proporcionando uma experiência única e eficaz.
                        </span>
                    </div>
                    <div className="flex xl:mt-14 lg:mt-14 mt-14 xl:order-2 lg:order-2 order-1 ">
                        <Image src={treino} alt="treino" width={600} height={600} className="w-full h-auto max-h-[600px]" />
                    </div>
                </div>
            </div>
            {/* plans */}
            <div className="lg:flex mb-14 hidden">
                <Image src={planos} alt="planos" width={600} height={600} className="w-full h-auto max-h-[600px] object-cover" />
            </div>
            <div className="lg:hidden mb-14">
                <Image src={planosMobile} alt="planos-mobile" width={600} height={600} className="w-full h-auto max-h-[600px] object-cover" />
            </div>
            <div className="flex xl:flex-row lg:flex-row flex-col container mx-auto px-4">
                <div className="flex flex-col flex-1 xl:mt-14 lg:mt-14 ">
                    <div className="flex bg-primary w-20 p-6 rounded-full mx-auto xl:mx-0 lg:mx-0">
                        <Image src={gymIcon} alt="gym-icon" width={0} height={30} className="w-auto h-[30px]" />
                    </div>
                    <span className="lg:text-start flex text-center font-extrabold xl:text-6xl lg:text-5xl md:text-4xl text-2xl pt-4" >
                        SEJA FITNESS <br className="lg:flex hidden" />
                        E SAUDÁVEL.<br />
                        SINTA-SE <br className="lg:flex hidden" />
                        INSPIRADO<br />
                        E MOTIVADO
                    </span>
                </div>
                <div className="lg:flex-row flex flex-1 flex-col gap-8 mt-14 mb-14">
                    <div className="flex flex-col gap-2 mx-4">
                        <Image src={pilates} alt="pilates" width={0} height={500} className="flex h-[500px] w-auto rounded-2xl object-cover" />
                        <h2 className="lg:text-start font-bold italic text-2xl text-center">STUDIO PILATES</h2>
                        <span className="lg:pl-0 lg:max-w-[800px] lg:mx-0 lg:text-start flex text-base font-medium mt-1 w-auto text-center">Aulas que te ajudar no alongamento, reabilitação e condicionamento físico, ideal para aquele que necessita de cuidados especiais.</span>
                    </div>
                    <div className="flex flex-col gap-2 mx-4">
                        <Image src={massagem} alt="massagem" width={0} height={500} className="flex h-[500px] w-auto rounded-2xl object-cover" />
                        <h2 className="lg:text-start font-bold italic text-2xl text-center">MASSOTERAPIA</h2>
                        <span className="lg:pl-0 lg:max-w-[800px] lg:mx-0 lg:text-start flex text-base font-medium mt-1 w-auto text-center">A UX MULTIFIT trás até você um espaço para relaxar sua musculatura e tratar suas dores, com massoterapeutas com técnicas e métodos avançados irão deixar você totalmente relaxado.</span>
                    </div>

                </div>
            </div>
            <div className="bg-secondary w-full pt-14">
                <div className="container mx-auto">
                    <div className="flex flex-col items-center">
                        <span className=" lg:pt-2 font-extrabold xl:text-6xl lg:text-5xl md:text-4xl text-2xl text-primary text-center uppercase">
                            A SAÚDE É <br />
                            PRIORIDADE AQUI
                        </span>
                        <span className="text-center text-zinc-100 lg:pl-0 lg:max-w-[800px] lg:mx-0 flex text-base font-medium mt-6 w-auto mx-4">
                            Por  uma proposta de um Universo Multiplicador. Não queremos apenas somar. Buscamos trabalhar a inspanidualidade de cada pessoa,
                            “SER ÚNICO”. Único nas suas necessidades, único nas suas preferências, único nas suas atividades, único no biotipo, seu corpo,
                            sua fisiologia. Trataremos cada indivíduo como um SER ÚNICO no “UNIVERSO”.
                        </span>
                    </div>
                    <Carrousel />
                </div>
            </div>
            {/* aulas */}

            <div className="lg:flex hidden">
                <Image src={aulas} alt="treino" width={600} height={600} className="w-full h-auto max-h-[600px] object-cover" />
            </div>
            <div className="lg:hidden">
                <Image src={aulasMobile} alt="treino" width={600} height={600} className="w-full h-auto max-h-[600px] object-cover" />
            </div>
            <div className="flex xl:flex-row lg:flex-row flex-col container mx-auto px-4">
                <div className="lg:flex-row flex flex-1 flex-col mt-14 mb-14 xl:gap-0 lg:gap-0 md:gap-0 gap-4">
                    <div className="flex md:flex-1 flex-col mx-4">
                        <Image src={reabilitacao1} alt="reabilitacao1" width={0} height={500} className="flex h-[500px] w-auto rounded-2xl md:object-fill md:rounded-2xl object-cover" />                        
                    </div>
                    <div className="xl:flex flex-col mx-4 hidden">
                        <Image src={reabilitacao2} alt="reabilitacao2" width={0} height={500} className="flex h-[500px] w-auto rounded-2xl object-cover" />                        
                    </div>

                </div>
                <div className="flex flex-col flex-1 xl:mt-14 lg:mt-14">
                    <span className="flex text-center font-extrabold xl:text-6xl lg:text-5xl md:text-4xl text-2xl pt-4" >
                        CENTRO DE REABILITAÇÃO <br className="lg:flex hidden" />
                        E FISIOLOGIA AVANÇADA<br />
                    </span>
                    <span className="lg:px-0 flex text-center text-base font-medium mt-6 w-auto mx-auto lg:w-[80%] ">
                        A UX MULTIFIT é pioneira em Blumenau e região ao oferecer um centro de reabilitação e recuperação pré e pós-cirúrgico e traumático.
                        Contamos com fisiologistas especializados que te ajudarão na recuperação de lesões e traumas, proporcionando um cuidado completo e
                        personalizado para sua saúde e bem-estar. Venha conhecer nosso diferencial e alcance uma recuperação eficiente e segura.
                    </span>
                </div>
            </div>
        </div>
    )
}