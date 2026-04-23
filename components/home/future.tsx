import React from 'react'
import Container from '../container/container'
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRightLong } from 'react-icons/fa6'

type Props = {}

function Future({ }: Props) {
  return (
    <div className='w-full pt-20 pb-[123px]'>
      <Container>
        <div className='w-full'>
          <div className='flex flex-col items-center gap-2'>
            <div className='flex items-end'>
              <h4 className='font-gotham font-bold text-[25px] leading-none text-center uppercase bg-[linear-gradient(to_bottom,#5EF700_-5.56%,#000000_122.45%)] bg-clip-text text-transparent drop-shadow-[2px_2px_0px_#00000040] mb-[10px]'>what is zipgolf</h4>
              <Image width={87} height={65.5} alt='logo' src={'/image/subheading-logo.png'} className='object-bottom object-contain -ml-[15px]' />
            </div>
            <h2 className='font-gotham font-bold text-[40px] leading-[40px] text-center uppercase'>the future of <span className='bg-[linear-gradient(90deg,#000000_-19.52%,#5EF700_100%)] bg-clip-text text-transparent'>fast golf</span> </h2>
          </div>
          <div className='w-full relative flex flex-col items-center'>
            <Image width={655} height={473} alt='logo' src={'/image/background-logo.png'} className='object-contain object-top absolute top-0 aspect-square ' />
            <div className='grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5 pt-[50px]'>
              <div className='w-full aspect-[304.18/407.39] relative flex flex-col justify-end'>
                <Image fill alt="3balls" src={'/image/3balls.jpg'} />
                <div className='absolute top-0 left-0 w-full h-full bg-black opacity-40' />
                <div className='relative px-[19px] py-[23px] grid gap-3'>
                  <h4 className='font-gotham font-bold text-[30px] leading-[40px]  uppercase text-[#5EF700]'>3 balls</h4>
                  <p className='text-white font-poppins font-medium text-lg leading-[22px] tracking-[0.05em] capitalize'>
                    Lorem Ipsum is <span className='font-grobold  text-[#5EF700] text-lg leading-[22px] tracking-[0.05em] capitalize'>simply dummy</span> text of the printing and typesetting industry.
                  </p>
                  <Link href={"#"} className='font-outfit font-bold text-sm leading-none capitalize text-[#5EF700] flex items-center gap-[5px]'>
                    Read More <FaArrowRightLong size={13} />
                  </Link>
                </div>
              </div>
              <div className='w-full aspect-[304.18/407.39] relative flex flex-col justify-start'>
                <Image fill alt="fastplay" src={'/image/freeplay.jpg'} />
                <div className='absolute top-0 left-0 w-full h-full bg-black opacity-40' />
                <div className='relative px-[19px] py-[23px] grid gap-3'>
                  <h4 className='font-gotham font-bold text-[30px] leading-[40px]  uppercase text-[#5EF700]'>Fast Play</h4>
                  <p className='text-white font-poppins font-medium text-lg leading-[22px] tracking-[0.05em] capitalize'>
                    Lorem Ipsum is <span className='font-grobold  text-[#5EF700] text-lg leading-[22px] tracking-[0.05em] capitalize'>simply dummy</span> text of the printing and typesetting industry.
                  </p>
                  <Link href={"#"} className='font-outfit font-bold text-sm leading-none capitalize text-[#5EF700] flex items-center gap-[5px]'>
                    Read More <FaArrowRightLong size={13} />
                  </Link>
                </div>
              </div>
              <div className='w-full aspect-[304.18/407.39] relative flex flex-col justify-end'>
                <Image fill alt="familygolf" src={'/image/familygolf.jpg'} />
                <div className='absolute top-0 left-0 w-full h-full bg-black opacity-40' />
                <div className='relative px-[19px] py-[23px] grid gap-3'>
                  <h4 className='font-gotham font-bold text-[30px] leading-[40px]  uppercase text-[#5EF700]'>Family golf</h4>
                  <p className='text-white font-poppins font-medium text-lg leading-[22px] tracking-[0.05em] capitalize'>
                    Lorem Ipsum is <span className='font-grobold  text-[#5EF700] text-lg leading-[22px] tracking-[0.05em] capitalize'>simply dummy</span> text of the printing and typesetting industry.
                  </p>
                  <Link href={"#"} className='font-outfit font-bold text-sm leading-none capitalize text-[#5EF700] flex items-center gap-[5px]'>
                    Read More <FaArrowRightLong size={13} />
                  </Link>
                </div>
              </div>
              <div className='w-full aspect-[304.18/407.39] relative flex flex-col justify-start'>
                <Image fill alt="modernpractice" src={'/image/modernpractice.jpg'} />
                <div className='absolute top-0 left-0 w-full h-full bg-black opacity-40' />
                <div className='relative px-[19px] py-[23px] grid gap-3'>
                  <h4 className='font-gotham font-bold text-[30px] leading-[40px]  uppercase text-[#5EF700]'>Modren practice</h4>
                  <p className='text-white font-poppins font-medium text-lg leading-[22px] tracking-[0.05em] capitalize'>
                    Lorem Ipsum is <span className='font-grobold  text-[#5EF700] text-lg leading-[22px] tracking-[0.05em] capitalize'>simply dummy</span> text of the printing and typesetting industry.
                  </p>
                  <Link href={"#"} className='font-outfit font-bold text-sm leading-none capitalize text-[#5EF700] flex items-center gap-[5px]'>
                    Read More <FaArrowRightLong size={13} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Future