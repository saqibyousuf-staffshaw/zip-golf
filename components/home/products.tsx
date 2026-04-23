import React from 'react'
import Container from '../container/container'
import Image from 'next/image'
import { Star } from 'lucide-react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

type Props = {}

const products = [
    {
        Image: "/image/GolfChase14Bag.png",
        name: "Golf Chase 14 Bag",
        category: "Golf bag",
        rating: 4,
        oldPrice: "230.00",
        newPrice: "200.00"
    },
    {
        Image: "/image/golfSet.png",
        name: "Golf Club Set",
        category: "Golf Clubs Complete Sets",
        rating: 4,
        oldPrice: "230.00",
        newPrice: "200.00"
    },
    {
        Image: "/image/golfclub.png",
        name: "Golf Club",
        category: "Golf Club",
        rating: 4,
        oldPrice: "230.00",
        newPrice: "200.00"
    }
]

const ProdcutCard = ({ data, index }: any) => {
    return (
        <div className='w-full'>
            <div className='aspect-[337/306] w-full relative flex items-center justify-center pt-[32px] overflow-hidden'>
                {(index + 1) % 2 === 0 ?
                    <div className='w-full h-full productBg absolute rounded-[30px]' />
                    :
                    <div className='w-[196.12] h-[272.77] productCutBg absolute' />
                }
                <Image width={297} height={306} src={data.Image} alt='GolfChase14Bag.png' className='h-full w-full relative object-contain object-center' />
            </div>
            <div className='flex flex-col gap-1.5 items-center mt-[17px]'>
                <div>
                    <h5 className='font-gotham font-bold text-[20px] tracking-[0.05em] text-center capitalize'>{data.name}</h5>
                    <p className='font-poppins font-medium text-xs  tracking-[0.05em] text-center capitalize'>{data.category}</p>
                </div>
                <div className='flex justify-center gap-2'>
                    <Star size={20} fill='#FFD122' stroke='#FFD122' />
                    <Star size={20} fill='#FFD122' stroke='#FFD122' />
                    <Star size={20} fill='#FFD122' stroke='#FFD122' />
                    <Star size={20} fill='#FFD122' stroke='#FFD122' />
                    <Star size={20} fill="#939393" stroke="#939393" />
                </div>
                <div className='flex justify-center gap-0.5'>
                    <p className='font-poppins font-medium text-base leading-[22px] tracking-[0.05em] text-center capitalize text-[#939393]'>$230.00 </p>
                    <p className='font-poppins font-medium text-base leading-[22px] tracking-[0.05em] text-center capitalize text-[#000000]'>$200.00</p>
                </div>
            </div>
        </div>
    )
}

function Products({ }: Props) {
    return (
        <div className='pt-[110px] pb-[87px]'>
            <Container className='!max-w-[1147px]'>
                <div className='grid gap-2 flex flex-col items-center gap-[7px]'>
                    <h2 className='font-gotham font-bold text-[40px] leading-[40px] text-center uppercase'>our best <span className='bg-[linear-gradient(90deg,#000000_-19.52%,#5EF700_100%)] bg-clip-text text-transparent'>product</span> </h2>
                    <p className='font-poppins font-medium text-lg leading-[22px] tracking-[0.05em] text-center capitalize'>Lorem Ipsum is <span className='font-grobold text-lg leading-[22px] tracking-[0.05em] text-center capitalize text-[#399401]'>simply dummy</span> text of the printing.</p>
                </div>
                <div className='grid grid-cols-3 w-full gap-[55.55px] mt-[55px] max-sm:hidden'>
                    {products?.map((a, i) => (
                        <ProdcutCard key={i} data={a} index={i} />
                    ))}
                </div>
                <div className='w-full px-10 mt-[55px] sm:hidden'>
                <Carousel>
                    <CarouselContent>
                        {products?.map((a, i) => (
                            <CarouselItem key={i} className='gap-10'>
                                <ProdcutCard data={a} index={1} />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
                </div>
                <div className='mt-[45px] flex items-center justify-center'>
                    <button className='font-outfit font-bold text-base leading-none capitalize bg-[#F6F600] text-black border border-black py-4 px-9'>view all products</button>
                </div>
            </Container>
        </div>
    )
}

export default Products