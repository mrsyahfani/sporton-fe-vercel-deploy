"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiSearch, FiShoppingBag } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <header>
            <nav className="md:flex justify-between gap-10 container mx-auto py-7">
                <div className="hidden md:block">
                    <Image src="/images/logo.svg" alt="Sporton Logo" width={127} height={30}/>
                </div>
                {/* Desktop Menu */}
                <div className="hidden md:flex gap-44 font-medium" >
                    <Link href="#" className="relative after:content-[''] after:block after:bg-primary after:rounded-full after:h-[3px] after:w-1/2 after:absolute after:left-1/2 after:-translate-x-1/2 after:translate-y-1">Home</Link>
                    <Link href="#">Category</Link>
                    <Link href="#">Explore Products</Link>
                </div>
                <div className="hidden md:flex gap-10">
                    <FiSearch size={24}/>
                    <div className="relative">
                        <FiShoppingBag size={24}/>
                        <div className="bg-primary rounded-full w-3.5 h-3.5 absolute -top-1 -right-1 text-[10px] text-white text-center">
                            3
                        </div>
                    </div>
                </div>
                {/* Hamburger Button */}
                <button onClick={() => setIsOpen(!isOpen)} className="md:hidden mx-4">
                    {isOpen ? <IoMdClose /> : <RxHamburgerMenu />}
                </button>
                {/* Mobile Menu */}
                    {isOpen && (
                        <div className="flex flex-col items-center md:hidden bg-primary-light text-primary p-5 text-center">
                            <Image src="/images/logo-mobile.svg" alt="Sporton Logo" width={25} height={25} className="m-4"/>
                            <div className="inline-block my-4">
                                <Link href="#" className="block py-2">Home</Link>
                                <Link href="#" className="block py-2">Category</Link>
                                <Link href="#" className="block py-2">Explore Products</Link>
                            </div>
                             <div className="flex justify-between gap-20 mt-5">
                                <FiSearch size={24}/>
                                <FiShoppingBag size={24}/>
                             </div>
                        </div>
                     )}
            </nav>
        </header>
    )
}
