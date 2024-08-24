'use client'
import React, { Component } from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Dot } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import Link from "next/link";
import { RiArrowLeftWideLine, RiArrowRightWideLine } from "react-icons/ri";

export class Carrousel extends Component {
    slide = (param: number) => {
        return (
            <CarouselProvider
                naturalSlideHeight={125}
                naturalSlideWidth={100}
                isIntrinsicHeight={true}
                totalSlides={7}
                visibleSlides={param}
                step={1}
                infinite={true}
                isPlaying={true}
                className="w-full flex flex-col items-center justify-center lg:block" >
                <div className="w-full relative flex items-center justify-center">
                    <ButtonBack role="button" aria-label="slide backward" className="z-30 left-0 cursor-pointer" id="prev">
                        <RiArrowLeftWideLine className="text-primary h-6 w-6" />
                    </ButtonBack>
                    <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                        <Slider>
                            <div id="slider" className="h-full flex lg:gap-4 md:gap-14 lg:space-x-0 md:space-x-0 space-x-1 items-center justify-start transition ease-out duration-700">
                                <Slide index={0}>
                                    <div className="flex flex-shrink-0 relative w-full sm:w-auto bg-black lg:rounded-3xl">
                                        <Link href='#' target="_blank">
                                            <img src="/burn.svg" alt="burn" width={800} height={800} className="object-cover object-center h-auto w-auto lg:rounded-3xl transition duration-300 hover:opacity-90" />
                                        </Link>
                                        <div className="absolute bottom-10 left-8 font-bold text-lg text-zinc-100 uppercase">burn</div>
                                    </div>
                                </Slide>
                                <Slide index={1}>
                                    <div className="flex flex-shrink-0 relative w-full sm:w-auto bg-black lg:rounded-3xl">
                                        <Link href='#' target="_blank">
                                            <img src="/pedal.svg" alt="pedal" width={800} height={800} className="object-cover object-center h-auto w-auto lg:rounded-3xl transition duration-300 hover:opacity-90" />
                                        </Link>
                                        <div className="absolute bottom-10 left-8 font-bold text-lg text-zinc-100 uppercase">pedal cycle</div>
                                    </div>
                                </Slide>
                                <Slide index={2}>
                                    <div className="flex flex-shrink-0 relative w-full sm:w-auto bg-black lg:rounded-3xl">
                                        <Link href='' target="_blank">
                                            <img src="/dance.svg" alt="dance" width={800} height={800} className="object-cover object-center h-auto w-auto lg:rounded-3xl transition duration-300 hover:opacity-90" />
                                        </Link>
                                        <div className="absolute bottom-10 left-8 font-bold text-lg text-zinc-100 uppercase">fitdance</div>
                                    </div>
                                </Slide>
                                <Slide index={3}>
                                    <div className="flex flex-shrink-0 relative w-full sm:w-auto bg-black lg:rounded-3xl">
                                        <Link href='#' target="_blank">
                                            <img src="/alongamento.svg" alt="alongamento" width={800} height={800} className="object-cover object-center h-auto w-auto lg:rounded-3xl transition duration-300 hover:opacity-90" />
                                        </Link>
                                        <div className="absolute bottom-10 left-8 font-bold text-lg text-zinc-100 uppercase">alongamento e <br />mobilidade</div>
                                    </div>
                                </Slide>
                                <Slide index={4}>
                                    <div className="flex flex-shrink-0 relative w-full sm:w-auto bg-black lg:rounded-3xl">
                                        <Link href='#' target="_blank">
                                            <img src="/gap.svg" alt="gap" width={800} height={800} className="object-cover object-center h-auto w-auto lg:rounded-3xl transition duration-300 hover:opacity-90" />
                                        </Link>
                                        <div className="absolute bottom-10 left-8 font-bold text-lg text-zinc-100 uppercase">g.a.p</div>
                                    </div>
                                </Slide>
                                <Slide index={4}>
                                    <div className="flex flex-shrink-0 relative w-full sm:w-auto bg-black lg:rounded-3xl">
                                        <Link href='#' target="_blank">
                                            <img src="/pilates.svg" alt="pilates" width={800} height={800} className="object-cover object-center h-auto w-auto lg:rounded-3xl transition duration-300 hover:opacity-90" />
                                        </Link>
                                        <div className="absolute bottom-10 left-8 font-bold text-lg text-zinc-100 uppercase">pilates solo</div>
                                    </div>
                                </Slide>
                                <Slide index={4}>
                                    <div className="flex flex-shrink-0 relative w-full sm:w-auto bg-black lg:rounded-3xl">
                                        <Link href='#' target="_blank">
                                            <img src="/yoga.svg" alt="yoga" width={800} height={800} className="object-cover object-center h-auto w-auto lg:rounded-3xl transition duration-300 hover:opacity-90" />
                                        </Link>
                                        <div className="absolute bottom-10 left-8 font-bold text-lg text-zinc-100 uppercase">yoga</div>
                                    </div>
                                </Slide>
                            </div>
                        </Slider>
                    </div>
                    <ButtonNext role="button" aria-label="slide forward" className="z-30 right-0 cursor-pointer" id="next">
                        <RiArrowRightWideLine className="text-primary h-6 w-6" />
                    </ButtonNext>
                </div>
                
            </CarouselProvider>
        )
    }
    render() {

        return (
            <div id="clients" className="container mx-auto">
                <div className="flex items-center justify-center w-full h-full py-24 sm:py-8 px-4">
                    <div className="lg:hidden block">
                        {this.slide(1)}
                    </div>
                    <div className="lg:block hidden">
                        {this.slide(4)}
                    </div>
                </div>
            </div>
        )
    }
}