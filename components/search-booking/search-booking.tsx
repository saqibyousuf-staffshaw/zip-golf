"use client"
import { Phone } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'
import { IoMail } from 'react-icons/io5'
import { format } from "date-fns"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Calendar as CalendarIcon } from "lucide-react"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { FaCaretDown } from 'react-icons/fa'
import { PiClockFill, PiMapPinFill } from 'react-icons/pi'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { GoClock } from 'react-icons/go'
type Props = {}

function SearchBooking({ }: Props) {
    const [date, setDate] = useState<Date>()
    // helper to generate 30-min intervals
    const generateTimeSlots = () => {
        const times = []
        for (let hour = 0; hour < 24; hour++) {
            for (let min of [0, 30]) {
                const h = hour % 12 === 0 ? 12 : hour % 12
                const ampm = hour < 12 ? "AM" : "PM"
                const formatted = `${h}:${min === 0 ? "00" : min} ${ampm}`
                times.push(formatted)
            }
        }
        return times
    }
    const timeSlots = generateTimeSlots()
    return (
        <div className='max-w-[1149px] overflow-hidden w-full mx-auto shadow-[5px_5px_55px_0px_#000000] lg:mt-[-45px] relative bg-white'>
            <div className='flex justify-between items-center max-sm:flex-col max-lg:gap-6'>
                <div className='relative lg:max-w-[513px] lg:w-full sm:basis-1/2 basis-full h-full'>
                    <div className='relative w-full lg:py-[35px] sm:px-[60px] max-sm:p-6'>
                        <div className='bg-[#5EF700] border-black sm:border-r-[28px] border-b-[10px] absolute lg:top-[-213.24px] lg:left-[-67.63px] top-1/2 left-1/2 max-lg:-translate-1/2  lg:w-[513px] w-full sm:h-[513px] h-full aspect-square lg:rotate-[20deg]' />
                        <Image fill alt='logo' src={'/image/logo-booking.png'} className='object-contain object-center absolute' />
                        <div className='sm:max-w-[280px] w-full relative'>
                            <div className='relative'>
                                <h5 className='font-gotham font-bold text-[30px] leading-none uppercase mb-[7px]'>game bookings</h5>
                                <div>
                                    <p className="font-poppins font-medium text-base leading-none uppercase mb-[7px]">Choose your time, book your game, and start the ZIPGOLF experience.</p>
                                    <div className='flex flex-col gap-1.5'>
                                        <a href='tel:+1234567890' className='font-poppins font-medium text-sm leading-[22px] tracking-[0.05em] capitalize flex items-center gap-1 pr-2'>
                                            <Phone fill='#000' size={12} />
                                            +123-4567-890
                                        </a>
                                        <a href='mailto:zipgolf.mall@info.com' className='font-poppins font-medium text-sm leading-[22px] tracking-[0.05em] flex items-center gap-1'>
                                            <IoMail size={12} />
                                            zipgolf.mall@info.com
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='relative flex-1 sm:py-[35px] sm:pr-[60px] max-lg:basis-1/2 max-sm:basis-full max-sm:w-full max-sm:p-6'>
                    <Image fill alt='logo' src={'/image/logo-booking.png'} className='object-contain object-center absolute' />
                    <div className='sm:max-w-[554px] w-full relative  '>
                        <div className='grid grid-cols-12 w-full gap-[23px] gap-y-[32px] flex-wrap'>
                            <div className='lg:col-span-6 col-span-12'>
                                <Select>
                                    <SelectTrigger className="w-full relative !py-[17px] !px-[13px] !h-[60px] border !border-black !rounded-none" >
                                        <div className='relative '>
                                            <div className='flex items-center gap-0.5'>
                                                <PiMapPinFill color='#000' size={20} />
                                                <SelectValue placeholder="Ground Locations" className='!text-black !placeholder:text-black !py-0 !px-0 font-poppins font-normal !text-base leading-none text-center data-[empty=true]:!text-black' />
                                            </div>
                                        </div>
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectItem value="light">Light</SelectItem>
                                            <SelectItem value="dark">Dark</SelectItem>
                                            <SelectItem value="system">System</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className='lg:col-span-6 col-span-12'>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button
                                            variant="outline"
                                            data-empty={!date}
                                            className="w-full relative !py-[17px] !px-[13px] !h-[60px] border !border-black !rounded-none bg-transparent flex justify-between !text-black !placeholder:text-black font-poppins font-normal !text-base leading-none text-center !data-[empty=true]:text-black"
                                        >
                                            <span className='flex items-center gap-1'>
                                                <CalendarIcon />
                                                {date ? format(date, "PPP") : <span> Select date</span>}
                                            </span>
                                            <FaCaretDown className="pointer-events-none size-4 text-black" />

                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0">
                                        <Calendar mode="single" selected={date} onSelect={setDate} />
                                    </PopoverContent>
                                </Popover>
                            </div>
                            <div className='lg:col-span-9 col-span-12'>
                                <Select onValueChange={(value) => console.log(value)}>
                                    <SelectTrigger className="w-full relative !py-[17px] !px-[13px] !h-[60px] border !border-black !rounded-none">
                                        <div className='flex items-center gap-0.5'>
                                            <GoClock color='#000' size={20} />
                                            <SelectValue
                                                placeholder="Select Time"
                                                className='!text-black font-poppins font-normal !text-base'
                                            />
                                        </div>
                                    </SelectTrigger>

                                    <SelectContent className="max-h-[300px] overflow-y-auto">
                                        {timeSlots.map((time, index) => (
                                            <SelectItem key={index} value={time}>
                                                {time}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className='lg:col-span-3 col-span-12'>
                                    <button className='font-outfit w-full font-bold text-lg leading-none capitalize bg-[#F6F600] h-[60px] text-black border-black border'>search now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchBooking