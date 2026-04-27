import React from 'react'
import Container from '../container/container'
import Image from 'next/image'

type Props = {}

function Location({ }: Props) {
    return (
        <div className='pt-[97]' id="location">
            <div className='w-full'>
                <div className='flex flex-col items-center'>
                    <div className='grid gap-2 flex flex-col items-center gap-[7px] max-w-[777.78px]'>
                        <div className='relative w-fit mx-auto'>
                            <Image width={128.63} height={96.83} alt='logo' src={'/image/logoWithFace.png'} className='object-bottom object-contain  -rotate-[11.13deg] absolute right-full -bottom-4  scale-x-[-1]' data-aos="zoom-in" data-aos-delay="300"/>
                            <h2 className='font-gotham font-bold text-[40px] leading-[40px] text-center uppercase' data-aos="fade-in">FIND A zipgolf <span className='bg-[linear-gradient(90deg,#000000_-19.52%,#5EF700_100%)] bg-clip-text text-transparent'>LOCATION</span> </h2>
                        </div>
                        <p className='font-poppins font-medium text-lg leading-[22px] tracking-[0.05em] text-center capitalize' data-aos="fade-in">lorem Ipsum is <span className='font-grobold text-lg leading-[22px] tracking-[0.05em] text-center capitalize text-[#399401]'>simply dummy</span> text of the printing.Lorem Ipsum is <span className='font-grobold text-lg leading-[22px] tracking-[0.05em] text-center capitalize text-[#399401]'>simply dummy</span> text of the printing.</p>
                    </div>
                </div>
                <div className='w-full grid grid-cols-12 lg:aspect-[1440/634.84] mt-[60px]'>
                    <div className='xl:col-span-9 lg:col-span-8 col-span-12 max-lg:aspect-[1/0.5] max-lg:order-2'>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8710358.06622524!2d-89.09471235984377!3d27.504173413636625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c1766591562abf%3A0xf72e13d35bc74ed0!2sFlorida%2C%20USA!5e1!3m2!1sen!2s!4v1777322747868!5m2!1sen!2s"
                            width="600"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className='w-full h-full'
                        />

                    </div>
                    <div className='xl:col-span-3 lg:col-span-4 col-span-12 xl:pt-6 pt-3 max-lg:pb-3 xl:pl-10 pl-5 pr-5 bg-[#E5FFD5]  overflow-auto h-full scrollbarHide max-lg:order-1'>
                        <div className='w-full' >
                            <h4 className='font-gotham font-bold text-[30px] leading-[50px] uppercase mb-[21px]' data-aos="fade-in">ALL LOCATION</h4>
                            <div className='w-full max-lg:flex max-lg:gap-3 max-lg:overflow-auto'>
                                {new Array(6).fill("").map((_, i) => (
                                    <div className='lg:w-full max-lg:w-[40%] max-lg:min-w-[40%] max-sm:w-[80%] max-sm:min-w-[80%]' key={i} data-aos="fade-in">
                                        <div className='w-full grid gap-[13px]'>
                                            <Image width={401.51} height={219.04} alt='locationImage' src={'/image/locationImage.png'} className='aspect-[401.57/219.04] w-full' />
                                            <div className='grid gap-0.5'>
                                                <h6 className='font-gotham font-bold text-lg leading-none tracking-[0.05em] capitalize'>NEW MEXICO</h6>
                                                <p className='font-poppins font-medium text-sm leading-[22px] tracking-[0.05em] capitalize'>USA . ZIPGOLF CULD</p>
                                                <p className='font-poppins font-medium text-base leading-[22px] tracking-[0.05em] capitalize'>lorem Ipsum is <span className='font-grobold text-[#399401]'>simply dummy</span> text of the printing.Lorem Ipsum is <span className='font-grobold text-[#399401]'>simply dummy</span> text of the printing.</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Location