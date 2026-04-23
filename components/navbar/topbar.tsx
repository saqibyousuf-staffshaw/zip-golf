import React from 'react'
import Container from '../container/container'
import { Mail, Phone } from 'lucide-react'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { IoMail } from "react-icons/io5";

type Props = {}

function Topbar({ }: Props) {
  return (
    <div className='bg-[#5EF700] py-3'>
      <Container>
        <div className='flex justify-between max-sm:flex-col max-sm:gap-1 max-sm:items-center'>
          <div className='flex items-center gap-1.5'>
            <a href='tel:+1234567890' className='font-poppins font-medium text-sm leading-[22px] tracking-[0.05em] capitalize flex items-center gap-1 pr-2'>
              <Phone fill='#000' size={17} />
              +123-4567-890
            </a>
            <a href='mailto:zipgolf.mall@info.com' className='font-poppins font-medium text-sm leading-[22px] tracking-[0.05em] flex items-center gap-1'>
              <IoMail size={17} />
              zipgolf.mall@info.com
            </a>
          </div>
          <div className='flex items-center gap-2.5'>
            <button className='border border-black flex items-center justify-center rounded-full h-[27px] aspect-square'>
              <FaFacebookF size={12} />
            </button>
            <button className='border border-black flex items-center justify-center rounded-full h-[27px] aspect-square'>
              <FaTwitter size={12} />
            </button>
            <button className='border border-black flex items-center justify-center rounded-full h-[27px] aspect-square'>
              <FaInstagram size={12} />
            </button>
            <button className='border border-black flex items-center justify-center rounded-full h-[27px] aspect-square'>
              <FaLinkedin size={12} />
            </button>
            <button className='border border-black flex items-center justify-center rounded-full h-[27px] aspect-square'>
              <IoMail size={12} />
            </button>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Topbar