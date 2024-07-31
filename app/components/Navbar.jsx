"use client"
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function Navbar(){
    // const [isNavOpen, setIsNavOpen] = useState(false);
    // const mySideNavRef = useRef(null);

    // const openNav = () => {
    //     setIsNavOpen(true);
    // };

    // const closeNav = () => {
    //     setIsNavOpen(false);
    // };

    // useEffect(() => {
    //     if (isNavOpen) {
    //     mySideNavRef.current.style.width = '250px';
    //     } else {
    //     mySideNavRef.current.style.width = '0';
    //     }
    // }, [isNavOpen]);
    
    return(
        
        <div className='container'>
            <header>
            {/* <a href="#" className="hamburger mobile-visible"><img src="hamMenu.svg" alt=""className="hamburger-menu"  onClick={openNav()}  /></a> */}
            <ul className='liste'>
               <Link href="/"><li>Ana Sayfa</li></Link>
               <Link href="/hakkimda"><li>Hakkımda</li></Link>
               <Link href="/projelerim"><li>Projelerim</li></Link>
               <Link href="/cv"><li>CV</li></Link>
               <Link href="/iletisim"><li>İletişim</li></Link>
            </ul>
            <div className="border">

            </div>

            {/* Mobile Hamburger */}
            <div id="mySideNav" className="sideNav">
                    {/* <a href="javascript:void(0)" className="closebtn" onClick={closeNav()}>&times;</a> */}
                    <Link href="/"><li>Ana Sayfa</li></Link>
                    <Link href="/hakkimda"><li>Hakkımda</li></Link>
                    <Link href="/projelerim"><li>Projelerim</li></Link>
                    <Link href="/cv"><li>CV</li></Link>
                    <Link href="/iletisim"><li>İletişim</li></Link>
            </div>
            </header>
        </div>
    )
}
