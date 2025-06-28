"use client"
import Link from 'next/link'
import React from 'react'
import { navLinks } from '../utils/constants'
import { usePathname } from 'next/navigation'

export default function LeftSideBar() {

  const path = usePathname()

  return (
    <section className='w-80 h-screen bg-primary text-secondary border-r border-gray-500'>
      <div className='w-full h-10'>

      </div>
      <ul className='w-full flex flex-col items-center gap-2'>
        {navLinks.map(btn => (
          <li key={btn.name} className='w-full h-10'>
            <Link
              className={`w-full h-full font-bold flex ${path == btn.link ? "bg-tertiary text-primary" : "text-tertiary"} items-center ps-7  hover:bg-tertiary hover:text-primary`}
              href={btn.link}
            >
              {btn.name}
            </Link>
          </li>
        ))}
      </ul>
      <Link
        href='/login'
        className=' border border-tertiary text-tertiary font-bold text-lg p-2 px-4 rounded-lg hover:bg-tertiary hover:text-primary'
      >
        Sign In
      </Link>
    </section>
  )
}
