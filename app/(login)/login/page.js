"use client"

import React, { useState } from 'react'
import LoginForm from './components/LoginForm'
import SignUpForm from './components/SignUpForm'
import Link from 'next/link';

export default function page() {
  const [isLoginForm, setIsLoginForm] = useState(true);

  return (
    <div className='flex items-center justify-center h-screen'>
      {isLoginForm ?
      <LoginForm toggleForm={()=>setIsLoginForm(!isLoginForm)}/>
        :
      <SignUpForm toggleForm={()=>setIsLoginForm(!isLoginForm)}/>
    }
            <Link href='/' className='bg-red-600'>Skip Login</Link>
    </div>
  )
}
