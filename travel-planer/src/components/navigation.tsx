import Link from "next/link";
import Image from "next/image";



interface NavigationProps {
    label: string;
    icon: string;
    href: string;
    onClose: () => void,
    isActive: boolean;
}

export function Navigation({href, icon, label, onClose, isActive}: NavigationProps) {

    return (
        <button className={`flex items-center gap-3 px-3 py-2 rounded transition-colors ${isActive ? 'bg-gray-100 text-blue-600' : 'hover:text-blue-600'}`}>
                <Image
                    src={icon}
                    alt={label}
                    width={20}
                    height={20}
                />
                <Link
                    key={href}
                    href={href}
                    onClick={onClose}
                    className="flex items-center space-x-2 hover:text-blue-600"
                >
                    <span>{label}</span>
                </Link>
        </button>
    )
}