"use client"
import Link from 'next/link'
import React from 'react'
import { navLinks } from '../utils/constants'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { ChevronsUpDown, LogIn, LogOut, User2 } from 'lucide-react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger, DropdownMenuItem } from '@/components/ui/dropdown-menu'
import { signOut } from 'firebase/auth'
import { auth } from '@/utils/firebase'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/navigation'


const avatar = "https://avatars.githubusercontent.com/u/12345678?v=4";


export default function LeftSideBar() {
  const dispatch = useDispatch();
  const router = useRouter();

  const user = useSelector((state) => state.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Sign out successful");
        dispatch(clearUser());
        // Optionally redirect to login page or home page
        // router.push('/login'); 
      })
      .catch((err) => {
        console.log(err);
      })
  }

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navLinks.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>


      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild className="h-14">
                <SidebarMenuButton>
                  <img src={avatar} alt="User Avatar" className="w-10 h-10 rounded-full" />
                  <div className='flex flex-col'>
                    <span className='font-medium'>{user.user != null ? user.user.displayName : "Guest"}</span>
                    <span className='text-sm text-muted-foreground'>{user.user != null ? user.user.email : "guest@example.com"}</span>
                  </div>
                  <ChevronsUpDown className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="right"
                className="w-[--radix-popper-anchor-width]"
              >
                <DropdownMenuItem>
                  <User2 />
                  <span>Account</span>
                </DropdownMenuItem>
                {user.user != null ? (
                  <DropdownMenuItem onClick={handleSignOut}>
                    <LogOut />
                    <span>Sign out</span>
                  </DropdownMenuItem>
                ) : (
                  <DropdownMenuItem onClick={() => router.push('/login')}>
                    <LogIn />
                    <span>Sign in</span>
                  </DropdownMenuItem>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
