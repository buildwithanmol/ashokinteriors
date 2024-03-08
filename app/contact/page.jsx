import React from "react";
import Link from 'next/link';
import {
  RiMapPinLine,
  RiMailLine,
  RiPhoneLine,
  RiFacebookFill,
  RiInstagramLine,
  RiTwitterXLine,
} from "react-icons/ri";

const page = () => {
  return (
    <main className="w-full md:h-screen h-auto bg-slate-50 flex flex-col items-center justify-center text-center gap-10 p-5 md:p-12 md:px-20">
      <div className="flex flex-col justify-center text-center items-center">
        <h2 className="uppercase md:text-3xl font-bold text-xl">Contact Us</h2>
      </div>
      <section className="flex-1 w-full grid md:grid-cols-2 grid-cols-1 ">
        <div className=" bg-white h-full shadow-md grid grid-cols-2 gap-5 grid-rows-2 p-2 pt-5">
          <div className="flex flex-col items-center justify-start gap-1 text-center pt-2">
            <RiMapPinLine className="border-2 w-16 h-16 rounded-full border-Secondary p-2" />
            <h2 className="font-semibold">ADDRESS:</h2>
            <p className="p-2 text-sm md:text-xl">
              Shop No - 03, C-23, Poonam Sagar Complex, Mira Road(E),
              Thane, Maharashtra,
              <br /> Pin - 401107
            </p>
          </div>

          <div className="flex flex-col items-center justify-start gap-1 text-center pt-2">
            <RiPhoneLine className="border-2 w-16 h-16 rounded-full border-Secondary p-2" />
            <h2 className="font-semibold">CALL US:</h2>
            <p className="p-2 text-sm md:text-xl">
            +91 9819215088 <br /> +91 2249728988
            </p>
          </div>
          <div className="flex flex-col items-center justify-start gap-1 text-center pt-2">
            <RiMailLine className="border-2 w-16 h-16 rounded-full border-Secondary p-2" />
            <h2 className="font-semibold">EMAIL:</h2>
            <p className="p-2 text-sm md:text-xl">info@ashokinteriors.com</p>
          </div>
          <div className="flex flex-col items-center justify-start gap-1 text-center pt-3">
            <h2 className="font-semibold text-2xl text-Secondary">
              SOCIAL LINKS:
            </h2>
            <p className="p-2 text-4xl flex gap-2">
             <Link href="https://www.facebook.com/AshokInteriors?sfnsn=wiwspwa&mibextid=RUbZ1f" target="_blank">
             <RiFacebookFill />
             </Link>
             <Link href="https://www.instagram.com/ashokinteriors/" target="_blank">
              <RiInstagramLine />
             </Link>
            </p>
          </div>
        </div>

        <div className="h-full overflow-hidden">
          <iframe
            srcDoc={`<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7532.424450948996!2d72.863388!3d19.273135!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b059fe1b819b%3A0xcc132e469d9af693!2sASHOK%20INTERIORS!5e0!3m2!1sen!2sin!4v1696350839425!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`}
            title="Google Maps"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="w-full md:h-full h-96 overflow-x-hidden"
          />
        </div>
      </section>
    </main>
  );
};

export default page;
