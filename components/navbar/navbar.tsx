"use client"
import React, { useEffect, useState } from 'react'
import Container from '../container/container'
import Image from 'next/image'
import Link from 'next/link'
import { Dot } from 'lucide-react'
import { FiSearch } from 'react-icons/fi'
import { HiOutlineUserCircle } from 'react-icons/hi'
import { MdOutlineShoppingCart } from 'react-icons/md'
import { RxHamburgerMenu } from 'react-icons/rx'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
type Props = {}

function Navbar({ }: Props) {
    const [drawer, setDrawer] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const routes = [
        {
            name: "home",
            dropdown: false,

        },
        {
            name: "about ZIPGOLF",
            dropdown: false,

        },
        {
            name: "how to play",
            dropdown: true,

        },
        {
            name: "locations",
            dropdown: false,

        },
        {
            name: "shop",
            dropdown: false,

        },
        {
            name: "franchise",
            dropdown: false,

        },
        {
            name: "zipcard",
            dropdown: false,

        },
        {
            name: "blog",
            dropdown: false,

        },
        {
            name: "contact us",
            dropdown: false,

        }
    ]
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50) // adjust threshold if needed
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])
    return (
        <div className={`sticky top-0 z-50 w-full transition-colors duration-300 ${scrolled ? "bg-white" : "bg-black"
            }`}>
            <Container>
                <div className='flex justify-between items-center'>
                    <div>
                        <Image width={114.04} height={83.89} alt='logo' src={'/image/logo-new.png'} />
                    </div>
                    <div className='flex items-center gap-7'>
                        <div className='xl:flex items-center hidden'>
                            {routes.map((a, i) => (
                                <>
                                    {i > 0 ?
                                        <Dot color='#5EF700' />
                                        : null}
                                    <Link href={"#"} className={`font-poppins font-medium text-sm leading-none capitalize ${scrolled ? "text-black" : "text-white"
                                        }`}>
                                        {a.name}
                                    </Link>
                                </>
                            ))}
                        </div>
                        <div className='flex items-center gap-2.5'>
                            <div className='flex items-center gap-[5px]'>
                                <button className={`${scrolled ? "text-black" : "text-white"} xl:hidden`} onClick={() => {
                                    setDrawer(true)
                                }}>
                                    <RxHamburgerMenu  size={24} className={`${scrolled ? "!text-black" : "text-white"}`}/>
                                </button>

                                <button >
                                    <FiSearch color='white' size={24} className={`${scrolled ? "!text-black" : "text-white"}`} />
                                </button>
                                <button >
                                    <HiOutlineUserCircle color='white' size={24} className={`${scrolled ? "!text-black" : "text-white"}`}/>
                                </button>
                                <button>
                                    <Image height={40} width={40} alt='zipgolf' src={'/image/logo.png'} />
                                    {/* <MdOutlineShoppingCart color='white' size={24} /> */}
                                </button>
                            </div>
                            <Link href="/#searchBooking">
                                <button className='bg-[#F6F600] font-outfit font-bold sm:text-sm text-xs leading-none capitalize py-2.5 sm:px-6 px-3 cursor-pointer'>
                                    play ZIPGOLF
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
            <Sheet open={drawer} onOpenChange={setDrawer}>
                <SheetContent className='max-w-[400px] w-[90%] bg-black border-none' side='left'>
                    <SheetHeader className='flex flex-col justify-between h-full'>
                        <div>
                            <div>
                                <Image width={114.04} height={83.89} alt='logo' src={'/image/logo-new.png'} />
                            </div>
                            <div className='flex flex-col gap-6 mt-10'>
                                {routes.map((a, i) => (
                                    <>
                                        <Link href={"#"} className='font-poppins font-medium text-base leading-none capitalize text-white'>
                                            {a.name}
                                        </Link>
                                    </>
                                ))}
                            </div>
                        </div>
                        <button className='bg-[#F6F600] font-outfit font-bold text-sm leading-none capitalize py-2.5 px-6'>
                            play ZIPGOLF
                        </button>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </div>
    )
}

export default Navbar