"use client"
import Link from 'next/link'
import React from 'react'
import { navLinks } from '../utils/constants'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'

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
      <Button className='h-20 bg-background' asChild>
        <Link href='/login' className='w-full bg-background text-tertiary font-bold'>
          Sign Up
        </Link>
      </Button>
    </section>
  )
}
