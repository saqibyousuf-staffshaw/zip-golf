import React from 'react'
import Container from '../container/container'
import Image from 'next/image'

type Props = {}

const steps = [
    {
        title: <>get your <span className='text-[#F6F600]'>zipcard</span></>,
        desc: <>sign up in seconds and unlock your <b>zipgolf</b> experience</>,
        image: '/image/zipgolfcard.png'
    },
    {
        title: <>play with <span className='text-[#F6F600]'>3 balls</span></>,
        desc: <>every shot includes <b>3</b> balls for faster play and more fun</>,
        image: '/image/3ballsimage.png'
    },
    {
        title: <>play <span className='text-[#F6F600]'>fast play smart</span></>,
        desc: <>enjoy quick rounds with <b>one-man carts</b> and modern gameplay</>,
        image: '/image/practice.jpg'
    },
    {
        title: <>earn & <span className='text-[#F6F600]'>redeen point</span></>,
        desc: <>collect <b>zippoints</b> and use them at any <b>zipgolf</b> location </>,
        image: '/image/points.png'
    }
]

function HowWork({ }: Props) {
    return (
        <div className='py-[90px] relative'>
            <Image fill src={'/image/howWorkBg.png'} alt='howWorkBg.png' className='object-cover object-bottom' />
            <div className='bg-[#00000080] absolute w-full h-full top-0 left-0' />
            <Container className='relative'>
                <div>
                    <div className='max-w-[649px] grid gap-3 relative mb-[100px]'>
                        <Image width={345.77} height={260.29} src={'/image/logoWithFace.png'} alt='subheading-logo' className='object-contain absolute lg:left-[100%] left-[85%] top-[50%] -translate-y-1/2 max-lg:w-[200px] max-lg:h-[200px] max-sm:hidden' />
                        <h2 className='font-gotham relative font-bold text-[50px] leading-[40px] uppercase text-white'>how <span className='text-[#F6F600]'>zipgolf</span> works</h2>
                        <p className='text-white relative font-poppins font-normal text-base  tracking-[0.05em] capitalize' >Lorem Ipsum is <span className='font-grobold  text-[#5EF700]'> simply dummy </span> text of the printing and typesetting industry. Lorem Ipsum has been the industry's Lorem Ipsum is <span className='font-grobold  text-[#5EF700]'> simply dummy</span> text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
                    </div>
                    <div className='w-full grid xl:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-[18px]'>
                        {steps?.map((a, i) => {
                            return (
                                <div className='flex flex-col h-full' key={i}>
                                    <div className='flex items-center z-10 relative '>
                                        <div className='font-gotham font-bold text-[23px] leading-[68px] tracking-[0.05em] capitalize text-[#F6F600] w-[74px] h-[74px] rounded-full border border-[#5EF700] bg-[#FFFFFF33] flex items-center justify-center backdrop-blur-[20px]'>
                                            Z{i+1}
                                        </div>
                                        <div className='font-poppins font-normal text-[20px] leading-none tracking-[0.05em] uppercase text-white pt-[10px] pl-[21px] pb-[18px] pr-[61px] relative -ml-2'>
                                            <div className='absolute w-full p-[1px] bg-[linear-gradient(90deg,#F6F600,rgba(246,246,0,0))] left-0 top-0' />
                                            STEP <span className='text-[#F6F600]'>{i+1}</span>
                                        </div>
                                    </div>
                                    <div className='w-full border-[2px] border-[#5EF700] rounded-[15px] bg-[#FFFFFF1A]  backdrop-blur-[20px] pt-11 px-7 pb-6 flex flex-col gap-[12px] -mt-2 z-0 flex-1'>
                                        <div>
                                            <h5 className='font-gotham whitespace-nowrap font-bold text-[23px] leading-[68px] tracking-[0.05em] capitalize text-white'>{a.title}</h5>
                                            <p className='font-poppins font-medium text-lg leading-[22px] tracking-[0.05em] capitalize text-white'>{a.desc}
                                            </p>
                                        </div>
                                        <div className='w-full'>
                                            <Image width={243} height={177} src={a.image} alt='zipgolfcard.png' className='w-full aspect-[243/177.29] object-contain object-center' />
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default HowWork