import React from 'react'
import Container from '../container/container'
import Image from 'next/image'
import Link from 'next/link'
import { FacebookIcon, InstagramIcon, LinkedInIcon, XIcon, YouTubeIcon } from '../icons/icon'

type Props = {}

function Footer({ }: Props) {
    return (
        <div className='relative py-20'>
            <Image fill src={'/image/footerBg-new.jpg'} alt='footerBg' className='object-cover object-center' />
            <div className='bg-[#00000090] absolute w-full h-full top-0 left-0' />
            <Image width={632} height={514.57} src={'/image/background-logo.png'} alt='footerBg' className='object-contain object-center absolute top-1/2 left-1/2 -translate-1/2 max-sm:w-full max-sm:h-auto' />
            <Container className='relative'>
                <div className='w-full '>
                    <div className='grid sm:grid-cols-12 grid-cols-2 w-full gap-10'>
                        <div className='sm:col-span-6 col-span-2'>
                            <div className='sm:max-w-[500px] max-sm:max-w-full w-full grid gap-6'>
                                <Image width={150} height={100} alt='logo' src={'/image/logo-new.png'} className='object-contain'/>
                                {/* <p className='font-poppins font-normal text-sm leading-[160%] text-white'>Lorem Ipsum is <span className='font-grobold text-[#5EF700]'>simply dummy</span> text of the printing and typesetting industry.</p> */}
                                <p className='font-poppins font-normal text-sm leading-[160%] text-white'>
                                    {/* America's FIRST <span className='font-grobold text-[#5EF700]'>Golf</span> Franchise TM <br/> */}
                                    <span className='font-grobold text-[#5EF700]'>9 holes</span> in less than an hour ™<br/>
                                    We're ahead of the <span className='font-grobold text-[#5EF700]'>game</span> ™
                                </p>
                                <div className='grid gap-3 max-sm:w-full'>
                                    <div className='flex items-center gap-4 max-sm:flex-col'>
                                        <input placeholder='Your email' className='border border-[#FFFFFF26] rounded-[12px] py-2 px-3 font-poppins font-normal text-sm leading-[160%] text-white placeholder:text-[#FFFFFF99] flex-1 max-sm:w-full' />
                                        <button className='bg-[linear-gradient(111.06deg,#F6F600_8.22%,#5EF700_91.78%)] py-2.5 px-6 rounded-[12px] font-poppins font-bold text-base leading-[160%] max-sm:w-full'>
                                            Subscribe
                                        </button>
                                    </div>
                                    <p className='font-poppins font-normal text-xs leading-[160%] text-white'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>
                            </div>
                        </div>
                        <div className='sm:col-span-2 col-span-1'>
                            <h5 className='font-poppins font-bold sm:text-lg text-base leading-[160%] text-[#5EF700] mb-4'>Pages</h5>
                            <div className='flex flex-col'>
                                <Link href={"#"} className='font-poppins font-normal text-sm leading-[160%] py-2 text-white'>Home</Link>
                                <Link href={"#"} className='font-poppins font-normal text-sm leading-[160%] py-2 text-white'>about ZIPGOLF</Link>
                                <Link href={"#"} className='font-poppins font-normal text-sm leading-[160%] py-2 text-white'>how to play</Link>
                                <Link href={"#"} className='font-poppins font-normal text-sm leading-[160%] py-2 text-white'>shop</Link>
                                <Link href={"#"} className='font-poppins font-normal text-sm leading-[160%] py-2 text-white'>Franchise</Link>
                                <Link href={"#"} className='font-poppins font-normal text-sm leading-[160%] py-2 text-white'>Zipcard</Link>
                                <Link href={"#"} className='font-poppins font-normal text-sm leading-[160%] py-2 text-white'>Blog</Link>
                            </div>
                        </div>
                        <div className='sm:col-span-2 col-span-1'>
                            <h5 className='font-poppins font-bold sm:text-lg text-base leading-[160%] text-[#5EF700] mb-4'>Visit us</h5>
                            <div className='flex flex-col'>
                                <Link href={"#"} className='font-poppins font-normal text-sm leading-[160%] py-2 text-white'>Locations</Link>
                                <Link href={"#"} className='font-poppins font-normal text-sm leading-[160%] py-2 text-white'>Hours</Link>
                                <Link href={"#"} className='font-poppins font-normal text-sm leading-[160%] py-2 text-white'>Contact us</Link>

                            </div>
                        </div>
                        <div className='sm:col-span-2 col-span-2'>
                            <h5 className='font-poppins font-bold sm:text-lg text-base leading-[160%] text-[#5EF700] mb-4'>Follow us</h5>
                            <div className='flex flex-col'>
                                <a href={"#"} className='font-poppins font-normal text-sm leading-[160%] py-2 text-white flex items-center gap-3'>
                                    <FacebookIcon /> Facebook
                                </a>
                                <a href={"#"} className='font-poppins font-normal text-sm leading-[160%] py-2 text-white flex items-center gap-3'>
                                    <InstagramIcon /> Instagram
                                </a>
                                <a href={"#"} className='font-poppins font-normal text-sm leading-[160%] py-2 text-white flex items-center gap-3'>
                                    <XIcon /> X
                                </a>
                                <a href={"#"} className='font-poppins font-normal text-sm leading-[160%] py-2 text-white flex items-center gap-3'>
                                    <LinkedInIcon /> LinkedIn
                                </a>
                                <a href={"#"} className='font-poppins font-normal text-sm leading-[160%] py-2 text-white flex items-center gap-3'>
                                    <YouTubeIcon /> YouTube
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='border-t border-t-[#FFFFFF26] w-full flex justify-between pt-8 max-sm:flex-col'>
                        <div>
                            <p className='font-poppins font-normal text-sm leading-[160%] text-white'>© 2026 . All rights reserved.</p>
                        </div>
                        <div className='flex items-center gap-1'>
                            <Link href={'#'} className='font-poppins font-normal text-sm leading-[160%] text-white'>Privacy policy</Link>
                            <Link href={'#'} className='font-poppins font-normal text-sm leading-[160%] text-white'>Terms of service</Link>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Footer


FacebookIcon
InstagramIcon
LinkedInIcon
YouTubeIcon