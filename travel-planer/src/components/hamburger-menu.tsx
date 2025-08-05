'use client'

import {Navigation} from "@/components/navigation";
import Image from "next/image";
import {usePathname} from "next/navigation";
import {NAV_ITEMS} from "@/config/pages.config";

interface BurgerMenuProps {
    isOpen: boolean
    onClose: () => void
}

const HamburgerMenu = ({ isOpen, onClose }: BurgerMenuProps) => {
    const pathName = usePathname()

    return (
        <aside>
            <div
                className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
                    isOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
            >
                <div className="p-6 flex flex-col gap-8">
                    <div className='flex items-center justify-between items-end'>
                        <p className="text-xl font-bold">Меню</p>
                        <button onClick={onClose} className='cursor-pointer'>
                            <Image
                                src='./cross.svg'
                                alt='закрыть'
                                width={20}
                                height={20}
                            />
                        </button>
                    </div>
                    <nav className="flex flex-col gap-8">
                        {NAV_ITEMS.map((item) => (
                            <Navigation
                                key={item.id}
                                label={item.label}
                                icon={item.icon}
                                href={item.href}
                                onClose={onClose}
                                isActive={pathName === item.href}
                            />
                        ))}
                    </nav>
                </div>
            </div>
            {isOpen && (
                <div
                    className="fixed inset-0 bg-opacity-40 z-40"
                    onClick={onClose}
                ></div>
            )}
        </aside>
    )
}

export default HamburgerMenu
