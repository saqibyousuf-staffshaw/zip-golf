import Image from 'next/image'
import React from 'react'
import { Marquee } from '../shadcn-space/animations/marquee'

type Props = {}

const features = [
  {
    icon: "/image/clock.svg",
    name: <>play in under <span className="text-[#5EF700]">1 hour</span></>,
    desc: "get in a quick round of golf anytime."
  },
  {
    icon: "/image/balls.svg",
    name: <>always <span className="text-[#5EF700]">3 balls</span></>,
    desc: "play and practice with 3 balls on every shot."
  },
  {
    icon: "/image/flags.svg",
    name: <><span className="text-[#5EF700]">3 flag</span> greens</>,
    desc: "aim at 3 flags on every green for higher scores."
  },
  {
    icon: "/image/clock.svg",
    name: <>one-man <span className="text-[#5EF700]">fast carts</span></>,
    desc: "zip around the course in speedy single-rider carts"
  },
  {
    icon: "/image/simulator.svg",
    name: <><span className="text-[#5EF700]">simulator</span> golf</>,
    desc: "practice anytime in realistic virtual golfing."
  },
  {
    icon: "/image/clock.svg",
    name: <>mini golf for <span className="text-[#5EF700]">family</span></>,
    desc: "enjoy fun, family-friendly mini golf courses."
  },
];

const FeaturesCard = ({ data }: any) => {
    return (
        <div className='w-full flex'>
            <div className='bg-[#61FF001A] backdrop-blur-[8px] flex items-center py-3 px-6 gap-2.5 rounded-[12px]'>
                <div className='w-[91px] h-[91px] aspect-square'>
                    <Image width={91} height={91} src={data.icon} alt='clock.svg' />
                </div>
                <div>
                    <h5 className='font-gotham font-bold text-[30px] leading-[40px] uppercase text-white'>{data.name}</h5>
                    <p className='font-poppins font-medium text-lg leading-[22px] tracking-[0.05em] capitalize text-white'>{data.desc}</p>
                </div>
            </div>
        </div>
    )
}

function WhyZipgolf({ }: Props) {
    return (
        <div className='pt-[30px] pb-[74px] relative'>
            <Image fill src={'/image/whyBg.png'} alt='whybg' className='object-cover object-center' />
            <div className='absolute top-0 left-0 w-full h-full bg-black opacity-60' />
            <div className='relative w-full'>
                <div className='flex items-end justify-center w-full'>
                    <Image width={29.42} height={59.35} src={'/image/flashIcon.svg'} alt='icon' className='mr-[22px]' />
                    <h2 className='font-gotham font-bold text-[40px] leading-[40px] text-center uppercase text-white'>why <span className='text-[#5EF700]'>zipgolf</span></h2>
                    <Image width={87} height={65.5} alt='logo' src={'/image/subheading-logo.png'} className='object-bottom object-contain -ml-[15px]' />
                </div>
                <div className="relative flex w-full flex-col items-center justify-center overflow-hidden pt-[37px] gap-[37px]">

                    <Marquee pauseOnHover className="[--duration:50s] !gap-[30px]">
                        {features.slice(0,3).map((data, i) => (
                            <FeaturesCard key={i} data={data}/>
                        ))}
                    </Marquee>
                    <Marquee reverse pauseOnHover className="[--duration:50s] !gap-[30px]">
                        {features.slice(2,3).map((data, i) => (
                            <FeaturesCard key={i} data={data}/>
                        ))}
                    </Marquee>
                </div>
            </div>
        </div>
    )
}

export default WhyZipgolf