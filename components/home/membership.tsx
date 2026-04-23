import React from 'react'
import Container from '../container/container'
import Image from 'next/image'

type Props = {}

function Membership({ }: Props) {
    return (
        <div className='pt-[106px]'>
            <Container>
                <div className='flex flex-col items-center'>
                    <div className='grid gap-2 flex flex-col items-center gap-[7px] max-w-[777.78px]'>
                        <h2 className='font-gotham font-bold text-[40px] leading-[40px] text-center uppercase'>Join the zopgolf <span className='bg-[linear-gradient(90deg,#000000_-19.52%,#5EF700_100%)] bg-clip-text text-transparent'>membership</span> </h2>
                        <p className='font-poppins font-medium text-lg leading-[22px] tracking-[0.05em] text-center capitalize'>lorem Ipsum is <span className='font-grobold text-lg leading-[22px] tracking-[0.05em] text-center capitalize text-[#399401]'>simply dummy</span> text of the printing.Lorem Ipsum is <span className='font-grobold text-lg leading-[22px] tracking-[0.05em] text-center capitalize text-[#399401]'>simply dummy</span> text of the printing.</p>
                    </div>
                    <div className='w-full'>
                        <div className='w-full flex lg:justify-between justify-center items-center max-lg:flex-wrap xl:gap-7 lg:gap-0 gap-x-3'>
                            <div className='xl:max-w-[259px] lg:max-w-[200px]  lg:w-full w-[40%] bg-[#5EF70033] xl:py-[37px] py-6 xl:px-2 p-1 flex flex-col items-center gap-3 rounded-[20px] max-lg:order-2'>
                                <Image width={67} height={68.6} className='max-xl:w-12 max-xl:h-12' src={'/image/point.svg'} alt='point.svg' />
                                <div className='grid gap-[7px]'>
                                    <h5 className='font-gotham font-bold text-lg leading-none tracking-[0.05em] text-center capitalize'>earn <br />
                                        zippoints</h5>
                                    <p className='font-poppins font-medium text-base leading-[22px] tracking-[0.05em] text-center capitalize'>Lorem Ipsum is <span className='font-grobold  text-[#399401]'>simply <br /> dummy</span> text of the
                                        <br /> printing.</p>
                                </div>
                            </div>
                            <div className='relative max-lg:order-1 max-lg:w-full'>
                                <Image width={714} height={452} src={'/image/membershipcard.png'} alt='point.svg' />
                                <div className='absolute -bottom-4 left-0 max-lg:hidden'>
                                    <Image width={75} height={75} alt='arrow' src={"/image/arrow.svg"} className='' />
                                </div>
                                <div className='absolute -bottom-4 right-0 scale-x-[-1] max-lg:hidden'>
                                    <Image width={75} height={75} alt='arrow' src={"/image/arrow.svg"} className='' />
                                </div>
                            </div>
                            <div className='xl:max-w-[259px] lg:max-w-[200px]  lg:w-full w-[40%] bg-[#5EF70033] xl:py-[37px] py-6 xl:px-2 p-1 flex flex-col items-center gap-3 rounded-[20px] relative max-lg:order-3'>
                                <Image width={271} height={204} alt='logo' src={'/image/logoWithFace.png'} className='object-bottom object-contain -ml-[15px] rotate-[11.13deg] absolute bottom-[90%] left-5 max-xl:w-[200px] max-xl:h-auto max-lg:hidden' />
                                <Image width={67} height={68.6} className='max-xl:w-12 max-xl:h-12' src={'/image/redeem.svg'} alt='point.svg' />
                                <div className='grid gap-[7px]'>
                                    <h5 className='font-gotham font-bold text-lg leading-none tracking-[0.05em] text-center capitalize'>redeem <br /> anywhere</h5>
                                    <p className='font-poppins font-medium text-base leading-[22px] tracking-[0.05em] text-center capitalize'>Lorem Ipsum is <span className='font-grobold  text-[#399401]'>simply <br /> dummy</span> text of the
                                        <br /> printing.</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-center items-center max-sm:flex-col gap-[17px] max-lg:mt-10'>
                            <button className='bg-[#F6F600] min-w-[199px] border border-[#000000] py-[10.5px] px-6 font-outfit font-bold text-base leading-none capitalize text-black'>
                                Get Your ZIPCARD
                            </button>
                            <button className='bg-transparent min-w-[199px] border border-[#000000] py-[10.5px] px-6 font-outfit font-bold text-base leading-none capitalize text-black'>
                                VIEW ALL LOCATION
                            </button>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Membership