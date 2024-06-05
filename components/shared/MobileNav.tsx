'use client'

import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { navLinks } from "@/constants"
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "../ui/button"

const MobileNav = () => {
    const pathname = usePathname()

    return (
        <header className="header">
            <Link href="/" className="flex items-center gap-2 md:py-2">
                <Image src="/assets/images/logo-text.svg" alt="logo" width={180} height={28} />
            </Link>

            <nav className="fle gap-2">
                <SignedIn>
                    <UserButton afterSignOutUrl="/" />

                    <Sheet>
                        <SheetTrigger>
                            <Image
                                src="/assets/icons/menu.svg"
                                alt="menu"
                                width={32}
                                height={32}
                                className="cursor-pointer"
                            />
                        </SheetTrigger>
                        <SheetContent side="left" className="sheet-content sm:w-64">
                            <SheetClose asChild>
                                <>
                                    <Image
                                        src="/assets/images/logo-text.svg"
                                        width={152}
                                        height={23}
                                        alt="logo"
                                    />

                                    <ul className="header-nav_elements">
                                        {navLinks.map(link => {
                                            const isActive = link.route === pathname
                                            return (
                                                <li
                                                    className={`${isActive && "gradient-text"} p-18 flex whitespace-nowrap text-dark-700`}
                                                    key={link.route}
                                                >
                                                    <SheetClose asChild key={link.route}>

                                                        <Link className="sidebar-link cursor-pointer" href={link.route}>
                                                            <Image
                                                                src={link.icon}
                                                                alt="logo"
                                                                height={24}
                                                                width={24} />
                                                            {link.label}
                                                        </Link>

                                                    </SheetClose>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </>
                            </SheetClose>
                        </SheetContent>
                    </Sheet>
                </SignedIn>

                <SignedOut>
                    <Button asChild className="button bg-purple-gradient bg-cover">
                        <Link href={"/sign-in"}>Login</Link>
                    </Button>
                </SignedOut>
            </nav>
        </header >
    )
}
export default MobileNav