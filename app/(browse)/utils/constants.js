
import { Home, Contact, Settings } from "lucide-react"

export const navLinks = [
    {
        title: 'Home',
        url: '/',
        icon: Home
    },
    {
        title: 'Settings',
        url: '/settings',
        icon: Settings
    },
    {
        title: 'Contact',
        url: '/contact',
        icon: Contact
    }
]

export const filters = [
    {
        type: 'semester',
        options: ['1st','2nd','3rd','4th','5th','6th','7th','8th']
    },
    {
        type: 'content',
        options: ['PYQ','referance book','notes']
    },
    {
        type: 'subject',
        options: ['math','physics','chemistry','others']
    },
    {
        type: 'branch',
        options: ['CSE','EE','ECE','BT','CHE','CE','MME','ME']
    }
]