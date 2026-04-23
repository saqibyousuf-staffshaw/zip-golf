"use client"
import React, { useState } from 'react'
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
    const routes = [
        {
            name: "home",
            dropdown: false,

        },
        {
            name: "about zipgolf",
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
    return (
        <div className='bg-[#000000] sticky top-0 z-50 w-full'>
            <Container>
                <div className='flex justify-between items-center'>
                    <div>
                        <Image width={114.04} height={83.89} alt='logo' src={'/image/logo.png'} />
                    </div>
                    <div className='flex items-center gap-7'>
                        <div className='xl:flex items-center hidden'>
                            {routes.map((a, i) => (
                                <>
                                    {i > 0 ?
                                        <Dot color='#5EF700' />
                                        : null}
                                    <Link href={"#"} className='font-poppins font-medium text-sm leading-none capitalize text-white'>
                                        {a.name}
                                    </Link>
                                </>
                            ))}
                        </div>
                        <div className='flex items-center gap-2.5'>
                            <div className='flex items-center gap-[5px]'>
                                <button className='xl:hidden' onClick={() => {
                                    setDrawer(true)
                                }}>
                                    <RxHamburgerMenu color='white' size={24} />
                                </button>

                                <button>
                                    <FiSearch color='white' size={24} />
                                </button>
                                <button>
                                    <HiOutlineUserCircle color='white' size={24} />
                                </button>
                                <button>
                                    <MdOutlineShoppingCart color='white' size={24} />
                                </button>
                            </div>
                            <button className='bg-[#F6F600] font-outfit font-bold sm:text-sm text-xs leading-none capitalize py-2.5 sm:px-6 px-3'>
                                play zipgolf
                            </button>
                        </div>
                    </div>
                </div>
            </Container>
            <Sheet open={drawer} onOpenChange={setDrawer}>
                <SheetContent className='max-w-[400px] w-[90%] bg-black border-none' side='left'>
                    <SheetHeader className='flex flex-col justify-between h-full'>
                        <div>
                            <div>
                                <Image width={114.04} height={83.89} alt='logo' src={'/image/logo.png'} />
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
                            play zipgolf
                        </button>
                    </SheetHeader>
                </SheetContent>
            </Sheet>
        </div>
    )
}

export default Navbar