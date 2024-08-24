import { Carrousel } from "@/components/Modalities/Carrousel";

export default function AulasColetivas() {
    return (
        <div>
            <div className='bg-secondary h-1 w-full' />
            <span className="flex items-center justify-center font-extrabold lg:text-6xl text-2xl mt-20 uppercase" >
                grade de aulas
            </span>
            <span className="lg:px-0 px-4 flex items-center justify-center text-lg font-medium mt-9 text-center">
                Fique por dentro de todos os horários e não esqueça de confirmar sua presença. Esperamos por você!
            </span>

        <Carrousel />

        </div>
    )
}