'use client'

import {usePathname, useRouter} from 'next/navigation'
import { useState } from 'react'
import Image from 'next/image'
import HamburgerMenu from '@/components/hamburger-menu'
import {NAV_ITEMS} from "@/config/pages.config";


const pathToTitle: Record<string, string> = NAV_ITEMS.reduce(
    (acc, item) => {
        acc[item.href] = item.label
        return acc
    },
    {} as Record<string, string>
)

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();
    const title = pathToTitle[pathname];
    const router = useRouter();


    return (
        <>
            <header className="stiky bg-white shadow-md z-50">
                <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">

                    <button onClick={() => {
                        setIsMenuOpen(true)
                    }} aria-label="Открыть меню">
                        <Image
                            src="/menu.svg"
                            alt="Меню"
                            width={24}
                            height={24}
                            className="cursor-pointer color-blue-500"
                        />
                    </button>

                    <h5>{title}</h5>

                    <button className="cursor-pointer" onClick={() => router.push('/profile')}>
                        <Image
                            src="/user.svg"
                            alt="Пользователь"
                            width={20}
                            height={20}
                        />
                    </button>
                </div>
            </header>

            <HamburgerMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
        </>
    )
}

export default Header
