import React from 'react';
import Image from "next/image";
import Link from "next/link";


const Navbar = () => {
    return (
        <div className={'bg-black flex h-16 items-center px-4 gap-7'}>
            <Link href={'/'} className={'text-white font-noto_sans font-bold text-3xl'}>IHFRA</Link>
            <Link href={'/newsletter'} className={'text-gray-500 font-noto_sans font-bold text-xl'}>Newsletter</Link>
            <Link href={'/volunteer'} className={'text-gray-500 font-noto_sans font-bold text-xl'}>Volunteer</Link>
            <Link href={'/contact'} className={'text-gray-500 font-noto_sans font-bold text-xl justify-end'}>Contact</Link>
        </div>
    );
};

export default Navbar;