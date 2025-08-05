import { NAV_ITEMS } from "@/config/pages.config";
import Link from "next/link";


export function ProfileNavigation(){

    return (
        <>
            {NAV_ITEMS.map((item) => (
                <Link key={item.id} href={item.href}>
                    <button className="w-full bg-gray-100 hover:bg-gray-200 rounded-lg py-3 text-sm font-medium cursor-pointer">
                        {item.label}
                    </button>
                </Link>
            ))}
        </>
    )
}