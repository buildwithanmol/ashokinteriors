import Link from "next/link";
import React from "react";
import { RiUserStarLine, RiThumbUpLine, RiGroupLine } from "react-icons/ri";

const Page = () => {
  return (
    <main className="w-full h-full p-10 bg-white">
      <section className="max-w-4xl mx-auto  py-10">
        <h1 className="uppercase md:text-3xl font-bold text-xl text-center">About Us</h1>

        <div className="mt-6 text-gray-700 text-lg">
          <p>
            <span className="text-red-400 font-semibold">Our Mission</span> is to create thoughtful, beautiful interiors that meet our clients' aesthetic, functional, and economic goals. We believe in honesty and integrity in all our projects, working closely with our clients, suppliers, and contractors.
          </p>

          <p className="mt-4">
            <span className="text-red-400 font-semibold">Our Perspective</span> is backed by a strong track record, making us a reputable interior contractor company in Mumbai. We focus on professionalism, quality materials, and exceptional client support.
          </p>

          <p className="mt-4">
            <span className="text-red-400 font-semibold">Our Experience and Expertise</span> extend to various interior projects, including residential, commercial, studio, and industrial spaces. We collaborate with architectural and engineering teams to create outstanding interiors.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 place-items-center gap-8 p-6 bg-gray-100 rounded-lg">
        <div className="">
          <h2 className="text-2xl font-semibold text-red-400">Our Esteemed Clients</h2>
          <ul className="mt-4 text-gray-700 list-disc">
            <li>LAMBODARA STUDIOS SIDDHARTH & SHANKAR MAHADEVAN </li>
            <li>SUBHASH STUDIOS PVT. LTD.</li>
            <li>SOUND AND VISION STUDIOS PVT. LTD.</li>
            <li>ISLAND CITY STUDIOS</li>
            <li>CANOPY MEDIA</li>
            <li>SIAMO LIFESTYLE</li>
            <li>K.C FABRICS</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-red-400">Our Respected Architects</h2>
          <ul className="list-disc mt-4 text-gray-700">
            <li>MUNRO ACOUSTICS</li>
            <li>SOUND WIZARD</li>
            <li>ZZ ARCHITECTS</li>
            <li>KIRAN SHETTY DESIGN STUDIO</li>
            <li>ARCHITECT ZARIR MULLAN</li>
            <li>ARCHITECT JABALI MEHTA</li>
            <li>ARCHITECT KIRAN PATKI</li>
          </ul>
        </div>
      </section>

      <section className="max-w-4xl mx-auto p-10 bg-gray-100 rounded-lg text-center">
        <h2 className="text-2xl font-semibold text-red-400 mb-6">Experience, Expertise, and Satisfaction</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-md flex flex-col items-center">
            <RiUserStarLine className="text-6xl text-red-400 " />
            <div className="mt-4">
              <h3 className="text-3xl font-semibold">30+</h3>
              <p className="text-gray-700">Years of Experience</p>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md flex flex-col items-center">
            <RiThumbUpLine className="text-6xl text-red-400" />
            <div className="mt-4">
              <h3 className="text-3xl font-semibold">200+</h3>
              <p className="text-gray-700">Projects Completed</p>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-md flex flex-col items-center">
            <RiGroupLine className="text-6xl text-red-400" />
            <div className="mt-4">
              <h3 className="text-3xl font-semibold">190+</h3>
              <p className="text-gray-700">Satisfied Clients</p>
            </div>
          </div>
        </div>
       <Link href="/contact">
       <button className="p-2 mt-4 bg-Secondary border border-Secondary hover:bg-Primary text-white hover:text-Secondary transition-all rounded-md">Contact Us</button>
       </Link>

      </section>

    </main>
  );
};

export default Page;
