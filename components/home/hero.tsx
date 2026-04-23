import Image from 'next/image'
import React from 'react'
import Container from '../container/container'
import SearchBooking from '../search-booking/search-booking'

type Props = {}

function Hero({ }: Props) {
    return (
        <>
            <div className='lg:min-h-screen max-lg:max-h-[calc(100vh-51px-85.52px)] max-lg:min-h-[calc(100vh-51px-85.52px)] relative w-full max-xl:px-6'>
                <Image fill src={'/image/hero-bg.png'} alt='hero-bg' className='object-center object-cover' />
                <div className='absolute top-0 left-0 w-full h-full bg-[#00000099] lg:hidden' />
                <div className='relative max-w-[1280px] lg:min-h-screen max-lg:max-h-[calc(100vh-51px-85.52px)] max-lg:min-h-[calc(100vh-51px-85.52px)] mx-auto '>
                    <div className='w-full h-full'>
                        <div className='absolute max-lg:hidden top-[19.5vh] left-0 py-10 px-11 bg-[#00000099] backdrop-blur-[8px] rounded-[25px]'>
                            <h2 className='font-gotham font-bold text-[2.1vw] leading-[120%] text-center uppercase text-white'>
                                <span className='text-[#5EF700]'>fast, fun, family</span><br />
                                golf in<br />
                                under one hour
                            </h2>
                        </div>
                        <div className='absolute max-lg:hidden top-[28.9vh] right-0 py-[57px] px-[17px] bg-[#00000099] backdrop-blur-[8px] rounded-[25px]'>
                            <h2 className='font-gotham font-bold text-[7vh] leading-[120%] text-center uppercase text-white'>
                                zipgolf <br />
                                a <span className='text-[#5EF700]'>new way</span> <br />
                                to play golf
                            </h2>
                        </div>

                    </div>
                    <div className='lg:min-h-screen max-lg:max-h-[calc(100vh-51px-85.52px)] max-lg:min-h-[calc(100vh-51px-85.52px)] w-full flex lg:items-end items-center py-[101px] relative z-10'>
                        <div className='grid grid-cols-12 w-full'>
                            <div className='lg:col-span-7 col-span-12'>
                                <div className='lg:hidden  rounded-[25px]'>
                                    <h2 className='font-gotham font-bold sm:text-3xl text-2xl leading-[120%] text-center uppercase text-white max-lg:mb-10'>
                                        <span className='text-[#5EF700]'>fast, fun, family </span> 
                                        golf in
                                        under one hour
                                    </h2>
                                    <h2 className='font-gotham font-bold sm:text-6xl text-4xl leading-[120%] text-center uppercase text-white max-lg:mb-10'>
                                        zipgolf 
                                        a <span className='text-[#5EF700]'>new way </span>  
                                        to play golf
                                    </h2>
                                </div>
                            </div>
                            <div className='lg:col-span-5 col-span-12'>
                                <div className='flex gap-[17px] max-sm:flex-col max-lg:justify-center'>
                                    <button className='bg-[#F6F600] border border-black font-outfit font-bold lg:text-sm text-base leading-none capitalize py-[14px] px-6'>
                                        find a location
                                    </button>
                                    <button className='border border-[#F6F600] text-[#F6F600] font-outfit font-bold lg:text-sm text-base leading-none capitalize py-[14px] px-6'>
                                        shop zipgolf gear
                                    </button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <SearchBooking />
        </>
    )
}

export default Hero