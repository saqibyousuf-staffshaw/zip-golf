import React from 'react'
import Container from '../container/container'
import Image from 'next/image'
import Link from 'next/link'

type Props = {}

function Playanytime({ }: Props) {
    return (
        <div className='pt-[87px]'>
            <Container>
                <div className='w-full grid grid-cols-12 xl:gap-[54px] gap-6 overflow-hidden'>
                    <div className='xl:col-span-4 lg:col-span-6 col-span-12 pt-[100px] pb-[17px]'>
                        <div className='flex flex-col items-start gap-3'  data-aos="fade-right">
                            <div className='flex items-end relative w-fit'>
                                <h4 className='font-gotham font-bold text-[25px] leading-none uppercase bg-[linear-gradient(to_bottom,#5EF700_-5.56%,#000000_122.45%)] bg-clip-text text-transparent drop-shadow-[2px_2px_0px_#00000040] mb-3'>play anytime</h4>
                                <Image width={178} height={134} alt='logo' src={'/image/logoWithFace.png'} className='object-bottom object-contain -ml-[15px] rotate-[11.13deg] absolute left-full -bottom-4'  data-aos="zoom-in" data-aos-delay="300"/>
                            </div>
                            <h2 className='font-gotham font-bold text-[40px] leading-[40px] text-left uppercase'>golf that fits your <span className='bg-[linear-gradient(90deg,#000000_0.48%,#5EF700_100%)] bg-clip-text text-transparent'>Schedule</span> </h2>
                            <p className='font-poppins font-normal text-lg tracking-[0.05em] capitalize'>Lorem Ipsum is <span className='font-grobold  text-[#399401]'>simply dummy</span> text of the printing and typesetting industry. Lorem Ipsum has been the industry's Lorem Ipsum is <span className='font-grobold  text-[#399401]'>simply dummy</span> text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
                            <div className='grid grid-cols-2 gap-5'>
                                <div className='flex items-center gap-[7px]'>
                                    <span className='bg-[#5EF700] w-2.5 h-2.5 rounded-full'></span>
                                    <p className='font-poppins font-medium text-lg leading-none tracking-[0.05em] capitalize'>Play before work</p>
                                </div>
                                <div className='flex items-center gap-[7px]'>
                                    <span className='bg-[#5EF700] w-2.5 h-2.5 rounded-full'></span>
                                    <p className='font-poppins font-medium text-lg leading-none tracking-[0.05em] capitalize'>Play at lunch</p>
                                </div>
                                <div className='col-span-2 flex items-center gap-[7px]'>
                                    <span className='bg-[#5EF700] w-2.5 h-2.5 rounded-full'></span>
                                    <p className='font-poppins font-medium text-lg leading-none tracking-[0.05em] capitalize'>Play before you pick up the kids</p>
                                </div>
                                <div className='flex items-center gap-[7px] '>
                                    <span className='bg-[#5EF700] w-2.5 h-2.5 rounded-full'></span>
                                    <p className='font-poppins font-medium text-lg leading-none tracking-[0.05em] capitalize'>play after school</p>
                                </div>
                                <div className='flex items-center gap-[7px]'>
                                    <span className='bg-[#5EF700] w-2.5 h-2.5 rounded-full'></span>
                                    <p className='font-poppins font-medium text-lg leading-none tracking-[0.05em] capitalize'>play at dinner</p>
                                </div>
                                <div className='flex items-center gap-[7px]'>
                                    <span className='bg-[#5EF700] w-2.5 h-2.5 rounded-full'></span>
                                    <p className='font-poppins font-medium text-lg leading-none tracking-[0.05em] capitalize'>play at twilight</p>
                                </div>
                            </div>
                        </div>
                        <div className="pt-[19px]" data-aos="fade-right">
                            <Link href={'/#searchBooking'}>
                                <button className='bg-[#F6F600] border border-[#000000] py-[10.5px] px-6 font-outfit font-bold text-sm leading-none capitalize text-black'>
                                    Book Your Time
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className='xl:col-span-8 lg:col-span-6 col-span-12 max-lg:h-[500px] max-sm:h-[800px]'>
                        <div className='w-full h-full grid sm:grid-cols-2 gap-[14.31px]'>
                            <div className='w-full h-full flex flex-col gap-[14.31px]'>
                                <div className='w-full h-[52%] relative rounded-[15px] overflow-hidden shadow-[4px_4px_50px_50px_#00000014]' data-aos="zoom-in" data-aos-delay="200">
                                    <Image fill className='object-cover object-center' alt='familyplaying.png' src={'/image/morning.avif'} />
                                </div>
                                <div className='w-full h-[48%] relative rounded-[15px] overflow-hidden '>
                                    <Image fill className='object-cover object-center' alt='familyDinner.png' src={'/image/familyDinner.jpg'} data-aos="zoom-in" data-aos-delay="300"/>
                                </div>
                            </div>
                            <div className='w-full h-full flex flex-col gap-[14.31px]'>
                                <div className='w-full h-[48%] relative rounded-[15px] overflow-hidden '>
                                    <Image fill className='object-cover object-center' alt='familyplayingCelebrate.png' src={'/image/evening.jpg'} data-aos="zoom-in" data-aos-delay="400"/>
                                </div>
                                <div className='w-full h-[52%] relative rounded-[15px] overflow-hidden '>
                                    <Image fill className='object-cover object-center' alt='familyplaying2.png' src={'/image/golfcourse.jpg'} data-aos="zoom-in" data-aos-delay="500"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Playanytime