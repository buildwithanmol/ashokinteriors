"use client";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import {
  HiOutlineMenuAlt3,
  HiOutlineX,
} from "react-icons/hi";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

function Header() {
  const [found, setFound] = useState(true); // Initialize with true
  const location = usePathname('/')
  const navigation = [
    { name: "Home", href: "/" },
    { name: "Project", href: "/project" },
    { name: "Workshop", href: "workshop" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" }
  ];
  const [isFixed, setIsFixed] = useState(false);

  let menu = "";

  function openMenu() {
    gsap.to(".menu", {
      top: "0",
      opacity: 1,
      zIndex: 100,
      duration: 0.5,
    });
  }

  function closeMenu() {
    gsap.to(".menu", {
      top: "-100%",
      zIndex: -100,
      opacity: 0,
      duration: 0.5,
    });
  }

  const handleScroll = () => {
    if (window.scrollY > 100) { // Change 100 to your desired scroll position
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Style object for fixed position
  const fixedNavbarStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "white",
    zIndex: 100,
  };


  return (
    <nav className={`flex items-center justify-between p-3 transition-all ${isFixed ? 'fixed' : ''}`}
      style={isFixed ? fixedNavbarStyle : {}} >
      <Link href="/">
        <Image
          alt="logo"
          src="/mainlogo.png"
          width={690}
          height={362}
          priority={true}
          className="w-28 md:w-36 select-none cursor-pointer"
        />
      </Link>
      <div className="flex items-center  flex-row-reverse ">
        <HiOutlineMenuAlt3
          onClick={openMenu}
          className={` w-8 h-8 cursor-pointer md:hidden mx-2 z-10 ${menu}`}
        />
      </div>

      <div className="hidden md:flex space-x-4  items-center md:text-sm font-semibold text-PrimaryText">
        {navigation.map((e, i) => (
          e.name == 'Project' ? <Link
            key={i}
            href={e.href}
            className={`subMenu border-b-2 border-transparent hover:border-b-2 ${location == e.href ? 'border-b-Secondary' : 'border-b-transparent'} hover:border-b-Secondary transition-all relative`}
          >
            {e.name.toUpperCase()}
            <div className="subMenudiv shadow-xl border absolute z-50 rounded-xl  p-4 flex flex-col whitespace-nowrap">
              <p className="hover:text-Secondary text-md" onClick={() => window.location.href = '/project'} >Residence</p>
              <p className="hover:text-Secondary text-md" onClick={() => window.location.href = '/project'}>Showroom</p>
              <p className="hover:text-Secondary text-md" onClick={() => window.location.href = '/project'}>Studio</p>
              <p className="hover:text-Secondary text-md" onClick={() => window.location.href = '/project'}>Home Theatre</p>
            </div>
          </Link> : <Link
            key={i}
            href={e.href}
            className={`subMenu border-b-2 border-transparent hover:border-b-2 ${location == e.href ? 'border-b-Secondary' : 'border-b-transparent'} hover:border-b-Secondary transition-all relative`}

          >
            {e.name.toUpperCase()}
          </Link>
        ))}
      </div>
      <div className="menu fixed -top-full left-0 bg-Secondary h-screen w-screen opacity-0 p-16 flex items-center justify-center flex-col space-y-5 ">
        <HiOutlineX
          className="text-white absolute top-7 right-5 text-4xl"
          onClick={closeMenu}
        />
        {
          navigation.map((e, i) => {
            return <Link href={`${e.href}`} key={i} onClick={closeMenu} className="text-white text-3xl  " >
              {e.name}
            </Link>
          })
        }
      </div>
    </nav>
  );
}

export default Header;
