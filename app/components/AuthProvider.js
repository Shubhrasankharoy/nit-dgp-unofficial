"use client"
import { clearUser, setUser } from '@/reduxStore/userSlice';
import { auth } from '@/utils/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';


export default function AuthProvider({ children }) {

  const router = useRouter()
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email } = user;
        dispatch(setUser({ uid, email, displayName }));
        router.push('/');
      } else {
        console.log("sign out")
        dispatch(clearUser());
      }
    });

    return () => { unsubscribe }
  }, [])
  return (
    <>{children}</>
  )
}
